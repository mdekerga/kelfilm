import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  async fetchMovie() {
    this.fetchCSV('../../../public/movie.csv');
  }

  async fetchCSV(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.text();
      const outputElement = document.getElementById('output');
      if (outputElement) {
        outputElement.innerText = data;
      }
    } catch (error) {
      console.error('Error fetching CSV:', error);
    }
  }
}
