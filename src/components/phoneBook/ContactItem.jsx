import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{contact.name}: {contact.phone}</span>
      <button className="delete" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
};