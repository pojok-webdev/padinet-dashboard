import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  allsales = [
    {"name":"amir"},
    {name:"aris"},
    {name:"ayu"},
    {name:"dwi"},
    {name:"dhita"},
    {name:"yudhi"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
