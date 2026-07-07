import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {

  studentService = inject(StudentService);
  router = inject(Router);

  student = this.studentService.student;

  constructor() {

    if (this.student() === null) {
      this.router.navigate(['/']);
    }

  }

printCertificate(): void {
  window.print();
}

}