import { Component} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private iconRegistry : MatIconRegistry,
    private sanitizer : DomSanitizer
  ){
    this.iconRegistry
    .addSvgIcon(
      'backbutton',this.sanitizer.bypassSecurityTrustResourceUrl("./assets/baseline-backspace-24px.svg")
    )
    this.iconRegistry
    .addSvgIcon(
      "graphview",this.sanitizer.bypassSecurityTrustResourceUrl("assets/baseline-group_work-24px.svg")
    )
    this.iconRegistry
    .addSvgIcon(
      "tableview",this.sanitizer.bypassSecurityTrustResourceUrl("assets/baseline-view_headline-24px.svg")
    )
    this.iconRegistry
    .addSvgIcon(
      "table2view",this.sanitizer.bypassSecurityTrustResourceUrl("assets/baseline-view_module-24px.svg")
    )

  }
}
