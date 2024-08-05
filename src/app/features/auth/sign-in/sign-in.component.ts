import { Component, inject } from '@angular/core';
import { ToggleBtnComponent } from '../../../shared/components/toggle-btn/toggle-btn.component';
import { LayoutService } from '../../../core/layout/services/layout.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ToggleBtnComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  layoutService = inject(LayoutService);
  router = inject(Router);
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSignIn() {
    if (this.form.invalid) {
      alert('Please fill all fields');
      return;
    }

    this.router.navigate(['/', 'vision', 'dashboard']);
    this.form.reset();
  }
}
