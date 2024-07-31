import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  layoutService = inject(LayoutService);
  primaryColor: WritableSignal<string> = this.layoutService.primaryColor;
  ngOnInit() {}

  onCloseSidenav() {
    this.layoutService.menuOpened.set(false);
  }
}
