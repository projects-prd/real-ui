import { Component, Input } from '@angular/core';
import { ServiceCategory } from '@features/services/models/services.model';
import { ServicesCard } from '@features/services/components/services-card/services-card';

@Component({
  selector: 'app-service-category',
  standalone: true,
  imports: [ServicesCard],
  templateUrl: 'services-category.html',
  styleUrl: 'services-category.scss',
})
export class ServiceCategoryComponent {
  @Input({ required: true }) category!: ServiceCategory;
}
