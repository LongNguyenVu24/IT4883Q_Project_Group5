import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  telephone: string = '';
  confirmPassword: string = '';
  constructor(private http: HttpClient) { } 
  submitForm() {
    const formValues = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      telephone: this.telephone
    };
  
    this.http.post('http://localhost:8003/api/v1/auth/register', formValues).subscribe(
      (response) => {
        // Handle the success response here
        console.log(response);
      },
      (error) => {
        // Handle the error response here
        console.error(error);
      }
    );
  }
}
