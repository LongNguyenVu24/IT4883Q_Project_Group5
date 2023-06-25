import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8003/api/task';

  constructor(private http: HttpClient) { }

  saveTask(taskSaveDTO: any) {
    return this.http.post(`${this.baseUrl}/save`, taskSaveDTO);
  }

  getAllTasks() {
    return this.http.get(`${this.baseUrl}/getAllTasks`);
  }

  updateTask(taskUpdateDTO: any) {
    return this.http.get(`${this.baseUrl}/update`, taskUpdateDTO);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseUrl}/deletetask/${taskId}`);
  }
}