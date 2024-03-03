import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-data-binding',
  templateUrl: './property-data-binding.component.html',
  styleUrls: ['./property-data-binding.component.css']
})
export class PropertyDataBindingComponent {

  allowButtonEnabled = false;
  constructor(){
    setTimeout(()=>{
      this.allowButtonEnabled=true;
    },5000)
  }
  fnClick(){
    document.getElementById('demo').style.display='block';
  }
  fnDblClick(){
    document.getElementById('demo').style.display='none';
  }

  dayStatus='Good morning';
  messageOfDay='Good Day';
  fnDay(){
    this.dayStatus='Good Night';
    this.messageOfDay= 'Good Sleep';
    document.getElementById('demo1').style.color='Blue';
  }

  messageForTemplate='';
  resetMessage='';
  messageInTemplate='Here is ur message....';
  
  messageToTemplate(event: Event){
    console.log(this.messageForTemplate);
    
    this.messageForTemplate =(<HTMLInputElement>event.target).value;
  }

  allowButtonEnabled1 = '';

  fnMsg(){
    return this.messageInTemplate+=this.messageForTemplate+' ';
  }

  fnClick1(){
    document.getElementById('demo2').style.display='block';
    
  }
  fnDblClick1(){
    document.getElementById('demo2').style.display='none';
  }
}
