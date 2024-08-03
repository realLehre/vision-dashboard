import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/layout/services/layout.service';
import { HoverDirective } from '../../../shared/directives/hover.directive';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [HoverDirective],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  layoutService = inject(LayoutService);
}
