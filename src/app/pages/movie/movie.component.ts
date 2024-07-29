import { Component } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { Observable, tap } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../core/components/shared.module';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  movie$ : Observable<Movie>;

  constructor(
    private readonly route : ActivatedRoute,
    private readonly dataService : DataService
  ) {

    let id = route.snapshot.params['id'];
    this.movie$ = dataService.getMovie(id);

  }

  ngOnInit() : void { }

}
