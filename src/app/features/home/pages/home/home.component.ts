import { Component, inject } from '@angular/core';
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
import { HeroSectionComponent } from '@features/home/components/hero-section/hero-section';
import { ServicesSectionComponent } from '@features/home/components/services-section/services-section';
import { DownloadBanner } from '@features/home/components/download-banner/download-banner';

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
    HeroSectionComponent,
    ServicesSectionComponent,
    DownloadBanner,
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
