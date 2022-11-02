import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularOutputComponent } from './angular-output/angular-output.component';
import { ReactInputComponent } from './react-input/react-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularOutputComponent,
    ReactInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
