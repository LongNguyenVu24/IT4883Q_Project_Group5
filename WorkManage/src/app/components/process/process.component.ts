import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Chart  } from 'chart.js';
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
 
  // tasks: any[] = [];
  // startDate: string = '';
  // endDate: string = '';
  // chart: Chart | undefined ;

  // constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.http.get<any>('http://localhost:8003/api/gantt').subscribe(data => {
  //     this.tasks = data.tasks;
  //     this.startDate = data.startDate;
  //     this.endDate = data.endDate;

  //     this.createGanttChart();
  //   });
  // }

  // createGanttChart() {
  //   const canvasElement = document.getElementById('ganttChartCanvas') as HTMLCanvasElement;
  //   const ctx = canvasElement.getContext('2d');
  //   if (!canvasElement || !ctx) {
  //     console.error('Canvas element or rendering context is null.');
  //     return;
  //   }
  //   const chartData = this.tasks.map(task => ({
  //     label: task.name,
  //     backgroundColor: 'rgba(0, 123, 255, 0.3)',
  //     borderColor: 'rgba(0, 123, 255, 0.8)',
  //     data: [{
  //       x: task.startDate,
  //       y: task.name,
  //       x2: task.endDate
  //     }]
  //   }));
  //   const chartOptions = {
  //     scales: {
  //       x: {
  //         type: 'time',
  //         time: {
  //           unit: 'day',
  //           min: this.startDate,
  //           max: this.endDate
  //         },
  //         ticks: {
  //           source: 'auto'
  //         }
  //       },
  //       y: {
  //         ticks: {
  //           reverse: true
  //         }
  //       }
  //     }
  //   };
  //   this.chart = new Chart(ctx, {
  //     type: 'horizontalBar',
  //     data: {
  //       datasets: chartData
  //     },
  //     options: chartOptions
  //   });
  // }

  
}
