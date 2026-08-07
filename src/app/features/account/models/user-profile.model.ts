export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}

export interface ActiveSession {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrentDevice: boolean;
}

export interface NotificationSettings {
  emailAlerts: boolean;
  smsSecurity: boolean;
  marketingEmails: boolean;
}
