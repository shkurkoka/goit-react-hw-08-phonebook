import React from "react";
import {ContactItem} from "./ContactItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";

export const ContactList = () => {

  let contacts = useSelector(getContacts);
  let filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase() || "")
    );
  }


  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};