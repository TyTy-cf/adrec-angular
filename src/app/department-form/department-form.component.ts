import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartmentService} from '../../services/department.service';
import {RegionService} from '../../services/region.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  departmentForm: FormGroup;
  public faPlusCircle = faPlusCircle;

  constructor(
    public departmentService: DepartmentService,
    public regionService: RegionService
  ) { }

  ngOnInit(): void {
    this.departmentForm = new FormGroup(
      {
        name: new FormControl(
          '', [
            Validators.required,
          ]
        ),
        code: new FormControl(
          '', [
            Validators.required,
            Validators.pattern('^[0-9]{2}$')
          ]
        ),
        codeRegion: new FormControl(
          '', [
            Validators.required,
            Validators.pattern('^[0-9]{2}$')
          ]
        )
      }
    );
  }

  get name(): any {
    return this.departmentForm.get('name');
  }

  get code(): any {
    return this.departmentForm.get('code');
  }

  get codeRegion(): any {
    return this.departmentForm.get('codeRegion');
  }

  addDepartment(): void {
    this.departmentService.addDepartment(this.departmentForm.value);
  }
}
