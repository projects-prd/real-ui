import { Component, input } from '@angular/core';

export type LoadingVariant = 'spinner' | 'dots' | 'ring';
export type LoadingSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class LoadingComponent {
  visible = input<boolean>(true);
  variant = input<LoadingVariant>('spinner');
  size = input<LoadingSize>('md');
  message = input<string>('');
  overlay = input<boolean>(false);
  fullScreen = input<boolean>(false);
}
