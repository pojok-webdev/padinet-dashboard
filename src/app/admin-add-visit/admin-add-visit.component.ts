import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-admin-add-visit',
  templateUrl: './admin-add-visit.component.html',
  styleUrls: ['./admin-add-visit.component.css']
})
export class AdminAddVisitComponent implements OnInit {
  offer = {
    clientname:'',
    address:'',
    pic:'',
    phone:'',
    purpose:''
  }
  constructor(
    private salesservice : SalesService
  ) { }

  ngOnInit() {
  }
  save(offer){
    this.salesservice.saveOffer(offer, result => {})
  }

}
