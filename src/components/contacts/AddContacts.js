import React, { useState } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/Action/action";
import shortid from "shortid";
import { useHistory } from "react-router";

const AddContacts = () => {
  let history = useHistory();
  const [name, SetName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const createContact = (e) => {
    e.preventDefault();
    console.log(name, phone, email);

    const new_contact = {
      _id: shortid.generate(),
      name: name,
      phone: phone,
      email: email,
    };

    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              placeholder="Enter Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
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
  );
};

export default AddContacts;
