import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [ToastModule],
  template: ` <p-toast /> `,
})
export class ToastContainerComponent {}
