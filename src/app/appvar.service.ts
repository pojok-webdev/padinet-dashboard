import { Injectable } from '@angular/core';

@Injectable()
export class AppvarService {
  host = '192.168.0.117'
  port = '1948'
  server = 'http://'+this.host+':'+this.port+'/'
  constructor() { }

}
