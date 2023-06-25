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
  fullname: string = '';
  constructor(private http: HttpClient) { } 
  // submitForm() {
  //   const formValues = {
  //     username: this.username,
  //     email: this.email,
  //     password: this.password,
  //     confirmPassword: this.confirmPassword,
  //     telephone: this.telephone
  //   };
  
  //   this.http.post('http://localhost:8003/api/v1/auth/register', formValues).subscribe(
  //     (response) => {
  //       // Handle the success response here
  //       console.log(response);
  //     },
  //     (error) => {
  //       // Handle the error response here
  //       console.error(error);
  //     }
  //   );
  // }

  public register() {
    
    const registerData = {
      username: 'dat@gmail.com',
      password: '12345678',
      fullname:'lethanhdat'
    };

    try {
      const response =  this.http.post('http://localhost:8003/api/v1/auth/register', registerData,{
        // headers:new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token'))
      }).toPromise();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
}
}