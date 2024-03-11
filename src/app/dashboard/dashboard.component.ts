import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  private _labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

  public weightData: ChartConfiguration<'line'>['data'] = {
    labels: this._labels,
    datasets: [
      {
        data: [ 90, 91, 92, 91, 90, 89, 90, 90, 91, 91, 91, 90, 89, 90, 90, 90, 91, 90, 91, 90, 90, 90, 90, 90, 91, 91, 91, 91, 89, 90, 90 ],
        fill: true,
        tension: 0.5,
        backgroundColor: '#acc4d8'
      }
    ],
  };

  public weightOptions: ChartOptions<'line'> = {
    responsive: true,
    aspectRatio: 3,
    interaction: {
      intersect: false
    },    
    scales: {
      y: {
        min: 82,
        max: 94,
      }
    }
  };

  public bloodPressureData: ChartConfiguration<'line'>['data'] = {
    labels: this._labels,
    datasets: [
      {
        label: 'Diastolic',
        data: [ 70, 71, 73, 71, 70, 71, 70, 70, 71, 73, 71, 73, 74, 74, 70, 70, 71, 73, 71, 73, 74, 74, 70, 71, 73, 71, 73, 73, 72, 74, 74 ],
        fill: true,
        tension: 0.5,
        backgroundColor: '#243a4c'
      },
      {
        label: 'Systolic',
        data: [ 135, 134, 122, 127, 128, 135, 134, 135, 134, 122, 134, 136, 135, 134, 135, 134, 135, 135, 134, 135, 134, 122, 122, 122, 135, 134, 122, 135, 134, 135, 134, 122 ],
        fill: true,
        tension: 0.5,
        backgroundColor: '#acc4d8'
      },
      
    ]
  };

  public bloodPressureOptions: ChartOptions<'line'> = {
    responsive: true,
    aspectRatio: 3,
    interaction: {
      intersect: false
    },
    scales: {
      y: {
        suggestedMin: 140,
        suggestedMax: 60,
      }
    }
  };


}
