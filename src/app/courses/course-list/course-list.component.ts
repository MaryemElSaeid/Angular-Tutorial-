import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course [];
  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
    this._coursesService.getCourses().subscribe((res:any) =>
    {
      this.courses = res . data;
    });
  }

}
