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
  constructor(public dialog: MatDialog, private taskService: TaskService, private searchService: TaskSearchService) { }



  openDialog(): void {
    const dialogRef = this.dialog.open(SettingDialogComponent, {
       width: '1000px'
    });
}

onSearchQueryChange(): void {
  this.searchService.updateSearchQuery(this.searchQuery);
}
}


