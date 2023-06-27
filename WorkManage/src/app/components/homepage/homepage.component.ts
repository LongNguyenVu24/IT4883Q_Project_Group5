import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingDialogComponent } from '../setting-dialog/setting-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  activeTab = 'general';

  constructor(public dialog: MatDialog) { }

  // closeDialog() {
  //   this.dialog.close();
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(SettingDialogComponent, {
       width: '1000px'
    });
}
}
