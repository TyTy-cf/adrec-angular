import { Component, OnInit } from '@angular/core';
import {GuidDepartment} from '../../models/department';
import {DepartmentService} from '../../services/department.service';
import {ActivatedRoute} from '@angular/router';
import {GuidRegion, Region} from '../../models/region';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.scss']
})
export class DepartmentShowComponent implements OnInit {

  guidDepartment: GuidDepartment;
  guidRegion: GuidRegion;

  constructor(
    public departmentService: DepartmentService,
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.guidDepartment = this.departmentService.getDepartment(params.guid);
      if (this.guidDepartment) {
        this.guidRegion = this.regionService.getRegionByCode(this.guidDepartment.department.codeRegion);
      }
    });
  }

}
