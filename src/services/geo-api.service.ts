import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegionApi} from '../models/region-api';
import {Observable} from 'rxjs';

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
}
