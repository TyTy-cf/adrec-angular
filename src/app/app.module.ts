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
import { RegionApiIndexComponent } from './region-api-index/region-api-index.component';
import { DepartmentApiIndexComponent } from './department-api-index/department-api-index.component';
import { RegionApiShowComponent } from './region-api-show/region-api-show.component';
import { DepartmentApiShowComponent } from './department-api-show/department-api-show.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    RegionApiIndexComponent,
    DepartmentApiIndexComponent,
    RegionApiShowComponent,
    DepartmentApiShowComponent,
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
    // HttpClientModule est ce qui vous permet de r??cup??rer du contenu depuis une API (ou autre)
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {provide: AbstractDepartment, useClass: DepartmentService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
