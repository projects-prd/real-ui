import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../../services/models/services.model';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: 'services-card.html',
  styleUrl: 'services-card.scss',
})
export class ServicesCard {
  @Input({ required: true }) item!: ServiceItem;

  hasImageError = false;

  onImageError() {
    this.hasImageError = true; // در صورت خرابی عکس، سیستم به آیکون سوییچ می‌کند
  }

  getFallbackIcon(item: ServiceItem): string {
    if (item.icon && !item.isImage) {
      return item.icon;
    }
    // آیکون‌های جایگزین برای زمانی که عکس لود نشود
    return 'fa-solid fa-file-invoice-dollar';
  }
}
