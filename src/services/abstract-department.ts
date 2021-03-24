import {Department, GuidDepartment} from '../models/department';
import {Guid} from 'guid-typescript';

export abstract class AbstractDepartment {
  abstract getDepartmentsList(): GuidDepartment[];
  abstract getDepartmentsListByCodeRegion(codeRegion: string): GuidDepartment[];
  abstract getDepartment(guid: Guid): GuidDepartment;
  abstract addDepartment(department: Department): void;
  abstract deleteDepartment(guid: Guid): GuidDepartment[];
  abstract editDepartment(guid: Guid, department: Department): GuidDepartment;
}
