import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { App2019Component } from './2019/app.component';
import { App2020Component } from './2020/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    App2019Component,
    App2020Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
