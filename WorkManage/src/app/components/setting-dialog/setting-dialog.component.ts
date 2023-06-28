import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.css']
})
export class SettingDialogComponent {
  activeTab = 'Account';

  constructor(public dialogRef: MatDialogRef<SettingDialogComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
