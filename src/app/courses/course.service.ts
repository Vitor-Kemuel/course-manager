import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
  providedIn: "root"
})
export class CourseService {

  private coursesUrl: string = 'http://localhost:3100/api/courses'

  constructor(private httpCliente: HttpClient) { }

  retrieveAll(): Observable<Course[]> {
    return this.httpCliente.get<Course[]>(this.coursesUrl);
  }

  retrivById(id: number): Observable<Course> {
    return this.httpCliente.get<Course>(this.coursesUrl + '/' + id);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpCliente.put<Course>(this.coursesUrl + '/' + course.id, course);
    } else {
      return this.httpCliente.post<Course>(this.coursesUrl, course);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpCliente.delete<any>(this.coursesUrl + "/" + id);
  }
}
