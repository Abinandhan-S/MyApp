import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:[`
  h1{
    color:blue
  }
  h2{color:red}`]
})
export class AppComponent {
  title = 'Myfirstapp';
  name='Abinandhan';

  

  clkToShowBasic(){
    document.getElementById('showBasic').style.display='block';
    document.getElementById('showdirective').style.display='none';
  }
  dblclkToHideBasic(){
    document.getElementById('showBasic').style.display='none';
  }

  clkToShowDir(){
    document.getElementById('showdirective').style.display='block';
    document.getElementById('showBasic').style.display='none';
  }
  dblclkToHideDir(){
    document.getElementById('showdirective').style.display='none';
  }
}
