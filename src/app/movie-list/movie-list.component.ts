import { Component, inject } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-movie-list',
  imports: [ButtonComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {}
