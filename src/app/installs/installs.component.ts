import { Component, OnInit } from '@angular/core';
import { InstallService } from '../install.service';

@Component({
  selector: 'app-installs',
  templateUrl: './installs.component.html',
  styleUrls: ['./installs.component.scss']
})
export class InstallsComponent implements OnInit {
  installdaily = [{name:'',val:''},{name:'',val:''},{name:'',val:''},{name:'',val:''},{name:'',val:''}]
  installquarterly = this.installdaily
  installyearly = this.installdaily
  installmonthly = this.installdaily
  installweekly = this.installdaily

  constructor(
    private installservice : InstallService
  ) {
    this.installservice.installdaily(result => {
      this.installdaily = result
    })
    this.installservice.installweekly(result => {
      this.installweekly = result
    })
    this.installservice.installmonthly(result => {
      this.installmonthly = result
    })
    this.installservice.installquarterly(result => {
      this.installquarterly = result
    })
    this.installservice.installyearly(result => {
      this.installyearly = result
    })

  }

  ngOnInit() {
  }

}
