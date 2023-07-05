import { Component, EventEmitter, Output, ChangeDetectorRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task/task.service';
import { Task } from '../task/task.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

// import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-dialog-modal-content',
  templateUrl: './dialog-modal-content.component.html',
  styleUrls: ['./dialog-modal-content.component.css'],
  standalone: true,
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, MatButtonModule],

})

export class DialogModalContentComponent{
  taskName: string = ''; // Assign a default value or initialize in the constructor
  taskDiscription: string = '';
  startDate: string = '';
  endDate: string = '';
  taskPriority: boolean = false;
  taskStatus: boolean = false;
  repeat: boolean = false;
  parent: string = '';
  @Output() taskAdded = new EventEmitter();
  constructor(private http: HttpClient,private cdr:ChangeDetectorRef,private taskService: TaskService, private dialogRef: MatDialogRef<DialogModalContentComponent>) {}

  async saveTask() {
    const taskSaveDTO = {
      taskName: this.taskName,
      taskDiscription: this.taskDiscription,
      startDate: this.startDate,
      endDate: this.endDate,
      taskPriority: this.taskPriority,
      taskStatus: this.taskStatus,
      repeat: this.repeat,
      parent: this.parent
    };
// console.log(taskSaveDTO);
    let resust = await this.taskService.saveTask(taskSaveDTO).toPromise();
    if (resust) {
      this.dialogRef.close(true);
    }
  }

 


}
