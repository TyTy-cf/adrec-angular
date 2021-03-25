import { Component, OnInit } from '@angular/core';
import {DepartmentApi} from '../../models/department-api';
import {catchError, tap} from 'rxjs/operators';
import {sprintf} from 'sprintf-js';
import {GeoApiService} from '../../services/geo-api.service';
import {ActivatedRoute} from '@angular/router';
import {RegionApi} from '../../models/region-api';

@Component({
  selector: 'app-region-api-show',
  templateUrl: './region-api-show.component.html',
  styleUrls: ['./region-api-show.component.scss']
})
export class RegionApiShowComponent implements OnInit {

  regionApi: RegionApi;
  departmentsApi: DepartmentApi[];

  constructor(
    private geoApiService: GeoApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getRegionByCode(params.code);
      if (this.regionApi) {
        this.getDepartmentsByRegion(params.code);
      }
    });
  }

  private getRegionByCode(code: string): void {
    this.geoApiService.getRegionByCode(code).pipe(
      tap(_ => console.log('Error while fetching region by code')),
      catchError(this.geoApiService.handleError<RegionApi>('getRegionByCode'))
    )
      .subscribe((region: RegionApi) =>
        this.regionApi = region
      )
    ;
  }

  public getDepartmentsByRegion(code: string): void {
    this.geoApiService.getDepartmentsByRegion(code).pipe(
      tap(_ => console.log('Error while fetching departments for code region ' + code)),
      catchError(this.geoApiService.handleError<DepartmentApi>('getDepartmentsByRegion'))
    ).subscribe((datasApi: DepartmentApi[]) =>
      this.departmentsApi = datasApi
    )
    ;
  }

}
