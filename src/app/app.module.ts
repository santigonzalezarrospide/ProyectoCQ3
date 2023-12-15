import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LandingPageComponent } from './core/layout/landing-page/landing-page.component';
import { NavBarComponent } from './core/layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
