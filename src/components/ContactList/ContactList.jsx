import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList ({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <span className={css.contact__item}>{name}: </span>
          <span className="contact__item">{number} </span>
          <button
            className={css.contacts__button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
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
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};
