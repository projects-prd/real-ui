import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from '@shared/components/toast-container/toast-container';
import { AuthService } from '@features/auth/services/auth.service';
import { NotificationService } from '@core/services/notiification.service';
import { Header } from '@core/components/header/header';
import { MenuBar } from '@core/components/menu-bar/menu-bar';
import { Footer } from '@core/components/footer/footer';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastContainerComponent, Header, MenuBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('real-ui');
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private router = inject(Router);
  isAuthPage = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects.includes('/auth')),
    ),
    { initialValue: false },
  );
  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.notificationService.success('خروج موفق', 'با موفقیت خارج شدید!!');
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
