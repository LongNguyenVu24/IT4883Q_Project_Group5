import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  hide = true;
  username: string = '';
  email: string = '';
  password: string = '';
  telephone: string = '';
  confirmPassword: string = '';
  fullname: string = '';
  token:String='';
  exist:String='';
  noticeIfUserExist:String='';
  constructor(private http: HttpClient) { } 

  public async register() {
    
    const registerData = {
      email: this.email,
      password: this.password,
      fullName:this.fullname  
    };

    try {
      const response =await  this.http.post('http://localhost:8003/api/v1/auth/register', registerData,{responseType:"text"
        // headers:new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token'))
      });
      
   await response.forEach(value=>{
     var x = JSON.parse(value);
     this.token=x['token'];
     this.exist=x['exist'];
     this.noticeIfUserExist=x['noticeIfUserExist'];

      });
      console.log(this.token);  
      console.log(this.noticeIfUserExist);
      alert(this.noticeIfUserExist)

    } catch (error) {
      console.log(error);
    }
}
}