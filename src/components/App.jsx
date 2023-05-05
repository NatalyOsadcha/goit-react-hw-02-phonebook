import React, { Component } from 'react';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid'


class App extends Component {
  state = {
  contacts: [],
  name: '',
  number: ''
}
  
  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };
     this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }
  render() {
    const { contacts} = this.state;
    return (
      <>
        <h2>Phonebook</h2>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Contacts contacts={contacts} />
    </>
  );
};
  }

export default App;
