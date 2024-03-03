import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningalertcomponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { databindingComponent } from './databinding/databinding.component';
import { PropertyDataBindingComponent } from './property-data-binding/property-data-binding.component';
import { DirectivecomponentComponent } from './directivecomponent/directivecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    warningalertcomponent,
    SuccessalertComponent,
    databindingComponent,
    PropertyDataBindingComponent,
    DirectivecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
