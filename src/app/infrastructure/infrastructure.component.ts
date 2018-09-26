import * as CY from '../../../node_modules/cytoscape/dist/cytoscape'
import { PadiCytoscape } from '../../padicytoscape'
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NodeService } from '../node.service';
import { EdgeService } from '../edge.service';
import { AddLinkDialogComponent } from '../add-link-dialog/add-link-dialog.component';
import { AddBtsDialogComponent } from '../add-bts-dialog/add-bts-dialog.component';
import { NodeInfoComponent } from '../node-info/node-info.component';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  @ViewChild('cy') div :ElementRef
  btses
  cytos
  globalnodes = []
  globaledges = []
  constructor(
    private cy:PadiCytoscape,
    private dialog: MatDialog,
    private bts:NodeService,
    private edge:EdgeService
  ) {
    this.bts.getNodes(result => {
      console.log("Result",result)
      result.forEach(node => {
        node.typeCss = 'branch'
        this.globalnodes.push({data:node})
      });
    })
  }
  initNodes(callback){
    this.bts.getNodes(result => {
      this.btses = result
      result.forEach(node => {
        node.typeCss = "branch"
        this.globalnodes.push({data:node})
      });
      callback(result)
    })
  }
  initLinks(callback){
    this.edge.getEdges({node_id:null},result => {
      this.btses = result
      callback(result)
    })
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log('DIV',this.div.nativeElement)
    this.initNodes(nodes=>{
      this.initLinks(edges=>{
        console.log("Get Init Links invoked",edges)
        edges.forEach(edge=>{
          //edge.id = 'e'+edge.id
          console.log("edge",edge)
          this.globaledges.push({data:edge})
        })
        this.cy.initCy(this.globalnodes,this.globaledges,this.div.nativeElement,result=>{
          console.log("InitCY invoked ...")
          result.on('click','node',(evt) => {
            console.log("EVT",evt.target._private.data)
            this.dialog.open(NodeInfoComponent,{
              width: '500px',
              data:{
                component:evt.target._private.data
              }
            })
        })

        result.on('click','edge',(evt) => {
          console.log("EVT",evt.target._private.data)
          this.dialog.open(EdgeInfoComponent,{
            width: '500px',
            data:{
              component:evt.target._private.data
            }
          })
      })

    })
    })
  })
}
  showNodeProperty(){
    this.cytos.add({data:{id:'Bogor'}})
  }
  addNode(){

    this.dialog.open(AddBtsDialogComponent,{
      width:'500px',
      data:{
        title:'Add BTS'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        //
      }
    )
  }
  addLink(){
    this.dialog.open(AddLinkDialogComponent,{
      width:'500px',
      data:{
        title:'Add Link'
      }
    })
    .afterClosed()
    .subscribe(
      data => {}
    )
  }
  updateNode(){
    let id="Kentang",data={id:"OK"}
    this.cy.updateNode(id,data,result => {
      console.log("UpdateNode result",result)
    })
  }
}


