
export class RegionApi {

  //#region property name
  // tslint:disable-next-line:variable-name
  private _nom: string;
  public get nom(): string {
    return this._nom;
  }
  public set nom(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._nom = value;
  }
  //#endregion

  //#region property code
  // tslint:disable-next-line:variable-name
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
