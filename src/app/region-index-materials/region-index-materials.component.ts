import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Region} from '../../models/region';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-region-index-materials',
  templateUrl: './region-index-materials.component.html',
  styleUrls: ['./region-index-materials.component.scss']
})
export class RegionIndexMaterialsComponent implements OnInit {

  dataSource: MatTableDataSource<Region>;
  regions: Region[];
  displayedColumns: string[] = ['name', 'code'];

  constructor(public regionService: RegionService) {
    this.regions = new Array<Region>();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.regionService.regionsTmp);
  }

}
