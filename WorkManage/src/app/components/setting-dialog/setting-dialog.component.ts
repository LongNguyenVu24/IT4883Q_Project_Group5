import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.css']
})
export class SettingDialogComponent {
  private baseUrl = 'http://localhost:8003/api';
 

  activeTab = 'Account';
  email: string = '';
  newPassword: string = '';
  newFullName: string = ''; 
  link:string='';
  constructor(public dialogRef: MatDialogRef<SettingDialogComponent>,private http: HttpClient) { }
  async changePassword() {
    console.log(1)
    let res =await this.changeInformation().toPromise().then(() => {
       this.closeDialog();


    }).catch((e:any) => {
      this.closeDialog();

      console.log(e)
    });
    this.closeDialog();
   
    }
  changeInformation() {
    const newInformation = {
      email:this.email,
      newPassword: this.newPassword,
      newFullname: this.newFullName
    };
    console.log(123)
    return this.http.post('http://localhost:8003/api/v1/auth/updatePassword',newInformation);
  }
  closeDialog() {
    this.dialogRef.close();
  }
  export(){
    return  this.http.get('http://localhost:8003/api/task/export');
  }
   async exportData() {
    // Code to export data
let res =  await this.export().subscribe(
    (response) => {
      console.log(response)
      this.link =response.toString()
    },
    (error) => {

      console.log(this.link);
      console.error('Error fetching tasks:', error);
    }
  )
console.log(res)
  this.dialogRef.close();
  }
  
  importData() {
    // Code to import data
  }
}
