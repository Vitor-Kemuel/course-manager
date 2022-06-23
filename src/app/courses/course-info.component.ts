import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: "./course-info.component.html",
})
export class CourseInfoComponent implements OnInit {

  // courseId: number = 0;
  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.course = this.courseService.retrivById(+this.activatedRoute.snapshot.paramMap.get('id')!)
  }
  save(): void{
    
  }
}
