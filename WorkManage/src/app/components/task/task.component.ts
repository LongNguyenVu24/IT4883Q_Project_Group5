import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {TaskService} from './task.service';
import { DialogModalContentComponent } from '../dialog-modal-content/dialog-modal-content.component';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
export interface Task {
=======
import { MatListModule } from '@angular/material/list';
interface Task {
>>>>>>> dee70a9f8a2335182849b4e9fe14a7d34086064f
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
  
  @Input() searchQuery: string = '';
  
  tasks: Task[] = [];

  filteredTasks: Task[] = [];
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

filterTasks(): void {
  if (this.searchQuery) {
    this.filteredTasks = this.tasks.filter((task: Task) => {
      return task.taskName.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  } else {
    this.filteredTasks = this.tasks;
  }
}

}