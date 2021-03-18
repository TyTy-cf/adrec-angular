import { Injectable } from '@angular/core';
import {AbstractDepartment} from './abstract-department';
import {Department} from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends AbstractDepartment {

  departments: Department[];

  constructor() {
    super();
    this.departments = new Array<Department>();
    const department = new Department();
    department.name = 'Allier';
    department.code = '03';
    department.codeRegion = '84';
    const department1 = new Department();
    department1.name = 'Puy de Dôme';
    department1.code = '63';
    department1.codeRegion = '84';
    const department2 = new Department();
    department2.name = 'Cantal';
    department2.code = '15';
    department2.codeRegion = '84';
    const department3 = new Department();
    department3.name = 'Haute-Loire';
    department3.code = '43';
    department3.codeRegion = '84';
    this.departments.push(department);
    this.departments.push(department1);
    this.departments.push(department2);
    this.departments.push(department3);
  }

  addDepartment(department: Department): void {
  }

  deleteDepartment(code: string): Department[] {
    return [];
  }

  editDepartment(code: string): Department {
    return undefined;
  }

  getDepartment(code: string): Department {
    const departments =  this.departments.filter(d => d.code === code);
    if (!departments) {
      throw new Error('The code department doesn\'t exist');
    }
    return departments[0];
  }

  getDepartmentsList(): Department[] {
    return this.departments;
  }
}

