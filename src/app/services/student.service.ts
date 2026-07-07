import { Injectable, signal } from '@angular/core';

export interface Student {
  name: string;
  course: string;
  duration: string;
  issueDate: string;
  certificateId: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student = signal<Student | null>(null);

  setStudent(student: Student) {
    this.student.set(student);
  }

  clearStudent() {
    this.student.set(null);
  }

}