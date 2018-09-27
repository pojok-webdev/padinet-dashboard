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
  saveNode(obj,callback){
    console.log("SaveNode Invoked")
    this.objs = this.http.post<any[]>(this.appvar.server+'savenode',obj)
    this.objs.subscribe(
      data => {
        console.log("saveNode",data)
        callback(data)
      },
      err => {
        console.log("Err saveNode",err)
        callback(err)
      }
    )

  }
  updateNode(obj,callback){
    console.log("updatenode Invoked")
    this.objs = this.http.post<any[]>(this.appvar.server+'updatenode',obj)
    this.objs.subscribe(
      data => {
        console.log("updatenode",data)
        callback(data)
      },
      err => {
        console.log("Err updatenode",err)
        callback(err)
      }
    )

  }
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
  removeNode(obj,callback){
    console.log("removenode Invoked")
    this.objs = this.http.post<any[]>(this.appvar.server+'removenode',obj)
    this.objs.subscribe(
      data => {
        console.log("removenode",data)
        callback(data)
      },
      err => {
        console.log("Err removenode",err)
        callback(err)
      }
    )
  }
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
