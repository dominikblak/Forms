import { Component, OnInit } from '@angular/core';
import { DataBaseService, Course } from 'src/app/data-base.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  constructor(private dbService: DataBaseService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      param.get('id');
      this.course = this.dbService.getCourseById(param.get('id'));
    });
  }

}
