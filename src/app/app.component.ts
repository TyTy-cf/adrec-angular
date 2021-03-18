import {Component, OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

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
  constructor(public routesModules: AppRoutingModule) { }

  changeTitle(): void {
    this.title = 'Super angular adrec';
  }

  ngOnInit(): void {
  }
}
