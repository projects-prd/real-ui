import { AfterViewInit, Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '@features/auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { NotificationService } from '@core/services/notiification.service';
import { Router } from '@angular/router';

interface Installment {
  id: string;
  title: string;
  dueDate: string;
  amount: number;
  status: 'warning' | 'info' | 'success';
  statusText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ProgressBarModule,
    TagModule,
    TableModule,
    CarouselModule,
    AvatarModule,
    TooltipModule,
  ],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss',
})
export class HomeComponent {
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);
  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.notificationService.success('خروج موفق', 'با موفقیت خارج شدید!!');
        this.router.navigate(['/login']);
      },
    });
  }
  // // اطلاعات مالی کاربر
  // walletBalance = signal<number>(2500000); // تومان
  // creditLimit = signal<number>(50000000);   // سقف اعتبار
  // usedCredit = signal<number>(32000000);   // اعتبار استفاده شده
  //
  // // محاسبه درصد استفاده از اعتبار
  // creditUsagePercentage = computed(() => {
  //   return Math.round((this.usedCredit() / this.creditLimit()) * 100);
  // });
  //
  // // میان‌برهای خدمات اعتباری
  // quickServices = [
  //   { label: 'دریافت اعتبار (BNPL)', icon: 'pi pi-bolt', color: 'text-yellow-500 bg-yellow-50' },
  //   { label: 'درخواست وام فوری', icon: 'pi pi-percentage', color: 'text-purple-500 bg-purple-50' },
  //   { label: 'پرداخت اقساط', icon: 'pi pi-calendar', color: 'text-blue-500 bg-blue-50' },
  //   { label: 'اعتبارسنجی', icon: 'pi pi-shield', color: 'text-green-500 bg-green-50' },
  // ];
  //
  // // لیست اقساط پیش‌رو
  // upcomingInstallments = signal<Installment[]>([
  //   {
  //     id: 'INS-101',
  //     title: 'قسط ۲ از ۶ - وام کالای دیجیتال',
  //     dueDate: '۱۴۰۳/۰۶/۰۵',
  //     amount: 4200000,
  //     status: 'warning',
  //     statusText: 'سررسید نزدیک'
  //   },
  //   {
  //     id: 'INS-102',
  //     title: 'خرید اعتباری (BNPL) - فروشگاه همکار',
  //     dueDate: '۱۴۰۳/۰۶/۲۰',
  //     amount: 1850000,
  //     status: 'info',
  //     statusText: 'در انتظار پرداخت'
  //   }
  // ]);
  //
  // // بنرهای تبلیغاتی طرح‌های تسهیلات
  // promotions = [
  //   { title: 'وام ۵۰ میلیونی بدون ضامن', desc: 'با سفته الکترونیک و اعتبارسنجی آنلاین', code: 'LOAN50' },
  //   { title: 'خرید اقساطی با کارمزد zero', desc: 'ویژه خریدهای بالای ۵ میلیون تومان', code: 'ZERO' }
  // ];
}
