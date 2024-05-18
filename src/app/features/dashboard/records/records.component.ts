import { Component } from '@angular/core';
import { TracksComponent } from './tracks/tracks.component';
import { SafetyComponent } from './safety/safety.component';

@Component({
  selector: 'app-records',
  standalone: true,
  imports: [TracksComponent, SafetyComponent],
  templateUrl: './records.component.html',
  styleUrl: './records.component.scss',
})
export class RecordsComponent {}
