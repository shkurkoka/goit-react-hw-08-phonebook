import React from "react";
import {ContactItem} from "./ContactItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/contacts/contactsSlice";

export const ContactList = () => {

  let contacts = useSelector(getContacts);
  let filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase() || "")
    );
  }


  return (
    <ul className="contact-list">
      {getFilteredContacts().map(contact => (
        <li key={contact.id} className="contact-list-item">
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};