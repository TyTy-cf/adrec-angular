import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {DepartmentIndexComponent} from './department-index/department-index.component';
import {RegionIndexComponent} from './region-index/region-index.component';
import {RegionIndexMaterialsComponent} from './region-index-materials/region-index-materials.component';
import {DepartmentShowComponent} from './department-show/department-show.component';
import {RegionShowComponent} from './region-show/region-show.component';
import {RegionApiIndexComponent} from './region-api-index/region-api-index.component';
import {DepartmentApiIndexComponent} from './department-api-index/department-api-index.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'region/index', component: RegionIndexComponent },
  { path: 'region/show/:guid', component: RegionShowComponent },
  { path: 'department/index', component: DepartmentIndexComponent },
  { path: 'department/show/:guid', component: DepartmentShowComponent },
  { path: 'region/index/materials', component: RegionIndexMaterialsComponent },
  { path: 'api/region/index', component: RegionApiIndexComponent },
  { path: 'api/department/index', component: DepartmentApiIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
