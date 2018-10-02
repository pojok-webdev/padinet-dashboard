import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-admin-offers',
  templateUrl: './admin-offers.component.html',
  styleUrls: ['./admin-offers.component.css']
})
export class AdminOffersComponent implements OnInit {
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
