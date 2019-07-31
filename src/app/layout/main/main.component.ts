import { Component, OnInit, TemplateRef } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DataService } from 'src/app/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  param = { value: 'Joao' };
  op1 = 'p1';
  op2 = 'p2';
  modalRef: BsModalRef;
  map: google.maps.Map;
  position = '38.7538084, -9.1958568';

  constructor(
    private translate: TranslateService,
    private modalService: BsModalService,
    private dataService: DataService
  ) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentposition = position;
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  ngOnInit() { }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updateProducts() {
    this.dataService.updateProducts();
  }
}
