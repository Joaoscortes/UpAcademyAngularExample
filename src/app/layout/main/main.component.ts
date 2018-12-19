import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  param = {value: 'Joao'};

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  changeLang(lang: string ) {
    this.translate.use(lang);
  }
}
