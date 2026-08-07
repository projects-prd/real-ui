import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AccountServices } from '@features/account/services/account';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: 'profile-info.html',
  styleUrl: 'profile-info.scss',
})
export class ProfileInfoComponent implements OnInit {
  user!: UserProfile;

  constructor(private accountService: AccountServices) {}

  ngOnInit() {
    this.accountService.getUserProfile().subscribe((profile) => (this.user = profile));
  }

  onSubmit() {
    this.accountService.updateProfile(this.user).subscribe();
  }
}
