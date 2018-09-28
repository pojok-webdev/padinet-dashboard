import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  ticketdaily = [
    {name:'',val:''},
    {name:'',val:''},
    {name:'',val:''},
    {name:'',val:''},
    {name:'',val:''}
  ]
  ticketquarterly = this.ticketdaily
  ticketyearly = this.ticketdaily
  ticketmonthly = this.ticketdaily
  ticketweekly = this.ticketdaily
  constructor(
    private ticketservice:TicketService,
  ) {
    this.ticketservice.ticketquarterly(result => {
      this.ticketquarterly = result
      console.log('ticketquarterly',result)
    })
    this.ticketservice.ticketdaily(result => {
      this.ticketdaily = result
      console.log('ticketdaily',result)
    })
    this.ticketservice.ticketweekly(result => {
      this.ticketweekly = result
      console.log('ticketweekly',result)
    })
    this.ticketservice.ticketmonthly(result => {
      this.ticketmonthly = result
      console.log('ticketmonthly',result)
    })
    this.ticketservice.ticketyearly(result => {
      this.ticketyearly = result
      console.log('ticketyearly',result)
    })
  }

  ngOnInit() {
  }

}
