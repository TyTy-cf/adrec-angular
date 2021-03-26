import { Component, OnInit } from '@angular/core';
import {RegionApi} from '../../models/region-api';
import {GeoApiService} from '../../services/geo-api.service';
import {catchError, tap} from 'rxjs/operators';

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
    this.getRegions();
    this.geoApiService.getGames();
  }

  private getRegions(): void {
    this.regionsApi = new Array<RegionApi>();
    this.geoApiService.getRegions().pipe(
      tap(_ => console.log('Error while fetching regions')),
      catchError(this.geoApiService.handleError<RegionApi>('getRegionsFromApi'))
    )
      .subscribe((regions: RegionApi[]) =>
        this.regionsApi = regions
      )
    ;
  }
}
