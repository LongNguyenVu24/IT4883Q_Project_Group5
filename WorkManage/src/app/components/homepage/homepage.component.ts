import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingDialogComponent } from '../setting-dialog/setting-dialog.component';
import { TaskService } from '../task/task.service';
import {Task} from '../task/task.component';
import { TaskSearchService } from '../task/task-search.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  tasks: Task[] = [];
  searchQuery: string = '';
  activeTab = 'general';
  searchResults: any[] = [];
  constructor(public dialog: MatDialog, private taskService: TaskService, private taskSearchService: TaskSearchService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }
  // closeDialog() {
  //   this.dialog.close();
  // }

  getAllTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (response: any) => {
        this.tasks = response;
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SettingDialogComponent, {
       width: '1000px'
    });
}

searchTasks(): void {
  this.taskSearchService.setSearchQuery(this.searchQuery);
}
}
