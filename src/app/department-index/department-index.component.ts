import { Component, OnInit } from '@angular/core';
import {AbstractDepartment} from '../../services/abstract-department';

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  constructor(public departmentService: AbstractDepartment) { }

  ngOnInit(): void {
  }

}
