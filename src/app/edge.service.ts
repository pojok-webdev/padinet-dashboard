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
  saveEdge(obj,callback){
    console.log("SaveNode Invoked")
    this.objs = this.http.post<any[]>(this.appvar.server+'saveedge',obj)
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
  updateEdge(obj,callback){
    console.log("updatenode Invoked")
    this.objs = this.http.post<any[]>(this.appvar.server+'updateedge',obj)
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
  removeEdge(obj,callback){
    console.log("removeedge Invoked")
    this.objs = this.http.post<any[]>(this.appvar.server+'removeedge',obj)
    this.objs.subscribe(
      data => {
        console.log("removeedge",data)
        callback(data)
      },
      err => {
        console.log("Err removeedge",err)
        callback(err)
      }
    )
  }
  getVendors(callback){
    console.log("getvendors Invoked")
    this.objs = this.http.get<any[]>(this.appvar.server+'getvendors')
    this.objs.subscribe(
      data => {
        console.log("getvendors",data)
        callback(data)
      },
      err => {
        console.log("Err getvendors",err)
        callback(err)
      }
    )
  }
  getLinkTypes(callback){
    console.log("getlinktypes Invoked")
    this.objs = this.http.get<any[]>(this.appvar.server+'getlinktypes')
    this.objs.subscribe(
      data => {
        console.log("getlinktypes",data)
        callback(data)
      },
      err => {
        console.log("Err getlinktypes",err)
        callback(err)
      }
    )
  }
}
