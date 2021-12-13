import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.scss";
const ContactList = ({ contacts, delet }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button className={s.btn} onClick={() => delet(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
export default ContactList;
