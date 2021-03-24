import { Component, OnInit } from '@angular/core';
import {Department} from '../../models/department';
import {GuidRegion} from '../../models/region';
import {DepartmentService} from '../../services/department.service';
import {RegionService} from '../../services/region.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-region-show',
  templateUrl: './region-show.component.html',
  styleUrls: ['./region-show.component.scss']
})
export class RegionShowComponent implements OnInit {

  guidRegion: GuidRegion;
  departments: Department[];

  constructor(
    public departmentService: DepartmentService,
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.guidRegion = this.regionService.getRegion(params.guid);
      if (this.guidRegion) {
        this.departments = this.departmentService.getDepartmentsListByCodeRegion(this.guidRegion.region.code);
      }
    });
  }

}
