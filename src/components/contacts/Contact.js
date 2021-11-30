import React from "react";
import Avatar from "react-avatar";
import "../../App.css";

const Contact = ({ contact }) => {
  const { name, email, phone } = contact;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-lebel"></label>
        </div>
      </td>
      <td>
        <Avatar
          name={name}
          size="40"
          round={true}
          style={{ marginRight: "7px" }}
        />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action">
        <a href="#">
          <span className="material-icons ">edit</span>
        </a>
        <a href="">
          <span className="material-icons text-danger">remove_circle</span>
        </a>
      </td>
    </tr>
  );
};

export default Contact;
