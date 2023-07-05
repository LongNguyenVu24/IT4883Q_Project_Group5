import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingDialogComponent } from '../setting-dialog/setting-dialog.component';
import { TaskService } from '../task/task.service';
import {Task} from '../task/task.component';
import { TaskSearchService } from '../task/task-search.service';  
import { TaskComponent } from '../task/task.component';
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
  // searchResults: TaskDTO[] = [];
  @ViewChild(TaskComponent, { static: false }) taskComponent!: TaskComponent;
  constructor(public dialog: MatDialog, private taskService: TaskService) { }



  openDialog(): void {
    const dialogRef = this.dialog.open(SettingDialogComponent, {
       width: '1000px'
    });
}

searchTasks(): void {
  // Call the search API endpoint in your TaskService
  this.taskService.searchTasks(this.searchQuery).subscribe(
    (response: Task[]) => {
      // Pass the search results to the TaskComponent
      this.taskComponent.filteredTasks = response;
    },
    (error) => {
      console.error('Error searching tasks:', error);
    }
  );
}
}


