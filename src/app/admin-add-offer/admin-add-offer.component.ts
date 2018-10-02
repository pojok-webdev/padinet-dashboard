import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-admin-add-offer',
  templateUrl: './admin-add-offer.component.html',
  styleUrls: ['./admin-add-offer.component.css']
})
export class AdminAddOfferComponent implements OnInit {
  offer = {
    kdoffer:'',
    clientname:'',
    address:'',
    pic:'',
    email:'',
    phone:'',
    service:'',
    price:'',
    description:''
  }
  constructor(
    private salesservice : SalesService
  ) { }

  ngOnInit() {
  }
  save(offer){
    this.salesservice.saveOffer(offer, result => {
      console.log("Result",result)
    })
  }

}
