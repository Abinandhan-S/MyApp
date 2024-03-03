import { Component } from '@angular/core'

@Component({
    selector : 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
    // styles:[`
    // p{
    //     color:red;
    // }
    // `]
})
export class ServerComponent{
    ComponentName='Server'
    number : number=0
    serverStatus : string='Offline'
    serverNumber =Math.random()
   

    constructor(){
       this.serverStatus= this.serverNumber > .5 ? 'online' :'offline';
    }

    getComponentDetails(){
        return this.serverStatus;
    }

    serverStatusColor(){
      return this.serverStatus === 'online' ? 'green':'red';
    }

    
}