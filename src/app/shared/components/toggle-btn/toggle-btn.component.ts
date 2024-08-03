import { Component, inject, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { LayoutService } from '../../../core/layout/services/layout.service';

@Component({
  selector: 'app-toggle-btn',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './toggle-btn.component.html',
  styleUrl: './toggle-btn.component.scss',
})
export class ToggleBtnComponent {
  layoutService = inject(LayoutService);
  @Input('toggle') isToggled: boolean = false;
  toggleMode() {
    this.isToggled = !this.isToggled;
  }
}
