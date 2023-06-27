import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-modal-content',
  templateUrl: './dialog-modal-content.component.html',
  styleUrls: ['./dialog-modal-content.component.css'],
})

export class DialogModalContentComponent {
  taskName: string = ''; // Assign a default value or initialize in the constructor
  taskDiscription: string = '';
  startDate: string = '';
  endDate: string = '';
  taskPriority: boolean = false;
  taskStatus: boolean = false;
  repeat: boolean = false;

  constructor(private http: HttpClient) {}

  saveTask(): void {
    const taskSaveDTO = {
      taskName: this.taskName,
      taskDiscription: this.taskDiscription,
      startDate: this.startDate,
      endDate: this.endDate,
      taskPriority: this.taskPriority,
      taskStatus: this.taskStatus,
      repeat: this.repeat,
    };

   



    this.http
      .post<any>('http://localhost:8003/api/task/save', taskSaveDTO, {
        responseType: 'json',
      })
      .subscribe(
        (response) => {
          // Handle successful response
          
          console.log('Task saved successfully:', response);
          
          alert('Task saved successfully!');
        },
        (error) => {
          // Handle error
          console.error('Error saving task:', error);
          const errorMessage = error.message || 'Unknown error occurred.';
          alert(
            'Error saving task. Please try again.\n\nError Details: ' +
              error.message
          );
        }
      );
  }


}
