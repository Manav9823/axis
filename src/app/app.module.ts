import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog'
import { ButtonModule } from 'primeng/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AxisViewComponentComponent } from './axis-view-component/axis-view-component.component';
import { AxisParentComponentComponent } from './axis-parent-component/axis-parent-component.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { CookieBannerParentComponent } from './cookie-banner-parent/cookie-banner-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    AxisViewComponentComponent,
    AxisParentComponentComponent,
    CookieBannerComponent,
    CookieBannerParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
