import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isOpen = true;

  ngOnInit(): void {
    // Set initial body class
    this.updateBodyClass();
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.updateBodyClass();
  }

  private updateBodyClass(): void {
    if (this.isOpen) {
      document.body.classList.remove('sidebar-collapsed');
    } else {
      document.body.classList.add('sidebar-collapsed');
    }
  }

  menuItems = [
    { icon: 'pi pi-home', label: 'Dashboard', route: '/dashboard' },
    { icon: 'pi pi-chart-bar', label: 'Analytics', route: '/analytics' },
    { icon: 'pi pi-wallet', label: 'My Wallet', route: '/wallet' },
    { icon: 'pi pi-user', label: 'Account', route: '/account' },
    { icon: 'pi pi-cog', label: 'Settings', route: '/settings' },
    { icon: 'pi pi-lock', label: 'Security', route: '/security' },
    { icon: 'pi pi-question-circle', label: 'Help Center', route: '/help' }
  ];
}
