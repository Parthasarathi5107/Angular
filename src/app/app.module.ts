import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { TaskcomponentComponent } from './taskcomponent/taskcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    // MaincomponentComponent,
    TaskcomponentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
