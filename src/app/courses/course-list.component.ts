import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Analise e desenvolvimento de sistemas",
        imageUrl: "url",
        price: 15,
        code: "XPG-9756",
        duration: 40,
        rating: 5.4,
        releaseDate: 'december, 15, 2008',
      },
      {
        id: 2,
        name: "Informatica para negocio",
        imageUrl: "url",
        price: 13,
        code: "XPG-9757",
        duration: 40,
        rating: 3,
        releaseDate: "june, 15, 2005",
      }
    ]
  }
}
