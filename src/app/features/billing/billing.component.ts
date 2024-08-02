import { Component, inject, WritableSignal } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LayoutService } from '../../core/layout/services/layout.service';
import { NgClass } from '@angular/common';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { TransactionsComponent } from './transactions/transactions.component';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [
    CardsComponent,
    InvoicesComponent,
    NgClass,
    BillingInfoComponent,
    TransactionsComponent,
  ],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent {
  layoutService = inject(LayoutService);
  containerWidth: WritableSignal<number> = this.layoutService.mainContentWidth;
}
