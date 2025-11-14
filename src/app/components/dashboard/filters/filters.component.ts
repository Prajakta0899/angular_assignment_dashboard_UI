import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() apply = new EventEmitter<void>();

  public fromDate: Date | null = new Date(2024, 4, 27); // May 27, 2024
  public toDate: Date | null = new Date(2024, 4, 27);
  public selectedCategory: any = { label: 'Select Category', value: null };
  public selectedService: any = { label: 'Select Service', value: null };

  public categoryOptions = [
    { label: 'All Categories', value: null },
    { label: 'Category 1', value: 'cat1' },
    { label: 'Category 2', value: 'cat2' }
  ];

  public serviceOptions = [
    { label: 'All Services', value: null },
    { label: 'Service 1', value: 's1' },
    { label: 'Service 2', value: 's2' }
  ];

  onApply() {
    this.apply.emit();
  }
}
