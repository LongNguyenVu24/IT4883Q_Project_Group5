import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/internal/Observable";
import { Task } from "../task/task.component";

@Injectable({
    providedIn: 'root'
  })
  export class GanttService {
    private baseUrl = 'http://localhost:8003/api/gantt';
  
    constructor(private http: HttpClient) { }
  
    getGanttChartData(): Observable<Task[]> {
      return this.http.get<Task[]>(this.baseUrl);
    }
  }
  