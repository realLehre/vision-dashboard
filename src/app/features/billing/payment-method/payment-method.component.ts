import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent {
  layoutService = inject(LayoutService);
}
