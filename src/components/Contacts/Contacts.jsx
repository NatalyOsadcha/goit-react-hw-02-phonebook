import React from 'react';
import css from './Contacts.module.css';
import ContactsItem from './ContactsItem';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

Contacts.protoTypes = {
  contacts: PropTypes.array,
}

export default Contacts;
