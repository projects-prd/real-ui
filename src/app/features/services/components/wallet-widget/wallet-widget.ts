import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-wallet-widget',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: 'wallet-widget.html',
  styleUrl: 'wallet-widget.scss',
})
export class WalletWidgetComponent {
  balance = 1250000;
}
