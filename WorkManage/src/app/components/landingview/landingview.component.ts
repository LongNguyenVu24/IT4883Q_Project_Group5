import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalContentComponent } from '../dialog-modal-content/dialog-modal-content.component';

@Component({
  selector: 'app-landingview',
  templateUrl: './landingview.component.html',
  styleUrls: ['./landingview.component.css']
})
export class LandingviewComponent {
  constructor(
    public dialog: MatDialog
  ) { }
}
