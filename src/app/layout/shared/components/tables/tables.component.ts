import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  @Input() header: any;
  @Input() data$: any;
  @Input() theme = 'table-dark';
  @Input() pagination = false;
  @Input() search = false;

  @Output() clickedRow = new EventEmitter();

  datafiltered$: Observable<any[]>;
  filterValue: string;
  currentPage = 1;
  numberPerPage = 1;
  numberOfPages = 1;

  constructor() { }

  ngOnInit() {
    this.displayData();
  }

  clickRow(row) {
    this.clickedRow.emit(row);
  }

  // ---------------------------------------------------------------
  // Search filter
  // ---------------------------------------------------------------

  public searchFilter() {
    if (this.filterValue === '') {
      return this.data$;
    } else {
      const re = new RegExp(this.filterValue, 'gi');
      return this.data$
        .pipe(
          map((items: any[]) => items.filter(item => item.name.match(re)))
        );
    }
  }

  // ---------------------------------------------------------------
  // Pagination
  // ---------------------------------------------------------------

  public displayData() {
    if (this.pagination) {
      this.datafiltered$ = this.searchFilter()
        .pipe(
          map((items: any[]) => {
            this.numberOfPages = this.getNumberOfPages(items.length);

            const begin = ((this.currentPage - 1) * this.numberPerPage);
            const end = begin + this.numberPerPage;

            return items.slice(begin, end);
          })
        );
    } else {
      this.datafiltered$ = this.searchFilter();
    }

  }

  getNumberOfPages(dataLength: number) {
    return Math.ceil(dataLength / this.numberPerPage);
  }

  pagesArray(): number[] {
    return [...Array(this.numberOfPages).keys()];
  }

  toPage(page: number) {
    this.currentPage = page;
    this.displayData();
  }

  nextPage() {
    this.currentPage += 1;
    this.displayData();
  }

  previousPage() {
    this.currentPage -= 1;
    this.displayData();
  }

  firstPage() {
    this.currentPage = 1;
    this.displayData();
  }

  lastPage() {
    this.currentPage = this.numberOfPages;
    this.displayData();
  }
}
