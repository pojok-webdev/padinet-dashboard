import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
/*import {
  AgmCoreModule
} from '@agm/core';*/
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ShowNodePropertyDialogComponent } from './show-node-property-dialog/show-node-property-dialog.component';
import { PadiCytoscape } from 'padicytoscape';
import { MatDialogModule, MatInputModule, MatSelectModule, MatTabsModule, MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { NodeService } from './node.service';
import { EdgeService } from './edge.service';
import { AppvarService } from './appvar.service';
import { AddLinkDialogComponent } from './add-link-dialog/add-link-dialog.component';
import { AddBtsDialogComponent } from './add-bts-dialog/add-bts-dialog.component';
import { EdgeInfoComponent } from './edge-info/edge-info.component';
import { NodeInfoComponent } from './node-info/node-info.component';
import { TicketService } from './ticket.service';
import { SurveyService } from './survey.service';
import { InstallService } from './install.service';
import { TroubleshootService } from './troubleshoot.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    AppRoutingModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })*/
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ShowNodePropertyDialogComponent,
    AddLinkDialogComponent,
    AddBtsDialogComponent,
    EdgeInfoComponent,
    NodeInfoComponent,
  ],
  entryComponents:[EdgeInfoComponent,NodeInfoComponent,AddLinkDialogComponent,AddBtsDialogComponent],
  providers: [
    PadiCytoscape,
    NodeService,
    EdgeService,
    AppvarService,
    TicketService,
    SurveyService,
    InstallService,
    TroubleshootService,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
