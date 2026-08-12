import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ServiceCardComponent,
  ServiceItem,
} from '@features/home/components/service-card/service-card';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: 'services-section.html',
  styleUrl: 'services-section.scss',
})
export class ServicesSectionComponent {
  services: ServiceItem[] = [
    {
      id: '1',
      title: 'خدمات وام و اعتبار وامینو',
      subtitle: 'خرید اقساطی بدون نیاز به ضامن و سپرده‌گذاری',
      bgGradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      image:
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400&auto=format&fit=crop',
      link: '/credit',
    },
    {
      id: '2',
      title: 'خدمات وامینوکارت',
      subtitle: 'کارت اعتباری هوشمند با بازپرداخت آسان',
      bgGradient: 'linear-gradient(135deg, #475569 0%, #0f172a 100%)',
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop',
      link: '/card',
    },
    {
      id: '3',
      title: 'خدمات مدیریت ثروت',
      subtitle: 'حفظ ارزش سرمایه در برابر تورم، کم‌ریسک و بی‌دغدغه',
      bgGradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=400&auto=format&fit=crop',
      link: '/wealth',
    },
    {
      id: '4',
      title: 'بیمه شخص ثالث اقساطی',
      subtitle: 'صدور فوری بیمه‌نامه بدون نیاز به چک و سفته',
      bgGradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      image:
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop',
      link: '/insurance',
    },
  ];
}
