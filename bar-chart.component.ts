import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.createChart();
  }


  nameArray:any=[];
  percentageArray:any=[];
  students:any;

  public chart: any;
  name:any;

  createChart(){
    this.service.getStudentList().subscribe((data:any) => {
       this.students = data;
       
      //  console.log(this.students)   
       for(let i=0;i<this.students.length;i++){
        this.nameArray.push(this.students[i].name);
        this.percentageArray.push(this.students[i].percentage)
       }

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
          labels: this.nameArray, 
	       datasets: [
          {
            label: "Result March-2023",
            data: this.percentageArray,
            backgroundColor: 'Yellow'
          },
        ]
      },
      options: {
        aspectRatio:1
      }
      
    });


    }
    );


  
  }

  

}
