import { Component, OnInit, inject } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsService = inject(ContactsService);
  contactos:Contacto[] = []

  ngOnInit(): void {
    this.contactsService.getAll().then(res => {
      this.contactos = res;
    })
  }


}