import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-dash-tables',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './dash-tables.component.html',
  styleUrl: './dash-tables.component.scss',
})
export class DashTablesComponent {}
