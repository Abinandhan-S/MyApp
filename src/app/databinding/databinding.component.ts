import { Component } from '@angular/core'

@Component({
    selector : 'app-databinding',
    templateUrl: './databinding.component.html',
    styles:[`
    p{
        color:darkviolet;
    }
    `]
})
export class databindingComponent{
    ComponentName='Databinding';
    number=10

    getComponentDetails(){
        return this.ComponentName;
    }

}