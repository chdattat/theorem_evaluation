import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonsComponent } from './components/persons/persons.component';
import { CoreModule } from '../core/components/core.module';
import { PersonComponent } from './components/person/person.component';
import { PersonsService } from './services/persons.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonCvComponent } from './components/person-cv/person-cv.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PersonsComponent,
    PersonComponent,
    PersonCvComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [PersonsComponent],
  providers: [PersonsService],
})
export class CVModule {}
