import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'hero-section.html',
  styleUrl: 'hero-section.scss',
})
export class HeroSectionComponent {
  heroData = {
    mainBanner: {
      title: 'اعتبار خرید کالا و کالای دیجیتال',
      subtitle: 'با اعتبار آنلاین وامینو تا ۳۰٪ تخفیف خریدهای اقساطی',
      buttonText: 'دریافت فوری اعتبار وامینو',
      badge: '۳۰٪ ویژه',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    },
    sideBanners: [
      {
        id: 1,
        title: 'فردات رو بساز',
        subtitle: 'سرمایه‌گذاری هوشمند با مدیریت ثروت وامینو',
        image:
          'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop',
      },
      {
        id: 2,
        title: 'صندوق‌های طلا وامینو',
        subtitle: 'سرمایه‌گذاری امن، مطمئن و نقدشوندگی سریع',
        image:
          'https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=600&auto=format&fit=crop',
      },
    ],
  };
}
