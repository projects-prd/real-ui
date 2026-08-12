import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreditItem } from '@features/services/models/services.model';

@Component({
  selector: 'app-credit-widget',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'credit-widget.html',
  styleUrl: 'credit-widget.scss',
})
export class CreditWidgetComponent {
  creditItems: CreditItem[] = [
    {
      id: '1',
      title: 'وام خرید کالا',
      subtitle: 'تا سقف ۲۰۰ میلیون تومان',
      icon: 'fa-solid fa-credit-card',
      routerLink: '/loans/goods',
    },
    {
      id: '2',
      title: 'خرید اعتباری',
      subtitle: 'پرداخت یک قسط و چهار قسط',
      icon: 'fa-solid fa-clock-rotate-left',
      routerLink: '/credit/buy',
    },
    {
      id: '3',
      title: 'پرداخت اقساط',
      subtitle: 'بازپرداخت بدهی',
      icon: 'fa-solid fa-receipt',
      routerLink: '/credit/installments',
    },
  ];
}
