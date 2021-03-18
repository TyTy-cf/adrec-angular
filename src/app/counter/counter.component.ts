import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  compteur: number;
  compteurCss: string;

  constructor() {
    this.compteur = 0;
    this.compteurCss = 'neutral';
  }

  changeCompteur(interval: number): void {
    this.compteur += interval;
    if (this.compteur === 0) {
      this.compteurCss = 'neutral';
    } else if (this.compteur > 0 && this.compteur < 50) {
      this.compteurCss = 'positive';
    } else if (this.compteur > 50) {
      this.compteurCss = 'positive-max';
    } else if (this.compteur < 0 && this.compteur > -50) {
      this.compteurCss = 'negative';
    } else if (this.compteur < -50) {
      this.compteurCss = 'negative-max';
    }
  }

  reset(): void {
    this.compteur = 0;
    this.compteurCss = 'neutral';
  }

  ngOnInit(): void {
  }

}
