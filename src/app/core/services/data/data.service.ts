import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public readonly API_URL : string = 'http://localhost:4200';

  constructor(private readonly http : HttpClient) { }

  getMovies() : Observable<Movie[]> {

    return this.http.get<Movie[]>(`${this.API_URL}/movies`);

  }

  getMovie(id : string) : Observable<Movie> {

    return this.http.get<Movie>(`${this.API_URL}/movies/${id}`);

  }

}
