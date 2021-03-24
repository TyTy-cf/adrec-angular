import { Injectable } from '@angular/core';
import {AbstractDepartment} from './abstract-department';
import {Department, GuidDepartment} from '../models/department';
import {Guid} from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends AbstractDepartment {

  departments: GuidDepartment[];

  constructor() {
    super();
    this.departments = new Array<GuidDepartment>();
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
    this.departments.push({id: Guid.create(), department});
    this.departments.push({id: Guid.create(), department: department1});
    this.departments.push({id: Guid.create(), department: department2});
    this.departments.push({id: Guid.create(), department: department3});
  }

  addDepartment(department: Department): void {
    this.departments.push({id: Guid.create(), department});
  }

  deleteDepartment(guid: Guid): GuidDepartment[] {
    this.departments = this.departments.filter(gd => !gd.id.equals(guid));
    return this.departments;
  }

  editDepartment(guid: Guid, department: Department): GuidDepartment {
    this.departments = this.deleteDepartment(guid);
    const newGuidDept = { id: guid, department };
    this.departments.push(newGuidDept);
    return newGuidDept;
  }

  getDepartment(guid: Guid): GuidDepartment {
      const departments =  this.departments.filter(d => d.id.equals(guid));
      if (!departments) {
        throw new Error('The code department doesn\'t exist');
      }
      return departments[0];
  }

  getDepartmentsList(): GuidDepartment[] {
    return this.departments;
  }

  getDepartmentsListByCodeRegion(codeRegion: string): GuidDepartment[] {
      // Equivalent du filter :
      // for (const d of this.getDepartmentsList()) {
      //   if (d.codeRegion === codeRegion) {
      //     // traitement
      //   }
      // }
      const departments =  this.departments.filter(d => d.department.codeRegion === codeRegion);
      if (!departments) {
        throw new Error('The codeRegion has no department linked');
      }
      return departments;
  }
}

