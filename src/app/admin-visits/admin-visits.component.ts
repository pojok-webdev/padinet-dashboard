import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EdgeService } from '../edge.service';
import { PadiCytoscape } from 'padicytoscape';
import { ActivatedRoute } from '@angular/router';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';

@Component({
  selector: 'app-admin-visits',
  templateUrl: './admin-visits.component.html',
  styleUrls: ['./admin-visits.component.css']
})
export class AdminVisitsComponent implements OnInit {
  dataSource : MatTableDataSource<any>
  columnDisplayed = ["name","source","saddress","scity","target","taddress","tcity","action"]
  searchBox = ""
  
  constructor(
    private edges : EdgeService,
    private dialog : MatDialog,
    private cy : PadiCytoscape,
    private route : ActivatedRoute,
  ) {
    let config = this.route.routeConfig
    let params = this.route.snapshot.params
    console.log("COnfig",config)
    switch(config.path){
      case 'tableview':
      console.log("No params provided")
      this.edges.getEdges({node_id:null},result => {
        this.dataSource = new MatTableDataSource(result)
      })
      break
      case 'tableview/:component_type/:component_id':
      console.log("Parameter provided exists")
        this.edges.getEdges({node_id:params.component_id},result => {
          this.dataSource = new MatTableDataSource(result)
        })
      break
    }
  }
  applyFilter(filterValue: string) {
    console.log("filtervl",filterValue)
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }
  editEdge(edge){
    edge.source = edge.source.toString()
    edge.target = edge.target.toString()
    console.log("Edge",edge)
    this.dialog.open(EdgeInfoComponent,{
      width: '500px',
      data:{
        component:edge
      }
    })
  }
  removeEdge(element){
    console.log("Elemeent",element)
    this.edges.removeEdge(element,result => {
      this.cy.removeEdge(element.id)
      console.log("Result",result)
    })
  }
  clearSearchbox(){
    this.searchBox = ""
    this.applyFilter("")
  }


}
