import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TracksModule } from '../tracks/tracks.module';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-safety',
  standalone: true,
  imports: [DecimalPipe, TracksModule, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './safety.component.html',
  styleUrl: './safety.component.scss',
})
export class SafetyComponent {
  safetyScore: number = 67;
  test = 'rgba(5,205,153,0)';
}
