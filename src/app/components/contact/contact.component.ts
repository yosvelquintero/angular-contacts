import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '@app/services/contact.service';
import { ContactModel } from '@app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;
  public name: FormControl;
  public address: FormControl;
  public allContacts: Array<ContactModel>;

  public constructor(private contactService: ContactService) {}

  public ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.allContacts = this.loadContacts();
  }

  public submitForm(data: ContactModel) {
    this.contactService.store(data);
    this.allContacts = this.loadContacts();
    this.form.reset();
  }

  public destroyContact(id: string): void {
    this.contactService.destroy(id);
    this.allContacts = this.loadContacts();
  }

  private loadContacts(): Array<ContactModel> {
    return this.contactService.load();
  }

  private createFormControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]);
    this.address = new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]);
  }

  private createForm() {
    this.form = new FormGroup({
      name: this.name,
      address: this.address
    });
  }
}

