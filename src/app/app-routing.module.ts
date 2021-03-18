import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './counter/counter.component';
import {DepartmentIndexComponent} from './department-index/department-index.component';
import {RegionIndexComponent} from './region-index/region-index.component';
import {RegionIndexMaterialsComponent} from './region-index-materials/region-index-materials.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'region/index', component: RegionIndexComponent },
  { path: 'department/index', component: DepartmentIndexComponent },
  { path: 'region/index/materials', component: RegionIndexMaterialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  routes: Routes;

  constructor() {
    this.routes = routes;
  }
}
