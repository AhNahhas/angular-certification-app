import { Component } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from '../../core/components/shared.module';
import { FilterForm } from '../../models/filter-form.model';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  filters  : FormGroup;
  movies$  : Observable<Movie[]>;

  constructor(
    private readonly dataService : DataService,
    private readonly formBuilder : FormBuilder
  ) { 

    this.filters = this.formBuilder.group<FilterForm>({
      title : new FormControl('', { nonNullable : true }),
      release_year : new FormControl('', { nonNullable : true })
    });

    //do not call api on every form change
    this.movies$ = this.dataService.getMovies().pipe(
      switchMap((movies : Movie[]) => 
        this.filters.valueChanges.pipe(
          startWith({ title : '', release_year: '' }),
          map((values : { title : string; release_year : string }) => 
            movies.filter(movie => 
              movie.release_date.startsWith(values.release_year) &&
                movie.title.toLowerCase().includes(values.title.toLowerCase()))
          )
        )
      )
    );

  }


}
