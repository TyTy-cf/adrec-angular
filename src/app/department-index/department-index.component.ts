import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../services/department.service';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-department-index',
  templateUrl: './department-index.component.html',
  styleUrls: ['./department-index.component.scss']
})
export class DepartmentIndexComponent implements OnInit {

  public faPencilAlt = faPencilAlt;

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  editRegion(): void {
  }
}
