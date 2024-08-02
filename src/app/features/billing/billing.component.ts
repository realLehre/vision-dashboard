import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { InvoicesComponent } from './invoices/invoices.component';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CardsComponent, InvoicesComponent],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent {}
