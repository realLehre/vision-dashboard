import { Component, inject } from '@angular/core';
import { TracksModule } from '../../dashboard/records/tracks/tracks.module';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-profile-car-info',
  standalone: true,
  imports: [TracksModule],
  templateUrl: './profile-car-info.component.html',
  styleUrl: './profile-car-info.component.scss',
})
export class ProfileCarInfoComponent {
  layoutService = inject(LayoutService);
  safetyScore: number = 68;
  test = 'rgba(5,205,153,0)';
}
