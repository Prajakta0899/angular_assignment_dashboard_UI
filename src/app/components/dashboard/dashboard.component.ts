import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: string;
  isPositive: boolean;
}

interface FilterOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidebar', { static: false }) sidebar!: SidebarComponent;

  onToggleSidebar(): void {
    // Access sidebar via template reference if needed, or use the body class approach
  }
  
  statCards: StatCard[] = [
    {
      title: 'Total Balance',
      value: '$632,000',
      change: '+12.5%',
      icon: 'pi pi-wallet',
      isPositive: true
    },
    {
      title: 'Total Income',
      value: '$592,000',
      change: '-3.2%',
      icon: 'pi pi-arrow-up-right',
      isPositive: false
    },
    {
      title: 'Spending',
      value: '$354,000',
      change: '+12.8%',
      icon: 'pi pi-shopping-cart',
      isPositive: true
    },
    {
      title: 'Investment',
      value: '$238,000',
      change: '-7.5%',
      icon: 'pi pi-chart-pie',
      isPositive: false
    }
  ];

  selectedDate: Date | null = null;
  selectedCategory: string = '';
  selectedService: string = '';

  categoryOptions: FilterOption[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Utilities', value: 'utilities' },
    { label: 'Entertainment', value: 'entertainment' }
  ];

  serviceOptions: FilterOption[] = [
    { label: 'All Services', value: 'all' },
    { label: 'Service 1', value: 'service1' },
    { label: 'Service 2', value: 'service2' },
    { label: 'Service 3', value: 'service3' }
  ];

  analyticsChartData = [
    { label: 'Jan', value: 35, color: '#7C3AED' },
    { label: 'Feb', value: 28, color: '#7C3AED' },
    { label: 'Mar', value: 42, color: '#7C3AED' },
    { label: 'Apr', value: 38, color: '#7C3AED' },
    { label: 'May', value: 55, color: '#7C3AED' },
    { label: 'Jun', value: 45, color: '#7C3AED' },
    { label: 'Jul', value: 48, color: '#7C3AED' },
    { label: 'Aug', value: 38, color: '#7C3AED' }
  ];

  revenueChartData = [
    { label: 'Service 1', value: 45, color: '#7C3AED' },
    { label: 'Service 2', value: 28, color: '#EC4899' },
    { label: 'Service 3', value: 15, color: '#A78BFA' },
    { label: 'Service 4', value: 12, color: '#EC4899' }
  ];

  analyticsLegend = [
    { label: 'Income', color: '#7C3AED' },
    { label: 'Outcome', color: '#EC4899' }
  ];

  revenueLegend = [
    { label: 'Service 1', color: '#7C3AED' },
    { label: 'Service 2', color: '#EC4899' },
    { label: 'Service 3', color: '#A78BFA' },
    { label: 'Service 4', color: '#EC4899' }
  ];

  transactionData = [
    { date: '2024-02-01', description: 'Payment from Client', amount: '+$1,500', type: 'income' },
    { date: '2024-02-02', description: 'Office Supplies', amount: '-$320', type: 'expense' },
    { date: '2024-02-03', description: 'Subscription Renewal', amount: '-$99', type: 'expense' },
    { date: '2024-02-04', description: 'Project Completion', amount: '+$2,500', type: 'income' },
    { date: '2024-02-05', description: 'Equipment Purchase', amount: '-$1,200', type: 'expense' }
  ];

  ngOnInit(): void {
    // Initialize component
  }

  onFilterChange(): void {
    // Handle filter changes
  }
}
