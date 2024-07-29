import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrl: './movie-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieHeaderComponent {

  @Input({ required: true}) movie! : Movie;

}
