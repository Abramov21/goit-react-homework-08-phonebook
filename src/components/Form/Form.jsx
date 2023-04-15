import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Form.module.css';
import { addContacts } from 'components/Redux/contact/contactsOperations';

export const Form = () => {
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state?.contacts);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setForm(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        item => item.name.toLocaleLowerCase() === form.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${form.name}  is olrady in contacts`);
    }

    dispatch(addContacts(form));

    resetForm();
  };

  const resetForm = () => {
    setForm({ name: '', number: '' });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={s.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Number:
        <input
          className={s.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={form.number}
          onChange={handleInputChange}
        />
      </label>
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
