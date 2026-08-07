import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from '@features/auth/pages/login-page/login-page';
import { ToastContainerComponent } from '@shared/components/toast-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('real-ui');
}
