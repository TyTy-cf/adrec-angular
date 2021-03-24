import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartmentService} from '../../services/department.service';
import {RegionService} from '../../services/region.service';
import {Guid} from 'guid-typescript';
import {Department} from '../../models/department';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit, OnChanges {

  @Input()
  guid: Guid;

  @Output()
  refreshList: EventEmitter<boolean>;

  department: Department;
  departmentForm: FormGroup;
  public faPlusCircle = faPlusCircle;

  constructor(
    public departmentService: DepartmentService,
    public regionService: RegionService
  ) {
    this.refreshList = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.department = new Department();
    this.guid = Guid.create();
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const oldGuid = changes.guid.previousValue;
    const newGuid = changes.guid.currentValue;
    if (oldGuid !== newGuid) {
      this.guid = newGuid;
      this.department = this.departmentService.getDepartment(this.guid).department;
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.departmentForm = new FormGroup(
      {
        name: new FormControl(
          this.department.name, [
            Validators.required,
          ]
        ),
        code: new FormControl(
          this.department.code, [
            Validators.required,
            Validators.pattern('^[0-9]{2}$')
          ]
        ),
        codeRegion: new FormControl(
          this.department.codeRegion, [
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
    const departmentEdit = this.departmentService.getDepartment(this.guid);
    this.department = this.departmentForm.value;
    if (departmentEdit !== undefined) {
      this.departmentService.editDepartment(this.guid, this.department);
      this.guid = Guid.create();
      this.refreshList.emit(true);
    } else {
      this.departmentService.addDepartment(this.department);
    }
  }
}
