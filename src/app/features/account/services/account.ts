import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserProfile, ActiveSession, NotificationSettings } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class AccountServices {
  private mockUser: UserProfile = {
    fullName: 'علی رضایی',
    email: 'ali.rezaei@example.com',
    phone: '09123456789',
    role: 'توسعه‌دهنده فرانت‌اند',
    avatar: 'https://i.pravatar.cc/300?img=12',
  };
  getUserProfile(): Observable<UserProfile> {
    return of(this.mockUser);
  }

  updateProfile(profile: UserProfile): Observable<boolean> {
    this.mockUser = { ...profile };
    return of(true);
  }

  getActiveSessions(): Observable<ActiveSession[]> {
    return of([
      {
        id: '1',
        device: 'Chrome در Windows',
        location: 'تهران، ایران',
        lastActive: 'هم‌اکنون',
        isCurrentDevice: true,
      },
      {
        id: '2',
        device: 'Safari در iPhone 13',
        location: 'اصفهان، ایران',
        lastActive: 'دیروز ۱۸:۳۰',
        isCurrentDevice: false,
      },
    ]);
  }
}
