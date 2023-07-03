import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Chart  } from 'chart.js';
import { Task, gantt } from 'dhtmlx-gantt';
import { from } from 'rxjs';
import { GanttService } from './process.service';
import { mapTaskData } from '../task/task.component';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-process',
  // templateUrl: './process.component.html', <div #gantt_here class='gantt-chart'></div>, <div id="ganttContainer"></div>
  template: `
  <div #gantt_here class='gantt-chart'></div>
  `,
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit  {
  constructor(private ganttService: GanttService) { }
 //new 
 @ViewChild('gantt_here', { static:true}) ganttContainer!: ElementRef;

 
 

 ngOnInit() { 
 
  this.fetchGanttData();
  // gantt.init(this.ganttContainer.nativeElement);
 }


 fetchGanttData(): void {
  this.ganttService.getGanttChartData().subscribe((data: Task[]) => {
    // const tasks: Task[] = mapTaskData(data);
    
    gantt.config.xml_date = '%Y-%m-%d';
    gantt.init(this.ganttContainer.nativeElement);
    gantt.parse({ data: data });
  });
}











  // old
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
