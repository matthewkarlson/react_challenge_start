import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <select name={name} onChange={onChange} defaultValue='No Contact Selected'>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
