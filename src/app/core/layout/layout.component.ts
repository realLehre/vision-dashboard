import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatSidenavModule, SidenavComponent, MainContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
