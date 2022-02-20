import { LightningElement, wire, api, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';

export default class ContactList extends LightningElement {
    columns = [
        { label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text'},
        { label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text'},
        { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'text'}
    ];

    @wire(getContacts)
    contacts;
   /* @track
    errors;
    @track
    contacts;*/

    /*connectedCallback(){
        getContacts({})
            .then(contacts => {
               this.contacts = contacts;
            })
            .catch(error => {
               this.errors = reduceErrors(error); // code to execute if the promise is rejected
            });
        }*/

        get errors() {
            return (this.contacts.error) ?
                reduceErrors(this.contacts.error) : [];
        }
}