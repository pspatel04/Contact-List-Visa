import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setLName(contact.lname);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      lname: lname,
      phone: phone,
      email: email,
    });

    dispatch(updateContact(update_contact));
    history.push("/")
  };
  return (
    <div class="container">
      <div className="py-4">
        <div className="column">
        <div className="card border-0 shadow">
      <div className="card-header"><b><h5>Update a Contact</h5></b></div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
        </div>
        </div>
        </div>
   
  );
};

export default EditContact;
