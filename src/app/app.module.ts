import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    BlogComponent,
    BlogDetailsComponent,
    HomeComponent,
    ServiceComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
