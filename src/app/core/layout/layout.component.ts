import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutService } from './services/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidenavComponent,
    MainContentComponent,
    MatTooltipModule,
    NgClass,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isMenuOpened: boolean =
    JSON.parse(sessionStorage.getItem('menuStatus')!) ?? true;
  onToggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    sessionStorage.setItem('menuStatus', JSON.stringify(this.isMenuOpened));
  }
}
