import {Component, OnInit} from '@angular/core';
import {DepartmentApi} from '../../models/department-api';
import {GeoApiService} from '../../services/geo-api.service';
import {catchError, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {RegionApi} from '../../models/region-api';

@Component({
  selector: 'app-department-api-show',
  templateUrl: './department-api-show.component.html',
  styleUrls: ['./department-api-show.component.scss']
})
export class DepartmentApiShowComponent implements OnInit {

  departmentApi: DepartmentApi;
  regionApi: RegionApi;

  constructor(
    private geoApiService: GeoApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getDepartmentByCode(params.code);
    });
  }

  private getRegionByCode(code: string): void {
    this.geoApiService.getRegionByCode(code).pipe(
      tap(_ => console.log('Error while fetching region by code')),
      catchError(this.geoApiService.handleError<RegionApi>('getRegionByCode'))
    ).subscribe((region: RegionApi) =>
      this.regionApi = region
    );
  }

  private getDepartmentByCode(code: string): void {
    this.geoApiService.getDepartmentByCode(code).pipe(
      tap(_ => console.log('Error while fetching department by code')),
      catchError(this.geoApiService.handleError<DepartmentApi>('getDepartmentByCode'))
    ).subscribe((department: DepartmentApi) => {
        this.departmentApi = department;
        this.getRegionByCode(department.codeRegion);
      }
    );
  }

}
