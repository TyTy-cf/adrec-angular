import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegionApi} from '../models/region-api';
import {Observable, of} from 'rxjs';
import {DepartmentApi} from '../models/department-api';
import {sprintf} from 'sprintf-js';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  // Url vers l'API
  private urlRegion = 'https://geo.api.gouv.fr/regions';
  private urlRegionByCode = 'https://geo.api.gouv.fr/regions/%s';
  private urlDepartment = 'https://geo.api.gouv.fr/departements';
  private urlDepartmentsByRegion = 'https://geo.api.gouv.fr/regions/%s/departements';

  constructor(private http: HttpClient) { }

  getRegions(): Observable<RegionApi[]> {
    return this.http.get<RegionApi[]>(this.urlRegion);
  }

  getDepartments(): Observable<DepartmentApi[]> {
    return this.http.get<DepartmentApi[]>(this.urlDepartment);
  }

  getDepartmentsByRegion(code: string): Observable<DepartmentApi[]> {
    return this.http.get<DepartmentApi[]>(sprintf(this.urlDepartmentsByRegion, code));
  }

  getRegionByCode(code: string): Observable<RegionApi> {
    return this.http.get<RegionApi>(sprintf(this.urlRegionByCode, code));
  }

  /**
   * Display error
   * @privates
   */
  public handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
