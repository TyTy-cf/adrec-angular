import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {AbstractDepartment} from '../services/abstract-department';
import {DepartmentService} from '../services/department.service';
import { CounterComponent } from './counter/counter.component';
import { RegionIndexMaterialsComponent } from './region-index-materials/region-index-materials.component';
import { RegionIndexComponent } from './region-index/region-index.component';
import { DepartmentIndexComponent } from './department-index/department-index.component';
import { DepartmentShowComponent } from './department-show/department-show.component';
import { RegionShowComponent } from './region-show/region-show.component';
import { RegionFormComponent } from './region-form/region-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DepartmentFormComponent } from './department-form/department-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RegionIndexMaterialsComponent,
    RegionIndexComponent,
    DepartmentIndexComponent,
    DepartmentShowComponent,
    RegionShowComponent,
    RegionFormComponent,
    DepartmentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: AbstractDepartment, useClass: DepartmentService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
