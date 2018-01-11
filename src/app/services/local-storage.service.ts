import { Injectable } from '@angular/core';

import { GlobalConstant } from '@app/app.constants';
import { ContactModel } from '@app/models/contact.model';

@Injectable()
export class LocalStorageService {

  constructor(private window: Window) { }

  public storeContact(contact: ContactModel): void {
    const contacts: Array<ContactModel> = this.loadContacts();
    contact.id = Math.random().toString(36).substr(2, 9);
    const data =  [].concat([contact], contacts);
    this.setItem(GlobalConstant.CONTACTS, JSON.stringify(data));
  }

  public loadContacts(): Array<ContactModel> {
    const data = this.getItem(GlobalConstant.CONTACTS);
    return data ? JSON.parse(data) : [];
  }

  public destroyContact(id: string): void {
    const contacts = this.loadContacts();
    const data =  contacts.filter(contact => contact.id !== id);
    this.setItem(GlobalConstant.CONTACTS, JSON.stringify(data));
  }

  private getItem(name: string): string {
    return this.window.localStorage.getItem(name);
  }

  private setItem(name: string, data: string): void {
    this.window.localStorage.setItem(name, data);
  }

  private removeItem(name: string): void {
    this.window.localStorage.removeItem(name);
  }

}
