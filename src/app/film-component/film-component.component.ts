import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-component',
  imports: [],
  templateUrl: './film-component.component.html',
  styleUrl: './film-component.component.css',
})
export class FilmComponentComponent {
  @Input() titre: String = '';
  @Input() directeur: String = '';
  @Input() realisateur: String = '';

  @Input() duree: number = 0;
  @Input() annee: number = 0;
}
