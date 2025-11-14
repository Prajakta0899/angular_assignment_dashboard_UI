import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var ApexCharts: any;

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export class ApexChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @Input() type: 'bar' | 'line' | 'donut' = 'bar';
  @Input() chartId: string = 'apex-chart';
  @Input() options: any;

  public chartOptions: any = {};
  private chart: any;

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  ngAfterViewInit(): void {
    if (this.chartContainer) {
      setTimeout(() => {
        this.renderChart();
      }, 100);
    }
  }

  private initializeChartOptions(): void {
    if (this.options) {
      this.chartOptions = this.options;
      return;
    }

    if (this.type === 'bar') {
      this.chartOptions = {
        series: [
          {
            name: 'Income',
            data: [30, 40, 35, 50, 49, 60, 70, 60]
          },
          {
            name: 'Outcome',
            data: [20, 30, 25, 40, 39, 50, 60, 45]
          }
        ],
        chart: {
          type: 'bar',
          height: 350,
          toolbar: { show: false }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '40%'
          }
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
        yaxis: { title: { text: '' } },
        fill: { opacity: 1 },
        legend: { show: true, position: 'top' },
        colors: ['#7C3AED', '#E6E1FF']
      };
    } else if (this.type === 'donut') {
      this.chartOptions = {
        series: [44, 55, 41, 17],
        chart: { type: 'donut', height: 320 },
        labels: ['Service 1', 'Service 2', 'Service 3', 'Service 4'],
        colors: ['#6A4CF3','#BBA8FF','#CFC5FF','#E6E1FF'],
        legend: { position: 'bottom' }
      };
    } else if (this.type === 'line') {
      this.chartOptions = {
        series: [
          { name: 'Income', data: [10, 41, 35, 51, 49, 62, 69, 91] }
        ],
        chart: { type: 'line', height: 300, zoom: { enabled: false }, toolbar: { show: false } },
        stroke: { curve: 'smooth' },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
        colors: ['#7C3AED']
      };
    }
  }

  private renderChart(): void {
    if (this.chartContainer && typeof ApexCharts !== 'undefined') {
      const chartElement = this.chartContainer.nativeElement;
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new ApexCharts(chartElement, this.chartOptions);
      this.chart.render();
    }
  }
}
