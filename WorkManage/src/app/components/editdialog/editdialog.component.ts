import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Task } from '../task/task.component';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent {
  updatedTask: Task;
 
  constructor(
    public dialogRef: MatDialogRef<EditdialogComponent>,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    // Create a deep copy of the task object to avoid modifying the original task
    this.updatedTask = { ...data };
  }

  saveChanges(): void {
    this.taskService.deleteTask(this.data.taskID).subscribe(
      () => {
        console.log('Task deleted successfully!');
        this.taskService.saveTask(this.updatedTask).subscribe(
          () => {
            console.log('Task saved successfully!');
            this.dialogRef.close(this.updatedTask);
          },
          (error) => {
            console.error('Error saving task:', error);
          }
        );
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
  }

  closeDialog(): void {
    // Close the dialog without saving changes
    this.dialogRef.close();
  }
}
