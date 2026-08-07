import {
  AfterViewInit,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
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
import { Header } from '@core/components/header/header';
import { MenuBar } from '@core/components/menu-bar/menu-bar';
import { HeroSectionComponent } from '@features/home/components/hero-section/hero-section';
import {
  ServiceCardComponent,
  ServiceItem,
} from '@features/home/components/service-card/service-card';
import { ServicesSectionComponent } from '@features/home/components/services-section/services-section';
import { DownloadBanner } from '@features/home/components/download-banner/download-banner';
import { Footer } from '@core/components/footer/footer';

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
    Header,
    MenuBar,
    HeroSectionComponent,
    ServicesSectionComponent,
    DownloadBanner,
    Footer,
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
}
