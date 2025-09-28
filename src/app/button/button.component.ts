import { Component, Input,inject } from '@angular/core';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() texte: string = '';
  @Input() color: string = '';


  private movieService = inject(MovieService);


  public getMovie(){
    this.movieService.fetchMovie();
  }
  @Input() clickFunction: string = '';
}
