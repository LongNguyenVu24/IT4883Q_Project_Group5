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
}
