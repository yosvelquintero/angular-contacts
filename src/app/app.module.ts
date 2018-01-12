
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '@app/app.component';
import { Constants } from '@app/app.constants';
import { ContactFormComponent } from '@app/component/contact';
import { LocalStorageService } from '@app/services/local-storage.service';
import { GuidService } from '@app/services/guid.service';
import { ContactService } from '@app/services/contact.service';
import { ContactModel } from '@app/models/contact.model';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    Constants,
    GuidService,
    LocalStorageService,
    ContactService,
    ContactModel,
    {
      provide: Window,
      useValue: window
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
