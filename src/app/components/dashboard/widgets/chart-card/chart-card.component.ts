import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class ChartCardComponent implements OnInit {
  @Input() title: string = 'Chart';
  @Input() chartData: any[] = [];
  @Input() legend: any[] = [];

  ngOnInit(): void {
    // Chart data is passed from parent
  }
}
