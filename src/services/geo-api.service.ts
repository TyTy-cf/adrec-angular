import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegionApi} from '../models/region-api';
import {Observable, of} from 'rxjs';
import {DepartmentApi} from '../models/department-api';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  // Url vers l'API
  private urlRegion = 'https://geo.api.gouv.fr/regions';
  private urlDepartment = 'https://geo.api.gouv.fr/departements';

  constructor(private http: HttpClient) { }

  getRegionsFromApi(): Observable<RegionApi[]> {
    return this.http.get<RegionApi[]>(this.urlRegion);
  }

  getDepartmentsFromApi(): Observable<DepartmentApi[]> {
    return this.http.get<DepartmentApi[]>(this.urlDepartment);
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
