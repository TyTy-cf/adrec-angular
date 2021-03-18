import {Component, OnInit} from '@angular/core';
import {AbstractDepartment} from '../services/abstract-department';
import {RegionService} from '../services/region.service';

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

  /**
   * Passer en paramètre un "attribut" au constructeur,
   * Fait la même chose que de le déclarer en attribut de classe
   */
  constructor(
    public regionService: RegionService,
    public departmentService: AbstractDepartment) {
  }

  changeTitle(): void {
    this.title = 'Super angular adrec';
  }

  ngOnInit(): void {
  }
}
