import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { addContact } from "../../redux/operations";

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    const isNameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      alert("Contact with this name already exists in the phonebook.");
      return;
    }

    dispatch(addContact({ name: name, phone: phone }));
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        className="input-name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className="submit">Add contact</button>
    </form>
  );
}