import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',

  // selector:'[app-servers]',//App-server component we can use like attributes like this

  // selector:'.app-servers',//App-server component we can use like class name like this

  templateUrl: './servers.component.html',
  
  // template: '<app-server></app-server>',

  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
 componentname='Servers'
}
