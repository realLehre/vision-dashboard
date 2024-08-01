import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { AuthorsComponent } from './authors/authors.component';
import { Author, AuthorsService } from './authors/services/authors.service';
import { ProjectsComponent } from '../dashboard/dash-tables/projects/projects.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [AuthorsComponent, MatTableModule, MatSortModule, ProjectsComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {}
