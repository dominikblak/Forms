import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  COURSES = [
    new Course('1', 'Kurs JavaFX', 'Wszystko co musisz wiedzieć o budowaniu aplikacji desktopowych...'),
    new Course('2', 'Kurs OrmLite', 'Obsługa baz danych z OrmLite jeszcze nigdy nie była tak prosta...'),
    new Course('3', 'Kurs Java 8', 'Od teraz Java 8 nie będzie stanowić dla Ciebie problemu.....'),
    new Course('4', 'Kurs Angular', 'Twórz niesamowite aplikacje webowe. Poznaj możliwoci nowej wersji Angulara....')
  ];

  getCourses(): Observable<Array<Course>> {
    return of(this.COURSES);
  }
  getCourseById(id: string): Course {
    return this.COURSES.find(e => e.id === id);
  }
  getRandomCourse() {
    const n = Math.floor(Math.random() * 4);
    return this.COURSES[n];
  }

}


export class Course {
  constructor(public id: string, public title: string, public content: string) {

  }
}
