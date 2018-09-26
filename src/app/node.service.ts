import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { AppvarService } from './appvar.service';

@Injectable()
export class NodeService {
  node : Observable<any>
  obj : Observable<any>
  objs : Observable<any[]>
  constructor(
    private http:HttpClient,
    private appvar:AppvarService
  ) { }
  saveNode(obj,callback){}
  updateNode(obj,callback){}
  getNodes(callback){
    console.log("GetNodes Invoked")
    this.objs = this.http.get<any[]>(this.appvar.server+'getnodes')
    this.objs.subscribe(
      data => {
        console.log("getNodes",data)
        callback(data)
      },
      err => {
        console.log("Err getNodes",err)
        callback(err)
      }
    )
  }
  removeNode(obj,callback){}
  getNeighbours(node_id,callback){
    this.node = this.http.get(this.appvar.server+'getneighbours/'+node_id)
    this.node.subscribe(
      data => {
        console.log("Success getneighbours",data)
        callback(data)
      },
      err => {
        console.log("Error getneighbours",err)
        callback(err)
      }
    )
  }
}
