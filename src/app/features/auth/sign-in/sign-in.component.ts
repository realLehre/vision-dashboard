import { Component, inject } from '@angular/core';
import { ToggleBtnComponent } from '../../../shared/components/toggle-btn/toggle-btn.component';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ToggleBtnComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  layoutService = inject(LayoutService);
}
