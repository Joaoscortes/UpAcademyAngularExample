import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input()  header: any;
  @Input()  data: any;
  @Input()  theme = 'table-dark';

  constructor() { }

  ngOnInit() {
  }

}
