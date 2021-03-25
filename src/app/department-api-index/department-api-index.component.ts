import { Component, OnInit } from '@angular/core';
import {GeoApiService} from '../../services/geo-api.service';
import {DepartmentApi} from '../../models/department-api';
import {RegionApi} from '../../models/region-api';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'app-department-api-index',
  templateUrl: './department-api-index.component.html',
  styleUrls: ['./department-api-index.component.scss']
})
export class DepartmentApiIndexComponent implements OnInit {

  departmentApis: DepartmentApi[];

  constructor(
    private geoApiService: GeoApiService
  ) { }

  ngOnInit(): void {
    this.getDepartmentsFromApi();
  }

  private getDepartmentsFromApi(): void {
    this.departmentApis = new Array<DepartmentApi>();
    this.geoApiService.getDepartments().pipe(
      tap(_ => console.log('Error while fetching departments')),
      catchError(this.geoApiService.handleError<DepartmentApi>('getDepartmentsFromApi'))
    )
      .subscribe((departments: DepartmentApi[]) =>
        this.departmentApis = departments
      )
    ;
  }

}
