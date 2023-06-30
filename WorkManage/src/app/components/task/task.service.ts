import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  updateTask(taskUpdateDTO: any) {
    return this.http.get(`${this.baseUrl}/update`, taskUpdateDTO);
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseUrl}/deletetask/${taskId}`);
  }
 
  // searchTasks(searchQuery: string): Observable<TaskDTO[]> {
  //   let params = new HttpParams();
  //   params = params.set('taskName', searchQuery);
  
  //   return this.http.get<TaskDTO[]>(`${this.baseUrl}/search`, { params });
  // }
}