import { Component, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { MenuItem, SharedModule } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { BaseComponent } from '@shared/base/base.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ToolbarModule, ButtonModule, SharedModule, Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header extends BaseComponent {
  userMenuItems: MenuItem[] = [];
  logout = output<void>();
  ngOnInit() {
    this.userMenuItems = [
      {
        label: 'حساب کاربری',
        icon: 'pi pi-user',
        command: () => {
          this.onUserAccount();
        },
      },
      {
        label: 'تنظیمات',
        icon: 'pi pi-cog',
        command: () => {},
      },
      {
        separator: true,
      },
      {
        label: 'خروج از حساب',
        icon: 'pi pi-sign-out',
        styleClass: 'logout-item',
        command: () => {
          this.onLogout();
        },
      },
    ];
  }

  onLogout() {
    this.logout.emit();
  }
  onUserAccount() {
    this.router.navigate(['/account']);
  }
}
