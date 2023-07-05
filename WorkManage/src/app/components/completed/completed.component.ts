import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Task } from '../task/task.component';
import { TaskService } from '../task/task.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks(): void {
    this.taskService.getCompletedTasks().subscribe(
      (response: any) => {
        this.completedTasks = response;
      },
      (error) => {
        console.error('Error fetching completed tasks:', error);
      }
    );
  }
}