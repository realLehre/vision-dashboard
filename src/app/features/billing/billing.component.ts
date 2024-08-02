import { Component, inject, WritableSignal } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LayoutService } from '../../core/layout/services/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CardsComponent, InvoicesComponent, NgClass],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent {
  layoutService = inject(LayoutService);
  containerWidth: WritableSignal<number> = this.layoutService.mainContentWidth;
}
