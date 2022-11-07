import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const appRoutes: Routes =[
{path: '' , component: HomeComponent},
{path: 'home' , component: HomeComponent},
{path: 'blog' , component: BlogComponent},
{path: 'blog-details' , component: BlogDetailsComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
 exports:[RouterModule]
})
export class AppRoutingModule { }
