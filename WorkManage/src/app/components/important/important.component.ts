import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.component';
import { TaskService } from '../task/task.service';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css'], standalone: true,
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
export class ImportantComponent implements OnInit {
  importantTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getImportantTasks();
  }

  getImportantTasks(): void {
    this.taskService.getImportantTasks().subscribe(
      (response: any) => {
        this.importantTasks = response;
      },
      (error) => {
        console.error('Error fetching important tasks:', error);
      }
    );
  }
}