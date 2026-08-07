import { Component } from '@angular/core';
import { ServiceCategoryComponent } from '@features/services/components/services-category/services-category';
import { CreditWidgetComponent } from '@features/services/components/credit-widget/credit-widget';
import { ServiceCategory } from '@features/services/models/services.model';
import { WalletWidgetComponent } from '@features/services/components/wallet-widget/wallet-widget';
import { SupportWidgetComponent } from '@features/services/components/support-widget/support-widget';
import { UpcomingInstallmentComponent } from '@features/services/components/upcoming-installment/upcoming-installment';
import { CreditScore } from '@features/services/components/credit-score/credit-score';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    ServiceCategoryComponent,
    CreditWidgetComponent,
    WalletWidgetComponent,
    SupportWidgetComponent,
    UpcomingInstallmentComponent,
    CreditScore,
  ],
  templateUrl: 'services.html',
  styleUrl: 'services.scss',
})
export class ServicesPageComponent {
  categories: ServiceCategory[] = [
    {
      id: 'payment',
      title: 'خدمات پرداخت',
      items: [
        { id: '1', title: 'پرداخت قبض', icon: 'fa-solid fa-receipt', isImage: false },
        { id: '2', title: 'خیریه', icon: 'fa-solid fa-hand-holding-heart', isImage: false },
        { id: '3', title: 'مدیریت کیف پول', icon: 'fa-solid fa-wallet', isImage: false },
        { id: '4', title: 'بارکدخوان', icon: 'fa-solid fa-qrcode', isImage: false },
        { id: '5', title: 'کارت به کارت', icon: 'fa-solid fa-credit-card', isImage: false },
      ],
    },
    {
      id: 'mobile',
      title: 'خدمات موبایل',
      items: [
        { id: '6', title: 'خرید شارژ', icon: 'fa-solid fa-sim-card', isImage: false },
        { id: '7', title: 'بسته اینترنت', icon: 'fa-solid fa-wifi', isImage: false },
        {
          id: '8',
          title: 'قبض همراه اول',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="36" cy="50" r="22" fill="none" stroke="%2358C2C0" stroke-width="8"/><circle cx="64" cy="50" r="22" fill="none" stroke="%23F47B20" stroke-width="8"/></svg>',
          isImage: true,
        },
        {
          id: '9',
          title: 'قبض ایرانسل',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="46" ry="32" fill="%23FFCC00"/><text x="50" y="56" font-family="sans-serif" font-weight="bold" font-size="14" fill="%23000" text-anchor="middle">Irancell</text></svg>',
          isImage: true,
        },
        {
          id: '10',
          title: 'قبض رایتل',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="32" fill="none" stroke="%23A11B6C" stroke-width="9"/><circle cx="50" cy="30" r="9" fill="%23A11B6C"/></svg>',
          isImage: true,
        },
      ],
    },
    {
      id: 'bills',
      title: 'قبوض خدماتی',
      items: [
        {
          id: '11',
          title: 'آب',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 15 C50 15 20 55 20 70 A30 30 0 0 0 80 70 C80 55 50 15 50 15 Z" fill="%230284C7"/></svg>',
          isImage: true,
        },
        {
          id: '12',
          title: 'برق',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23EAB308"/><path d="M52 20 L30 52 H50 L46 80 L70 46 H50 Z" fill="%23DC2626"/></svg>',
          isImage: true,
        },
        {
          id: '13',
          title: 'اداره گاز',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="%230284C7"/><path d="M50 20 C40 40 30 50 30 65 A20 20 0 0 0 70 65 C70 50 60 40 50 20 Z" fill="%23EF4444"/><path d="M50 40 C45 50 40 55 40 65 A10 10 0 0 0 60 65 C60 55 55 50 50 40 Z" fill="%23FACC15"/></svg>',
          isImage: true,
        },
        {
          id: '14',
          title: 'مخابرات',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%231E40AF"/><path d="M30 40 Q50 20 70 40 M38 50 Q50 35 62 50 M45 60 Q50 50 55 60" fill="none" stroke="%23FFFFFF" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="70" r="5" fill="%23FFFFFF"/></svg>',
          isImage: true,
        },
        {
          id: '15',
          title: 'همراه اول',
          icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="36" cy="50" r="22" fill="none" stroke="%2358C2C0" stroke-width="8"/><circle cx="64" cy="50" r="22" fill="none" stroke="%23F47B20" stroke-width="8"/></svg>',
          isImage: true,
        },
      ],
    },
    // --- دسته‌بندی‌های جدید ---
    {
      id: 'insurance',
      title: 'خدمات بیمه',
      items: [
        { id: '16', title: 'بیمه موبایل', icon: 'fa-solid fa-mobile-screen', isImage: false },
        { id: '17', title: 'بیمه شخص ثالث', icon: 'fa-solid fa-car-burst', isImage: false },
        { id: '18', title: 'بیمه‌نامه‌ها', icon: 'fa-solid fa-file-shield', isImage: false },
        { id: '19', title: 'بیمه بدنه خودرو', icon: 'fa-solid fa-shield-halved', isImage: false },
      ],
    },
    {
      id: 'car-services',
      title: 'خدمات خودرو',
      items: [
        { id: '20', title: 'خلافی', icon: 'fa-solid fa-file-invoice-dollar', isImage: false },
        { id: '21', title: 'عوارض جاده‌‌ای', icon: 'fa-solid fa-road', isImage: false },
        { id: '22', title: 'بیمه شخص ثالث', icon: 'fa-solid fa-car-burst', isImage: false },
        { id: '23', title: 'بیمه بدنه خودرو', icon: 'fa-solid fa-shield-halved', isImage: false },
      ],
    },
    {
      id: 'wealth-management',
      title: 'مدیریت ثروت',
      items: [
        {
          id: '24',
          title: 'طلای کیف‌ ثروت',
          icon: 'fa-solid fa-coins',
          subtitle: 'قسطی',
          isImage: false,
        },
        {
          id: '25',
          title: 'درآمد ثابت',
          icon: 'fa-solid fa-chart-line',
          subtitle: '120% اعتبار',
          isImage: false,
        },
        { id: '26', title: 'سرمایه‌گذاری', icon: 'fa-solid fa-piggy-bank', isImage: false },
        {
          id: '27',
          title: 'تامین مالی جمعی',
          icon: 'fa-solid fa-users-between-lines',
          isImage: false,
        },
      ],
    },
  ];
}
