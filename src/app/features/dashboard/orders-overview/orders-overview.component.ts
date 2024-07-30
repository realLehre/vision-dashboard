import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-overview',
  standalone: true,
  imports: [],
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.scss',
})
export class OrdersOverviewComponent implements OnInit {
  ordersOverview: { order: string; date: string }[] = [
    { order: '$2400 design changes', date: '22 DEC 7:20 PM' },
    { order: 'NEW order', date: '23 DEC 7:00 PM' },
    { order: 'Server Payments for April', date: '25 DEC 10:00 AM' },
    { order: 'New card added for order', date: '25 DEC 7:20 AM' },
    { order: 'Unlocked packages for Development', date: '22 DEC 7:20 PM' },
    { order: 'New order', date: '22 DEC 7:20 PM' },
    { order: 'New order', date: '22 DEC 7:20 PM' },
    // { order: 'New order', date: '22 DEC 7:20 PM' },
  ];

  ngOnInit() {
    // this.ordersOverview = [...this.ordersOverview, ...this.ordersOverview];
  }
}
