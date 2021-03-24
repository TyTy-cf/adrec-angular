import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../services/department.service';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {Guid} from 'guid-typescript';
import {GuidDepartment} from '../../models/department';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  public faPencilAlt = faPencilAlt;

  selectedGuid: Guid;
  guidDepartments: GuidDepartment[];

  constructor(
    public departmentService: DepartmentService,
    public regionService: RegionService
  ) {
    this.guidDepartments = departmentService.getDepartmentsList();
  }

  ngOnInit(): void {
  }

  updateDepartmentList(hasToRefresh: boolean): void {
    if (hasToRefresh) {
      this.guidDepartments = this.departmentService.getDepartmentsList();
      this.selectedGuid = null;
    }
  }

  onEditDepartment(guid: Guid): void {
    this.selectedGuid = guid;
  }
}
