export interface ServiceItem {
  id: string;
  title: string;
  icon?: string;
  isImage?: boolean;
  routerLink?: string;
  subtitle?: string;
  bgGradient?: string;
  image?: string;
  link?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export interface CreditItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  routerLink?: string;
}
