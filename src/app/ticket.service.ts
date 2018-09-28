import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable()
export class TicketService {
ticket :Observable<any>
  constructor(
    private http: HttpClient,
    private appvar: AppvarService
  ) {}
  ticketquarterly(callback){
    this.ticket = this.http.get(this.appvar.dashboardServer+'ticketquarterly')
    this.ticket.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  ticketweekly(callback){
    this.ticket = this.http.get(this.appvar.dashboardServer+'ticketweekly')
    this.ticket.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  ticketmonthly(callback){
    this.ticket = this.http.get(this.appvar.dashboardServer+'ticketmonthly')
    this.ticket.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  ticketyearly(callback){
    this.ticket = this.http.get(this.appvar.dashboardServer+'ticketyearly')
    this.ticket.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  ticketdaily(callback){
    this.ticket = this.http.get(this.appvar.dashboardServer+'ticketdaily')
    this.ticket.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }

}
