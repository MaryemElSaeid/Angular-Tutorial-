import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseReactiveFormComponent } from './course-reactive-form/course-reactive-form.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseItemComponent,
    CourseReactiveFormComponent,


  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ],
})
export class CoursesModule { }
