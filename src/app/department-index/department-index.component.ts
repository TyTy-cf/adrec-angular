import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

}
