import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export default function ContactForm ({onSubmit}){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;

      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return 0;
    }
  };
 

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
        id: nanoid(),
        name,
        number,
      };
  
      onSubmit(newContact);
  };

    return (
      <form className={css.container} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            id={nameInputId}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
            id={numberInputId}
          />
        </label>
        <button className={css.btn} type="submit">Add contact</button>
      </form>
    );
  }

