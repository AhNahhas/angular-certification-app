import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full'},
    {
        path: 'movies',
        loadComponent: () => import('./pages/movies-list/movies-list.component').then(c => c.MoviesListComponent)
    },
    {
        path: 'movies/:id',
        loadComponent: () => import('./pages/movie/movie.component').then(c => c.MovieComponent)
    },
    {
        path: '**',
        redirectTo: 'movies'
    }
];
