import { Injectable } from '@angular/core';

import { LocalStorageService } from '@app/services/local-storage.service';
import { ContactModel } from '@app/models/contact.model';

@Injectable()
export class ContactService {

  constructor(private localStorageService: LocalStorageService) { }

  public store(contact: ContactModel) {
    this.localStorageService.storeContact(contact);
  }

  public load(): Array<ContactModel> {
    return this.localStorageService.loadContacts();
  }

  public destroy(id: string): void {
    this.localStorageService.destroyContact(id);
  }

}
