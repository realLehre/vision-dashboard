import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss',
})
export class TracksComponent {
  progress: number = 0;

  generatePath(progress: number): string {
    const radius = 50;
    const centerX = 50;
    const centerY = 50;
    const startAngle = -Math.PI / 2; // Start at the top center
    const endAngle = startAngle + Math.PI * (progress / 50); // Convert progress to radians
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    const largeArcFlag = progress > 50 ? 1 : 0; // 1 if progress > 50, else 0
    return `M ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2}`;
  }
}
