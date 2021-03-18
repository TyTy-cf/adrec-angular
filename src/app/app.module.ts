import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {AbstractDepartment} from '../services/abstract-department';
import {DepartmentService} from '../services/department.service';
import { ComptorComponent } from './comptor/comptor.component';

@NgModule({
  declarations: [
    AppComponent,
    ComptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    {provide: AbstractDepartment, useClass: DepartmentService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
