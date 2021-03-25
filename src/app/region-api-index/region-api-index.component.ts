import { Component, OnInit } from '@angular/core';
import {RegionApi} from '../../models/region-api';
import {GeoApiService} from '../../services/geo-api.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-region-api-index',
  templateUrl: './region-api-index.component.html',
  styleUrls: ['./region-api-index.component.scss']
})
export class RegionApiIndexComponent implements OnInit {

  regionsApi: RegionApi[];

  constructor(
    private geoApiService: GeoApiService
  ) { }

  ngOnInit(): void {
    this.getRegionsFromApi();
  }

  private getRegionsFromApi(): void {
    this.regionsApi = new Array<RegionApi>();
    this.geoApiService.getRegionsFromApi().pipe(
      tap(_ => console.log('Error while fetching regions')),
      catchError(this.handleError<RegionApi>('getRegionsFromApi'))
    )
      .subscribe((regions: RegionApi[]) =>
        this.regionsApi = regions
      )
    ;
  }

  /**
   * Display error
   * @privates
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
