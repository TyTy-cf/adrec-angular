import {Department} from '../models/department';

export abstract class AbstractDepartment {
  abstract getDepartmentsList(): Department[];
  abstract getDepartment(code: string): Department;
  abstract addDepartment(department: Department): void;
  abstract deleteDepartment(code: string): Department[];
  abstract editDepartment(code: string): Department;
}
