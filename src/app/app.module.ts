import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownDirective } from './dropdown.directive';
import { SetTopOffsetDirective } from './set-top-offset.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownDirective,
    SetTopOffsetDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
