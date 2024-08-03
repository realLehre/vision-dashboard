import { Component } from '@angular/core';
import { ToggleBtnComponent } from '../../../shared/components/toggle-btn/toggle-btn.component';

@Component({
  selector: 'app-profile-platform-settings',
  standalone: true,
  imports: [ToggleBtnComponent],
  templateUrl: './profile-platform-settings.component.html',
  styleUrl: './profile-platform-settings.component.scss',
})
export class ProfilePlatformSettingsComponent {}
