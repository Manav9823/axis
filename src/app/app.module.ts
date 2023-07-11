import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AxisViewComponentComponent } from './axis-view-component/axis-view-component.component';
import { AxisParentComponentComponent } from './axis-parent-component/axis-parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AxisViewComponentComponent,
    AxisParentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
