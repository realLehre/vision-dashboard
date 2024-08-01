import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { Author, AuthorsService } from './services/authors.service';
import { AuthorStatusDirective } from './directives/status.directive';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatTableModule,
    MatSortModule,
    DatePipe,
    AuthorStatusDirective,
  ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss',
})
export class AuthorsComponent implements OnInit, AfterViewInit {
  authorService = inject(AuthorsService);
  displayedColumns: string[] = [
    'author',
    'function',
    'status',
    'employed',
    'edit',
  ];
  authors!: MatTableDataSource<Author>;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.authors = new MatTableDataSource<Author>(this.authorService.authors);
    console.log(this.authors);
  }

  ngAfterViewInit() {
    this.authors.sort = this.sort;
  }
}
