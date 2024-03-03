import { Component } from '@angular/core';

@Component({
  selector: 'app-directivecomponent',
  templateUrl: './directivecomponent.component.html',
  styleUrls: ['./directivecomponent.component.css']
})
export class DirectivecomponentComponent {
  directiveMessage1='write something';
  directiveMessage2='';
  directiveTemplateMessage ='';
  directiveEnable=false;
  directiveCalling(){
    this.directiveEnable=true;
    this.directiveTemplateMessage='Firstname:-'+this.directiveMessage1+' '+'Surname:-'+ this.directiveMessage2;
  }
  resetCalling(){
    this.directiveEnable=false;
    this.directiveMessage1='';
    this.directiveMessage2='';
  }

  // serverName variable refering the server.component file replicate in how many times push to servers = [] array
  serverName =''
  servers=[]
  addServer(){
    return this.servers.push(this.serverName);
  }

  log=[]
  clickShow(){
    this.log.push(this.log.length+1)
  }


}
