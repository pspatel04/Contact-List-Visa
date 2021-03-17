import React from "react";
import { useSelector} from "react-redux";
import Contact from "./Contact";



const Contacts = () => {
  
  const contacts = useSelector((state) => state.contact.contacts);
  

  

  return (
    <div> 
      <div className="container">
    <div className="py-4">
      <div className="row">
      {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id}  />
          ))}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Contacts;
