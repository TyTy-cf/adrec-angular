import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {DepartmentIndexComponent} from './department-index/department-index.component';
import {RegionIndexComponent} from './region-index/region-index.component';
import {RegionIndexMaterialsComponent} from './region-index-materials/region-index-materials.component';
import {DepartmentShowComponent} from './department-show/department-show.component';
import {RegionShowComponent} from './region-show/region-show.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'region/index', component: RegionIndexComponent },
  { path: 'region/show/:code', component: RegionShowComponent },
  { path: 'department/index', component: DepartmentIndexComponent },
  { path: 'department/show/:code', component: DepartmentShowComponent },
  { path: 'region/index/materials', component: RegionIndexMaterialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
