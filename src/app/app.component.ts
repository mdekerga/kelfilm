import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmComponentComponent } from './film-component/film-component.component';
import { ButtonComponent } from './button/button.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  imports: [FilmComponentComponent, ButtonComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kelfilm';
}
