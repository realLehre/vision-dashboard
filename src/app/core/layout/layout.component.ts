import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass, NgStyle } from '@angular/common';
import { LayoutService } from './services/layout.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { DashboardService } from '../../features/dashboard/services/dashboard.service';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    SidenavComponent,
    MainContentComponent,
    MatTooltipModule,
    NgClass,
    SidePanelComponent,
    NgStyle,
    HeaderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit, AfterViewInit {
  layoutService = inject(LayoutService);
  isMenuOpened: boolean =
    JSON.parse(localStorage.getItem('menuStatus')!) ?? true;
  isMenuOpenedSig = this.layoutService.menuOpened;
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;
  @ViewChild('mainContent', { static: true })
  mainContent!: ElementRef<HTMLDivElement>;
  isMobileToggled: boolean = false;

  ngOnInit() {
    this.isMenuOpened = JSON.parse(localStorage.getItem('menuStatus')!) ?? true;
  }

  ngAfterViewInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onToggleMobile() {
    this.isMobileToggled = this.container.nativeElement.offsetWidth < 550;
    if (this.isMobileToggled) {
      this.isMenuOpenedSig.set(false);
      this.isMenuOpened = false;
    } else {
      const isOpened = JSON.parse(localStorage.getItem('menuStatus')!) ?? true;
      this.isMenuOpenedSig.set(isOpened);
      this.isMenuOpened = isOpened;
    }

    this.onResize();
  }

  onToggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    this.isMenuOpenedSig.set(this.isMenuOpened);
    localStorage.setItem('menuStatus', JSON.stringify(this.isMenuOpened));
  }

  onResize() {
    this.layoutService.mainContentWidth.set(
      this.mainContent.nativeElement.offsetWidth,
    );
  }
}
