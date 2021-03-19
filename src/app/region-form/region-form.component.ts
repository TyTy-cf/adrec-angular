import { Component, OnInit } from '@angular/core';
import {Region} from '../../models/region';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-region-form',
  templateUrl: './region-form.component.html',
  styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnInit {

  region: Region;
  public faPlusCircle = faPlusCircle;

  constructor(public regionService: RegionService) {
    this.region = new Region();
  }

  ngOnInit(): void {
  }

  infoAdd(): void {
    alert('Region bien ajoutée !');
  }

  addRegion(): void {
    this.regionService.addRegion(this.region);
    this.region = new Region();
  }
}
