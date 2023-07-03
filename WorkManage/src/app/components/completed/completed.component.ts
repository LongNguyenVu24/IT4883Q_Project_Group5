import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  completedTasks: any[] = [];
}
