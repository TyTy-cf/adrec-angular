import { Component, OnInit } from '@angular/core';
import {Department} from '../../models/department';
import {DepartmentService} from '../../services/department.service';
import {ActivatedRoute} from '@angular/router';
import {Region} from '../../models/region';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.scss']
})
export class DepartmentShowComponent implements OnInit {

  department: Department;
  region: Region;

  constructor(
    public departmentService: DepartmentService,
    private regionService: RegionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.department = this.departmentService.getDepartment(params.code);
      if (this.department) {
        this.region = this.regionService.getRegion(this.department.codeRegion);
      }
    });
  }

}
