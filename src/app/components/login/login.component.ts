import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router);
  onSubmit(form: NgForm) {
    if (form.valid) {
      if(form.value.username === 'admin' && form.value.password === 'password') {
        form.resetForm(); 
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password. Please try again.');
      }  
    } else {
      alert('Form is missing required fields.');
    }
  }
  
}