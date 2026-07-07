import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  router = inject(Router);
  studentService = inject(StudentService);

  fileName = '';
  tableHeaders: string[] = [];
  tableData: any[] = [];

  onFileChange(event: any): void {

    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {

      const file = target.files[0];
      this.fileName = file.name;

      const reader = new FileReader();

      reader.onload = (e: any) => {

        const binaryData = e.target.result;
        const workbook = XLSX.read(binaryData, { type: 'binary' });

        const firstSheet = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheet];

        this.tableData = XLSX.utils.sheet_to_json(worksheet);

        if (this.tableData.length > 0) {
          this.tableHeaders = Object.keys(this.tableData[0]);
        } else {
          this.tableHeaders = [];
        }

      };

      reader.readAsBinaryString(file);

    }

  }

  onGenerate(row: any): void {

    this.studentService.setStudent({
      name: row['Name'],
      course: row['Course'],
      duration: row['Duration'],
      issueDate: new Date().toLocaleDateString('en-GB'),
      certificateId: 'TVK-' + Date.now()
    });

    this.router.navigate(['/certificate']);

  }

}