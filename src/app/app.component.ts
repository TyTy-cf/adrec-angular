import {Component, OnInit} from '@angular/core';

interface RoutesTitle {
  path: string;
  title: string;
}

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

  // RoutesTitle équivaut à la même chose que : {path: string, title: string}
  routesMenu: RoutesTitle[];

  /**
   * Passer en paramètre un "attribut" au constructeur,
   * Fait la même chose que de le déclarer en attribut de classe
   */
  constructor() {
    this.routesMenu = new Array<RoutesTitle>();
  }

  changeTitle(): void {
    this.title = 'Super angular adrec';
  }

  ngOnInit(): void {
    this.routesMenu.push({path: 'region/index', title: 'Region Index'});
    // this.routesMenu.push({path: 'region/show/:code', title: 'Region Show'});
    this.routesMenu.push({path: 'department/index', title: 'Department Index'});
    // this.routesMenu.push({path: 'department/show/:code', title: 'Department Show'});
  }
}
