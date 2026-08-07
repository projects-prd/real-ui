import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountServices } from '@features/account/services/account';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'account-layout.html',
  styleUrl: 'account-layout.scss',
})
export class AccountLayoutComponent implements OnInit {
  user!: UserProfile;

  constructor(private accountService: AccountServices) {}

  ngOnInit() {
    this.accountService.getUserProfile().subscribe((p) => (this.user = p));
  }
}
