import { Component, inject } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-quick-info',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './quick-info.component.html',
  styleUrl: './quick-info.component.scss',
})
export class QuickInfoComponent {
  layoutService = inject(LayoutService);
}
