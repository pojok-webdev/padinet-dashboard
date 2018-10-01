import { Injectable } from '@angular/core';

@Injectable()
export class AppvarService {
  host = '192.168.0.117'
  host_ = 'localhost'
  port = '1948'
  server = 'http://'+this.host+':'+this.port+'/'
  dashboardHost = '192.168.0.117'
  dashboardPort = '1945'
  dashboardServer = 'http://'+this.dashboardHost+':'+this.dashboardPort+'/'
  constructor() { }
  salesAdminHost = 'localhost'
  salesAdminPort = '2019'
  salesAdminServer = 'http://'+this.salesAdminHost+':'+this.salesAdminPort+'/'
}
