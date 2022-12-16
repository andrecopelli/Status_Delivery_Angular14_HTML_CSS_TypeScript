import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Component } from '@angular/core';


import { AppComponent } from './app.component';
import { AtualizadorComponent } from './atualizador/atualizador.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    AtualizadorComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
export class AppBootstrapModule {}
