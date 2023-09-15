import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span className="contact-list-item-text">{contact.name}: {contact.number}</span>
      <button className="delete" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
};