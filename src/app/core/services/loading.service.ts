import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private activeRequests = 0;

  isLoading = signal<boolean>(false);
  message = signal<string>('');

  show(msg: string = '') {
    this.activeRequests++;
    this.message.set(msg);
    this.isLoading.set(true);
  }

  hide() {
    this.activeRequests--;
    if (this.activeRequests <= 0) {
      this.activeRequests = 0;
      this.isLoading.set(false);
      this.message.set('');
    }
  }
}
