import React, {useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [contacts,setContacts] = useState(props.contacts);

  const duplicateCheck = (name) => {
   
   // Using .some(), check if the contact name already exists in the contacts array
   return props.contacts.some(contact => contact.name === name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!duplicateCheck(name)){
      props.addContact(name,phone,email);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      window.alert("This is a duplicated contact!!!")
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name ={name} phone ={phone} email = {email} setName={setName} setEmail={setEmail} setPhone ={setPhone} handleSubmit={handleSubmit}  />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items = {props.contacts}/>
      </section>
    </div>
  );
};
