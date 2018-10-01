import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-admin-visit',
  templateUrl: './admin-visit.component.html',
  styleUrls: ['./admin-visit.component.css']
})
export class AdminVisitComponent implements OnInit {
  visit = {
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
  save(visit){
    this.salesservice.saveVisit(visit, result => {})
  }
}
