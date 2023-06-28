import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpParams } from '@angular/common/http';
import {TaskService} from './task.service';
import { DialogModalContentComponent } from '../dialog-modal-content/dialog-modal-content.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
export interface Task {
  taskName: string;
  taskDiscription: string;
  startDate: string;
  endDate: string;
  taskPriority: boolean;
  taskStatus: boolean;
  repeat: boolean;
}
export interface TaskDTO {
  taskId: number;
  taskName: string;
  taskDescription: string;
  startDate: string;
  endDate: string;
  taskStatus: boolean;
  taskPriority: boolean;
  repeat: boolean;
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
    MatListModule
  ],
})

export class TaskComponent implements OnInit{
  checked = false;
  imchecked = false;
  
  @Input() tasks!: TaskDTO[];
  @Input() searchResults: TaskDTO[] = [];
  private apiUrl = 'http://localhost:8003/api/task/search'
  filteredTasks: Task[] = [];
  constructor(
    private taskService: TaskService,
    private dialogModalContentComponent: DialogModalContentComponent,
    private http: HttpClient
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
saveTask(task: any): void {
  this.dialogModalContentComponent.saveTask();
}

searchTasks(taskName?: string, startDate?: string, endDate?: string): Observable<TaskDTO[]> {
  let params = new HttpParams();
  if (taskName) {
    params = params.set('taskName', taskName);
  }
  if (startDate) {
    params = params.set('startDate', startDate);
  }
  if (endDate) {
    params = params.set('endDate', endDate);
  }

  return this.http.get<TaskDTO[]>(`${this.apiUrl}/search`, { params });
}
}

