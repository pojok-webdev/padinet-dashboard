import { Injectable } from '@angular/core';
import { AppvarService } from './appvar.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InstallService {
  install: Observable<any>
  constructor(
    private appvar:AppvarService,
    private http:HttpClient
  ) {}
  installdaily(callback){
    this.install = this.http.get(this.appvar.dashboardServer+'installdaily')
    this.install.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  installweekly(callback){
    this.install = this.http.get(this.appvar.dashboardServer+'installweekly')
    this.install.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  installmonthly(callback){
    this.install = this.http.get(this.appvar.dashboardServer+'installmonthly')
    this.install.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  installquarterly(callback){
    this.install = this.http.get(this.appvar.dashboardServer+'installquarterly')
    this.install.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  installyearly(callback){
    this.install = this.http.get(this.appvar.dashboardServer+'installyearly')
    this.install.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
