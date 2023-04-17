// import { useDispatch, useSelector } from 'react-redux';
import { singUpUser } from 'redux/contact/contactsOperations';
import s from './AuthFormRegister.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AuthFormRegister = ({ onSubmit, btnSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.isAuth);
  //   const isAuth = useSelector(selectIsAuth);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(singUpUser(form));
    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Username
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Email
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Register
      </button>
    </form>
  );
};

export default AuthFormRegister;
