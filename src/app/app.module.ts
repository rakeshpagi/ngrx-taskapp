import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AngularUsestateModule, API_ENDPOINT } from 'angular-usestate';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularUsestateModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: API_ENDPOINT,
      useValue: 'http://localhost:3333/api',
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
