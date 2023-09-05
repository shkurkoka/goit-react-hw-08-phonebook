import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contactsSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };
  
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        onChange={(evt) => handleFilterChange(evt.target.value)}
      />
    </div>
  );
};