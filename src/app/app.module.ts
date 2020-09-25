import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/components/core.module';
import { CVModule } from './cv/cv.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CVModule,
    SharedModule,
  ],
  exports: [CoreModule, CVModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
