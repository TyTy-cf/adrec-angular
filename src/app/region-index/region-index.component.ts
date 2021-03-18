import { Component, OnInit } from '@angular/core';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent implements OnInit {

  constructor(public regionService: RegionService) { }

  ngOnInit(): void {
  }

}
