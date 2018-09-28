import { Injectable } from '@angular/core';

@Injectable()
export class AppvarService {
  hostx = '192.168.0.117'
  host = 'localhost'
  port = '1948'
  server = 'http://'+this.host+':'+this.port+'/'
  dashboardHost = 'localhost'
  dashboardPort = '1945'
  dashboardServer = 'http://'+this.dashboardHost+':'+this.dashboardPort+'/'
  constructor() { }

}
