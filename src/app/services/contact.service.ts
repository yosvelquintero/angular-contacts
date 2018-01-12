import { Injectable } from '@angular/core';

import { Constants } from '@app/app.constants';
import { GuidService } from '@app/services/guid.service';
import { LocalStorageService } from '@app/services/local-storage.service';
import { ContactModel } from '@app/models/contact.model';

@Injectable()
export class ContactService {

  constructor(
    private guidService: GuidService,
    private localStorageService: LocalStorageService
  ) { }

  public store(contact: ContactModel) {
    const contacts: Array<ContactModel> = this.load();
    contact.id = this.guidService.generateId();
    const data =  [].concat([contact], contacts);
    this.localStorageService.setItem(Constants.CONTACTS, JSON.stringify(data));
  }

  public load(): Array<ContactModel> {
    const data = this.localStorageService.getItem(Constants.CONTACTS);
    return data ? JSON.parse(data) : [];
  }

  public destroy(id: string): void {
    const contacts = this.load();
    const data =  contacts.filter(contact => contact.id !== id);
    this.localStorageService.setItem(Constants.CONTACTS, JSON.stringify(data));
  }

}
