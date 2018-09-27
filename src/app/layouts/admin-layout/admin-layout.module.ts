import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatTableModule,
  MatTabsModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';
import { TicketsComponent } from '../../tickets/tickets.component';
import { SurveysComponent } from '../../surveys/surveys.component';
import { InstallsComponent } from '../../installs/installs.component';
import { TroubleshootsComponent } from '../../troubleshoots/troubleshoots.component';
import { SalesComponent } from '../../sales/sales.component';
import { InfrastructureComponent } from '../../infrastructure/infrastructure.component';
import { TableviewComponent } from '../../tableview/tableview.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    InfrastructureComponent,
    TableviewComponent,
    TicketsComponent,
    SurveysComponent,
    InstallsComponent,
    TroubleshootsComponent,
    SalesComponent
  ]
})

export class AdminLayoutModule {}
