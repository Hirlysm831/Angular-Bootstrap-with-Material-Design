import {ButtonsModule} from '../../../dist';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule, ButtonsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}