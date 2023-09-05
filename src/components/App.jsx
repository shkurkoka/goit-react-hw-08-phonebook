import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {ContactForm} from "./phoneBook/ContactForm";
import {ContactList} from "./phoneBook/ContactList";
import {Filter} from "./phoneBook/Filter";
import "./phoneBook/phonebook.css";
import { getError, getIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="first-wrap">
        <h1>Phonebook</h1>
        <ContactForm/>
      </div>
      {
        isLoading && !error && <b>Request in progress...</b>
      }
        <div className="second-wrap">
          <h2>Contacts</h2>
          <Filter/>
          <ContactList/>
        </div>
      </div>
  );
}
