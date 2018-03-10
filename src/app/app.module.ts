import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  /**
   *  Import all the modules the main Module needs to bootstrap
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /**  @Important
     - Angular material needs hammerjs -> import to apps entry point -> src/main.ts
     - Angular material has prebuilt themes -> need import them to styles.css - not component.css
     */
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
