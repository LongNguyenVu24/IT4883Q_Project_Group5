import { catchError } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { DialogModalContentComponent } from '../dialog-modal-content/dialog-modal-content.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ChangeDetectorRef } from '@angular/core';

import { ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

export interface Task {
  taskID: number;
  taskName: string;
  taskDiscription: string;
  startDate: string;
  endDate: string;
  taskPriority: boolean;
  taskStatus: boolean;
  repeat: boolean;
  parent: number;
}

export interface Gantz  {
  id: number;
  text: string;
  start_date: Date;
  end_date: Date;
  duration: number;
  progress: number;
  parent: number;
}

export function mapTaskData(data: Task[]): Gantz[] {
  return data.map((item: Task) => {
    return {
      id: item.taskID,
      text: item.taskName,
      start_date: new Date(item.startDate),
      end_date: new Date(item.endDate),
      duration: calculateDuration(item.startDate, item.endDate),
      progress: calculateProgress(item.taskStatus),
      parent: item.parent
    };
  });
}

function calculateDuration(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
  return diffInDays + 1; 
}

function calculateProgress(taskStatus: boolean): number {
  return taskStatus ? 1 : 0;
}


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

  ) {}

  ngOnInit(): void {
    this.getAllTasks();
   
  }

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
  


filterTasks(): void {
  if (this.searchQuery) {
    this.filteredTasks = this.tasks.filter((task: Task) => {
      return task.taskName.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  } else {
    this.filteredTasks = this.tasks;
  }
}

clearSearch(): void {
  this.searchQuery = '';
  this.filterTasks();
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

// editTask(task: Task) {
//   const dialogRef = this.dialog.open(DialogModalContentComponent, {
//     data: task
//   });

//   dialogRef.afterClosed().subscribe(updatedTask => {
//     if (updatedTask) {
//       const taskUpdateDTO = {
//         taskId: updatedTask.taskID,
//         taskName: updatedTask.taskName,
//         taskDiscription: updatedTask.taskDiscription,
//         startDate: updatedTask.startDate,
//         endDate: updatedTask.endDate,
//         taskPriority: updatedTask.taskPriority,
//         taskStatus: updatedTask.taskStatus,
//         repeat: updatedTask.repeat,
//         parent: updatedTask.parent
//       };

//       this.taskService.updateTask(taskUpdateDTO).subscribe(
//         (taskId: string) => {
//           console.log('Task updated successfully!');
//           // Handle the updated task ID if needed
//         },
//         (error) => {
//           console.error('Error updating task:', error);
//           // Handle error, e.g., show an error message
//         }
//       );
//     }
//   });
// }



// deleteTask(taskId: number) {
//   const confirmed = confirm('Are you sure you want to delete this task?');
//   if (confirmed) {
//     this.taskService.deleteTask(taskId).subscribe(
//       () => {
//         console.log('Task deleted successfully!');
//       },
//       (error) => {
//         console.error('Error deleting task:', error);
//         // Handle error, e.g., show an error message
//       }
//     );
//   }
// }

}
