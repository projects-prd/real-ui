import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  bgGradient: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'service-card.html',
  styleUrl: 'service-card.scss',
})
export class ServiceCardComponent  {
  @Input({ required: true }) item!: any;
}
