import { Injectable } from '@angular/core';
import { AppvarService } from './appvar.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TroubleshootService {
  troubleshoot: Observable<any>
  constructor(
    private appvar:AppvarService,
    private http:HttpClient
  ) {}
  troubleshootdaily(callback){
    this.troubleshoot = this.http.get(this.appvar.dashboardServer+'troubleshootdaily')
    this.troubleshoot.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  troubleshootweekly(callback){
    this.troubleshoot = this.http.get(this.appvar.dashboardServer+'troubleshootweekly')
    this.troubleshoot.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  troubleshootmonthly(callback){
    this.troubleshoot = this.http.get(this.appvar.dashboardServer+'troubleshootmonthly')
    this.troubleshoot.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  troubleshootquarterly(callback){
    this.troubleshoot = this.http.get(this.appvar.dashboardServer+'troubleshootquarterly')
    this.troubleshoot.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  troubleshootyearly(callback){
    this.troubleshoot = this.http.get(this.appvar.dashboardServer+'troubleshootyearly')
    this.troubleshoot.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
