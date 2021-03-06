import {Guid} from 'guid-typescript';

export interface GuidDepartment {
  id: Guid;
  department: Department;
}

export class Department {

  //#region property name
  // tslint:disable-next-line:variable-name
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._name = value;
  }
  //#endregion

  //#region property code
  private _code: string;
  public get code(): string {
    return this._code;
  }
  public set code(value: string) {
    this._code = value;
  }
  //#endregion

  //#region property codeRegion
  // tslint:disable-next-line:variable-name
  private _codeRegion: string;
  public get codeRegion(): string {
    return this._codeRegion;
  }
  public set codeRegion(value: string) {
    this._codeRegion = value;
  }
  //#endregion

  constructor() { }
}
