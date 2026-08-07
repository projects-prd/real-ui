import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-upcoming-installment',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: 'upcoming-installment.html',
  styleUrl: 'upcoming-installment.scss',
})
export class UpcomingInstallmentComponent {
  dueDate = '۱۵ مرداد ۱۴۰۵';
  daysLeft = 8;
  amount = 480000;
  title = 'قسط ۲ از ۶ (خرید کالا)';
}
