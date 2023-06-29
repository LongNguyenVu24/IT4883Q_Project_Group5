import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingDialogComponent } from '../setting-dialog/setting-dialog.component';
import { TaskService } from '../task/task.service';
import {Task} from '../task/task.component';
import { TaskSearchService } from '../task/task-search.service';  
import { TaskDTO } from '../task/task.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  taskName: string = '';
  startDate: string = '';
  endDate: string = '';
  searchQuery: string = '';
  searchResults: TaskDTO[] = [];
  constructor(public dialog: MatDialog, private taskService: TaskService) { }


  // closeDialog() {
  //   this.dialog.close();
  // }

  searchTasks() {
    if (this.searchQuery) {
      this.taskService.searchTasks(this.searchQuery).subscribe(
        (results: TaskDTO[]) => {
          this.searchResults = results;
        },
        (error) => {
          console.error('Error searching tasks:', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingDialogComponent, {
       width: '1000px'
    });
}


}
