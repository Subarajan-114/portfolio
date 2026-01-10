import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { HomePage } from './home-page/home-page';
import { Footer } from './footer/footer';
import { Education } from './education/education';
import { Experience } from './experience/experience';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    HomePage,
    Footer,
    Education,
    Experience
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,              
    ReactiveFormsModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
