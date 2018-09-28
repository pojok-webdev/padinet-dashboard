import { Component, OnInit } from '@angular/core';
import { TroubleshootService } from '../troubleshoot.service';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-troubleshoots',
  templateUrl: './troubleshoots.component.html',
  styleUrls: ['./troubleshoots.component.scss']
})
export class TroubleshootsComponent implements OnInit {
  troubleshootdaily = [{name:'',val:''},{name:'',val:''},{name:'',val:''},{name:'',val:''},{name:'',val:''}]
  troubleshootquarterly = this.troubleshootdaily
  troubleshootyearly = this.troubleshootdaily
  troubleshootmonthly = this.troubleshootdaily
  troubleshootweekly = this.troubleshootdaily
  constructor(
    private troubleshootservice:TroubleshootService,
    private sidebar: SidebarComponent
  ) {
    this.sidebar.setActive(this.sidebar.troubleshoot)
    this.troubleshootservice.troubleshootdaily(result => {
      this.troubleshootdaily = result
    })
    this.troubleshootservice.troubleshootweekly(result => {
      this.troubleshootweekly = result
    })
    this.troubleshootservice.troubleshootmonthly(result => {
      this.troubleshootmonthly = result
    })
    this.troubleshootservice.troubleshootquarterly(result => {
      this.troubleshootquarterly = result
    })
    this.troubleshootservice.troubleshootyearly(result => {
      this.troubleshootyearly = result
    })

  }

  

  ngOnInit() {
  }

}
