import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.component';
// import { TaskDTO } from './task.component';

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

  updateTask(taskUpdateDTO: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${taskUpdateDTO.taskId}`, taskUpdateDTO);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseUrl}/deletetask/${taskId}`);
  }
 

  searchTasks(taskName: string): Observable<Task[]> {
    let params = new HttpParams();
    params = params.set('taskName', taskName);
  
    return this.http.get<Task[]>(`${this.baseUrl}/search`, { params });
  }
  getImportantTasks() {
    return this.http.get(`${this.baseUrl}/getImportantTasks`);
  }
}