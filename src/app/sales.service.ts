import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';
import { Observable } from 'rxjs';

@Injectable()
export class SalesService {
  obj : Observable<any>

  constructor(
    private http : HttpClient,
    private appvar : AppvarService
  ) { }
  getVisits(callback){
    this.obj = this.http.get(this.appvar.salesAdminServer+'visitgets')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  getVisit(obj,callback){
    this.obj = this.http.get(this.appvar.salesAdminServer+'visitget/'+obj.id)
    this.obj.subscribe(
      data => {
        callback(data[0])
      },
      err => {
        callback(err)
      }
    )
  }
  saveVisit(visit,callback){
    this.obj = this.http.post(this.appvar.salesAdminServer+'visitsave',visit)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  updateVisit(visit, callback){
    this.obj = this.http.post(this.appvar.salesAdminServer+'visitupdate',visit)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  removeVisit(visit,callback){
    this.obj = this.http.get(this.appvar.salesAdminServer+'visitremove/'+visit.id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }



  getOffers(callback){
    this.obj = this.http.get(this.appvar.salesAdminServer+'offergets')
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  getOffer(obj,callback){
    this.obj = this.http.get(this.appvar.salesAdminServer+'offerget/'+obj.id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  saveOffer(obj,callback){
    this.obj = this.http.post(this.appvar.salesAdminServer+'offersave',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  updateOffer(obj,callback){
    this.obj = this.http.post(this.appvar.salesAdminServer+'offerupdate',obj)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  removeOffer(obj,callback){
    this.obj = this.http.get(this.appvar.salesAdminServer+'offerremove'+obj.id)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }

}
