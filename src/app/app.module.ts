import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeService} from './employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
