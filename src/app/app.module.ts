import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './modules/shared/shared.module';
import {PublicModule} from './modules/public/public.module';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PublicModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {maxWidth: '100%', hasBackdrop: true, backdropClass: 'app-backdrop'}}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
