// import { Component, inject, OnInit, signal } from '@angular/core';
// import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
// import { ToastContainerComponent } from '@shared/components/toast-container/toast-container';
// import { AuthService } from '@features/auth/services/auth.service';
// import { NotificationService } from '@core/services/notiification.service';
// import { Header } from '@core/components/header/header';
// import { MenuBar } from '@core/components/menu-bar/menu-bar';
// import { Footer } from '@core/components/footer/footer';
// import { exhaustMap, filter, map, switchMap, timer } from 'rxjs';
// import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
// import { LoadingService } from '@core/services/loading.service';
// import { LoadingComponent } from '@shared/components/loading/loading';
// import { BaseComponent } from '@shared/base/base.component';
//
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, ToastContainerComponent, Header, MenuBar, Footer, LoadingComponent],
//   templateUrl: './app.html',
//   styleUrl: './app.scss',
// })
// export class App extends BaseComponent implements OnInit {
//   protected readonly title = signal('real-ui');
//   private authService = inject(AuthService);
//
//   isAuthPage = toSignal(
//     this.router.events.pipe(
//       filter((e): e is NavigationEnd => e instanceof NavigationEnd),
//       map((e) => e.urlAfterRedirects.includes('/auth')),
//     ),
//     { initialValue: false },
//   );
//   ngOnInit() {
//     this.initRouteLoading();
//   }
//   private initRouteLoading() {
//     this.router.events
//       .pipe(
//         takeUntilDestroyed(this.destroyRef),
//         filter((event) => event instanceof NavigationStart),
//         exhaustMap(() => {
//           this.loadingService.show('در حال بارگذاری صفحه...');
//           return timer(3000);
//         }),
//       )
//       .subscribe({
//         next: () => {
//           this.loadingService.hide();
//         },
//       });
//   }
//   onLogout() {
//     this.authService.logout().subscribe({
//       next: () => {
//         this.notificationService.success('خروج موفق', 'با موفقیت خارج شدید!!');
//         this.router.navigate(['/auth/login']);
//       },
//     });
//   }
// }
import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from '@shared/components/toast-container/toast-container';
import { AuthService } from '@features/auth/services/auth.service';
import { Header } from '@core/components/header/header';
import { MenuBar } from '@core/components/menu-bar/menu-bar';
import { Footer } from '@core/components/footer/footer';
import { concatMap, filter, map, timer } from 'rxjs'; // switchMap به جای exhaustMap
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { LoadingComponent } from '@shared/components/loading/loading';
import { BaseComponent } from '@shared/base/base.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastContainerComponent, Header, MenuBar, Footer, LoadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App extends BaseComponent implements OnInit {
  protected readonly title = signal('real-ui');
  private authService = inject(AuthService);

  isAuthPage = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects.includes('/auth')),
    ),
    { initialValue: false },
  );

  ngOnInit() {
    this.initRouteLoading();
  }

  private initRouteLoading() {
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => event instanceof NavigationStart),
        concatMap(() => {
          queueMicrotask(() => {
            this.loadingService.show('در حال بارگذاری صفحه...');
          });
          return timer(2000);
        }),
      )
      .subscribe({
        next: () => {
          this.loadingService.hide();
        },
      });
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.notificationService.success('خروج موفق', 'با موفقیت خارج شدید!!');
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
