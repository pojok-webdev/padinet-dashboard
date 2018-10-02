import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PadiCytoscape } from 'padicytoscape';
import { EdgeService } from '../edge.service';

@Component({
  selector: 'app-admin-offers',
  templateUrl: './admin-offers.component.html',
  styleUrls: ['./admin-offers.component.css']
})
export class AdminOffersComponent implements OnInit {
  dataSource : MatTableDataSource<any>
  columnDisplayed = ["kdoffer","clientname","address","pic","email","phone","service","action"]
  searchBox = ""
  
  constructor(
    private salesservice: SalesService,
    private edges : EdgeService,
    private dialog : MatDialog,
    private cy : PadiCytoscape,
    private route : ActivatedRoute,
  ) {
    let config = this.route.routeConfig
    let params = this.route.snapshot.params
    console.log("COnfig",config)
    this.salesservice.getOffers(result => {
      this.dataSource = new MatTableDataSource(result)
    })
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
