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
  gets(callback){
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
  get(obj,callback){
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
  update(visit, callback){
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
  remove(visit,callback){
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
}
