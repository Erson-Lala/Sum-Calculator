import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component'
  // import {DirectiveListen } from './app.component';
import { AddService } from './add.service';

@NgModule({
  declarations: [
    AppComponent, 
    // DirectiveListen
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
