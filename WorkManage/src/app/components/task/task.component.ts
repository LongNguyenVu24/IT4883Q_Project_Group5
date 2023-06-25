import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {TaskService} from './task.service';


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
  ],
})

export class TaskComponent {
  checked = false;
  imchecked = false;
  constructor(private http: HttpClient, private taskService: TaskService) { }
  
// Save task
saveTask(task: any): void {
  this.taskService.saveTask(task).subscribe(
    (response) => {
      console.log('Task saved:', response);
    },
    (error) => {
      console.error('Error saving task:', error);
    }
  );
}

// Get all tasks
getAllTasks(): void {
  this.taskService.getAllTasks().subscribe(
    (tasks) => {
      console.log('All tasks:', tasks);
    },
    (error) => {
      console.error('Error getting tasks:', error);
    }
  );
}

// Update task
updateTask(task: any): void {
  this.taskService.updateTask(task).subscribe(
    (response) => {
      console.log('Task updated:', response);
    },
    (error) => {
      console.error('Error updating task:', error);
    }
  );
}

// Delete task
deleteTask(taskId: number): void {
  this.taskService.deleteTask(taskId).subscribe(
    (response) => {
      console.log('Task deleted:', response);
    },
    (error) => {
      console.error('Error deleting task:', error);
    }
  );
}
}
