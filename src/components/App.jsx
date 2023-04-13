import React, {Component} from 'react';
import Section from './Section/Section';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
export class App extends Component{
  constructor(){
    super();
  this.state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
}
handleSubmit = (name, number) => {
  const newContact = {
    id: nanoid(),
    name: name,
    number: number,
  };
  const { contacts } = this.state;
  this.setState(({contacts}) => ({contacts:[newContact, ...contacts]}));
  if (contacts.map(e => e.name.toLowerCase()).includes(name.toLowerCase())) {
    return alert(`${name} is already in contacts`);
  }
  // if(contacts.map(contact => contact.name.toLowerCase()).includes(name.toLowerCase())){
  //   return alert(`${name} is already in contacts`)
  // }
};

handleChange = evt => {
  this.setState({ filter: evt.currentTarget.value.toLowerCase() });
};


render() {
  const { filter, contacts } = this.state;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
    );
    return (
      <>
      <Section title="Phonebook">
        <PhoneBook onSubmit={this.handleSubmit}/>
      </Section>
      <Section title="Contacts">
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.handleChange}/>
          )}
          {contacts.length === 0}
        <Contacts contacts={filteredContacts}/>
      </Section>
      </>
      );
    }
  }
  
  
  
  // const form = e.currentTarget;
  // // console.log(form);
  // const name = form.elements.name.value;
  // const id = nanoid();
  // const number = form.elements.number.value;
  // const newContact = {name, id, number};
  
  
  
  // const newContact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    // e.preventDefault();
    
    
    
    // console.log(newContact);
    // form.reset();
