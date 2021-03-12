import { Component } from '@angular/core';
import {Region} from '../models/region';
import {RegionService} from '../services/region.service';

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
  regions: Region[];

  /**
   * Passer en paramètre un "attribut" au constructeur,
   * Fait la même chose que de le déclarer en attribut de classe
   */
  constructor(private regionService: RegionService) {
    this.regions = regionService.getRegionsList();
  }

  changeTitle(): void {
    this.title = 'Super angular adrec';
  }
}
