import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
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
interface Task {
  taskName: string;
  taskDiscription: string;
  startDate: string;
  endDate: string;
  taskPriority: boolean;
  taskStatus: boolean;
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
  

  
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dialogModalContentComponent: DialogModalContentComponent
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


}