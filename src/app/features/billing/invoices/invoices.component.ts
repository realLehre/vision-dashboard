import { Component, inject } from '@angular/core';
import { Invoice, InvoiceService } from './services/invoice.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent {
  invoiceService = inject(InvoiceService);
  invoices: Invoice[] = this.invoiceService.invoice;
}
