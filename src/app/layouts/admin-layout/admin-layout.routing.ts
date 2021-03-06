import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { InfrastructureComponent } from '../../infrastructure/infrastructure.component';
import { TicketsComponent } from '../../tickets/tickets.component';
import { SurveysComponent } from '../../surveys/surveys.component';
import { InstallsComponent } from '../../installs/installs.component';
import { TroubleshootsComponent } from '../../troubleshoots/troubleshoots.component';
import { SalesComponent } from '../../sales/sales.component';
import { TableviewComponent } from '../../tableview/tableview.component';
import { AdminVisitComponent } from '../../admin-visit/admin-visit.component';
import { AdminVisitsComponent } from '../../admin-visits/admin-visits.component';
import { AdminOffersComponent } from '../../admin-offers/admin-offers.component';
import { AdminAddOfferComponent } from '../../admin-add-offer/admin-add-offer.component';
import { AdminAddVisitComponent } from '../../admin-add-visit/admin-add-visit.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path:'infrastructure',component:InfrastructureComponent},
    {path:'tableview',component:TableviewComponent},
    {path:'tickets',component:TicketsComponent},
    {path:'surveys',component:SurveysComponent},
    {path:'installs',component:InstallsComponent},
    {path:'troubleshoots',component:TroubleshootsComponent},
    {path:'sales',component:SalesComponent},
    {path:'adminvisit',component:AdminVisitComponent},
    {path:'adminvisits',component:AdminVisitsComponent},
    {path:'adminoffers',component:AdminOffersComponent},
    {path:'admin-add-offer',component:AdminAddOfferComponent},
    {path:'admin-add-visit',component:AdminAddVisitComponent}
];
