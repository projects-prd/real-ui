import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AccountServices } from '@features/account/services/account';
import { ActiveSession } from '../../models/user-profile.model';

@Component({
  selector: 'app-security-settings',
  standalone: true,
  imports: [CommonModule, PasswordModule, ButtonModule],
  templateUrl: 'security-settings.html',
  styleUrl: 'security-settings.scss',
})
export class SecuritySettingsComponent implements OnInit {
  sessions: ActiveSession[] = [];

  constructor(private accountService: AccountServices) {}

  ngOnInit() {
    this.accountService.getActiveSessions().subscribe((res) => (this.sessions = res));
  }
}
