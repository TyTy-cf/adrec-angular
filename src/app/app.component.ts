import {Component, OnInit} from '@angular/core';
import {Region} from '../models/region';
import {RegionService} from '../services/region.service';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractDepartment} from '../services/abstract-department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adrec';
  alphabet = [...Array(26)].map((q, w) => String.fromCharCode(w + 97));
  btnLabel = 'Change title';
  btnId = 'idBtnChangeTitle';

  compteur: number;
  compteurCss: string;

  dataSource: MatTableDataSource<Region>;
  displayedColumns: string[] = ['name', 'code'];

  /**
   * Passer en paramètre un "attribut" au constructeur,
   * Fait la même chose que de le déclarer en attribut de classe
   */
  constructor(
    public regionService: RegionService,
    public departmentService: AbstractDepartment
  ) {
    this.compteur = 0;
    this.compteurCss = 'neutral';
  }

  changeTitle(): void {
    this.title = 'Super angular adrec';
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
    this.dataSource = new MatTableDataSource(this.regionService.getRegionsList());
  }
}
