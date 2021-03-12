import { Component } from '@angular/core';
import {Region} from '../models/region';
import {RegionService} from '../services/region.service';
import {MatTableDataSource} from '@angular/material/table';
import {AbstractDepartment} from '../services/abstract-department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adrec';
  alphabet = [...Array(26)].map((q, w) => String.fromCharCode(w + 97));
  btnLabel = 'Change title';
  btnId = 'idBtnChangeTitle';

  compteur: number;

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
    this.dataSource = new MatTableDataSource(regionService.getRegionsList());
    this.compteur = 0;
  }

  changeTitle(): void {
    this.title = 'Super angular adrec';
  }

  changeCompteur(interval: number): void {
    this.compteur += interval;
  }
}
