import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  @Input() title: string = 'Title';
  @Input() value: string = '$0';
  @Input() change: string = '+0%';
  @Input() icon: string = 'pi pi-chart-bar';
  @Input() isPositive: boolean = true;
}
