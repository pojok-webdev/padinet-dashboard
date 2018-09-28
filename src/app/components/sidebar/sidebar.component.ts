import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/tickets',title:'Tickets',icon:'theaters',class:''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  troubleshoot = 'active'
  sales = ''
  install = ''
  constructor(
      private activatedRoute: ActivatedRoute
  ) {
      console.log("Activated Route",this.activatedRoute.url)
  }
    resetMenus(){
        this.troubleshoot = ''
        this.sales = ''
        this.install = ''
    }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log("this menu items",this.menuItems)
    this.activatedRoute.queryParams.subscribe(queryParams => {
        // do something with the query params
        console.log("queryParams",queryParams)
	});

	this.activatedRoute.params.subscribe(routeParams => {
        //this.loadUserDetail(routeParams.id);
        console.log("RouteParams",routeParams)
	});
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  setActive(menu){
      console.log("you choose",menu)
      this.resetMenus()
      menu = 'active'
  }
}
