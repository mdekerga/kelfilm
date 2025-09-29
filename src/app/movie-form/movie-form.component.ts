import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly genres: string[] = [
    'Action',
    'Comedy',
    'Romance',
    'Thriller',
    'Horror',
  ];

  readonly periode: string[] = [
    '1960',
    '1970',
    '1980',
    '1990',
    '2000',
    '2010',
    '2020',
  ];

  readonly myFormGroup = this.formBuilder.group({
    pays: [''],
    genre: [''],
    acteur: [''],
    date: [null],
    duree: [null],
    periode1: [null],
    periode2: [null],
  });

  save(): void {
    console.log(this.myFormGroup.value);
  }
  setDuree(): void {
    const dureeInput = document.getElementById(
      'duree'
    ) as HTMLInputElement | null;
    const dureeDisplay = document.getElementById('duree_input');
    if (dureeInput && dureeDisplay) {
      dureeDisplay.textContent = dureeInput.value;
    }
  }
}
