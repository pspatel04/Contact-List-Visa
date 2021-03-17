import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      lname: lname,
      phone: phone,
      email: email,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div class="container">
      <div className="py-4">
        <div className="column">
        <div className="card border-0 shadow">
      <div className="card-header"><b><h5>Add a Contact</h5></b></div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="form-group">
          <label class="control-label" for="fname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="Enter Your First Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
          <label class="control-label" for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              className="form-control"
              placeholder="Enter Your Last Name"
              required
              value={lname}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>

         
         
          <div className="form-group">
          <label class="control-label" for="phone">Phone number (format: 123-456-7890)</label>
            
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              className="form-control"
              placeholder="Enter Your Phone Number "
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label class="control-label" for="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
        </div>
      </div>
    </div>
    
  );
};

export default AddContact;
