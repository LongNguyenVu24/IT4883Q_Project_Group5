import { catchError } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {TaskService} from './task.service';
import { DialogModalContentComponent } from '../dialog-modal-content/dialog-modal-content.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ChangeDetectorRef } from '@angular/core';

  import {ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
export interface Task {
  id: string | number;
  taskID: number;
  taskName: string;
  taskDiscription: string;
  startDate: string;
  endDate: string;
  taskPriority: boolean;
  taskStatus: boolean;
  repeat: boolean;
  parent?: string | number;
  completed: boolean;
}

// Mapping function
// export function mapTaskData(data: any[]): Task[] {
//   return data.map((item: any) => {
//     return {
//       id: item.id,
//       taskID: item.taskId,
//       taskName: item.taskName,
//       taskDiscription: item.taskDiscription,
//       startDate: item.startDate,
//       endDate: item.endDate,
//       taskPriority: item.taskPriority,
//       taskStatus: item.taskStatus,
//       repeat: item.repeat
//       completed: item.completed || false
//     };
//   });
// }

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    FormsModule, 
    MatRadioModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatDialogModule
  ],
})

export class TaskComponent implements OnInit{
  // @ViewChild("outlet", { read: ViewContainerRef })
  // outletRef!: ViewContainerRef;
  // @ViewChild("content", { read: TemplateRef })
  // contentRef!: TemplateRef<any>;

  // ngAfterContentInit() {
  //   this.outletRef.createEmbeddedView(this.contentRef);
  // }
  checked = false;
  imchecked = false;
  moveToCompleted(task: any) {
    task.completed = !task.completed;
  }
  @Input() searchQuery: string = '';
  
  tasks: Task[] = [];

  filteredTasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
    // private templateRef:    TemplateRef<any>,
    // private viewContainer:  ViewContainerRef
  ) {}
  // @Input() set rerender(val: any) {
  //   this.viewContainer.clear();
  //   this.viewContainer.createEmbeddedView(this.templateRef);
  // }
  ngOnInit(): void {
    this.getAllTasks();
    // this.saveTask();
  }
//  ngOnChanges(changes: SimpleChanges): void {
//   this.saveTask();
//  }
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
  
//  async saveTask() {
//   console.log(1);
  
//   let response = this.dialogModalContentComponent.saveTask();
//   if (response) {
//     this.getAllTasks()
//   }
// }

filterTasks(): void {
  if (this.searchQuery) {
    this.filteredTasks = this.tasks.filter((task: Task) => {
      return task.taskName.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  } else {
    this.filteredTasks = this.tasks;
  }
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogModalContentComponent, {
    width: '520px'
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllTasks();
    }
  });
}

}
// searchTasks(taskName?: string, startDate?: string, endDate?: string): Observable<TaskDTO[]> {
//   let params = new HttpParams();
//   if (taskName) {
//     params = params.set('taskName', taskName);
//   }
//   if (startDate) {
//     params = params.set('startDate', startDate);
//   }
//   if (endDate) {
//     params = params.set('endDate', endDate);
//   }

//   return this.http.get<TaskDTO[]>(`${this.apiUrl}/search`, { params });
// }