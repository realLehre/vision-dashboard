import { Component } from '@angular/core';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileWelcomeComponent } from './profile-welcome/profile-welcome.component';
import { ProfileCarInfoComponent } from './profile-car-info/profile-car-info.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfilePlatformSettingsComponent } from './profile-platform-settings/profile-platform-settings.component';
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileHeaderComponent,
    ProfileWelcomeComponent,
    ProfileCarInfoComponent,
    ProfileInfoComponent,
    ProfilePlatformSettingsComponent,
    ProfileProjectsComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
