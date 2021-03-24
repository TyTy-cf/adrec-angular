
export class Region {

  //#region property name
  private _name: string;
  public get nom(): string {
    return this._name;
  }
  public set nom(value: string) {
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

  constructor() { }
}
