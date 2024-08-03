import { Component, inject } from '@angular/core';
import { Invoice, InvoiceService } from './services/invoice.service';
import { CurrencyPipe } from '@angular/common';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent {
  layoutService = inject(LayoutService);
  invoiceService = inject(InvoiceService);
  invoices: Invoice[] = this.invoiceService.invoice;
}
