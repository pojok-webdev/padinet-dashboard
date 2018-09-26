import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable()
export class EdgeService {
  obj: Observable<any>
  objs: Observable<any[]>
  constructor(
    private http: HttpClient,
    private appvar: AppvarService
  ) {}
  saveEdge(obj,callback){}
  updateEdge(obj,callback){}
  getEdges(obj,callback){
    this.objs = this.http.get<any[]>(this.appvar.server+'getedges/'+obj.node_id)
    this.objs.subscribe(
      data => {
        console.log("Success get Edges",data)
        callback(data)
      },
      err => {
        console.log("Err get Edges",err)
        callback(err)
      }
    )
  }
  removeEdge(obj,callback){}
  getVendors(callback){}
  getLinkTypes(callback){}
}
