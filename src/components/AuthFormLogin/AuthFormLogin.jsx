import { useDispatch } from 'react-redux';
import s from './AuthFormLogin.module.css';
import { useState } from 'react';
import { login } from 'redux/contact/contactsOperations';

const AuthFormLogin = ({ onSubmit, btnSubmit }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  };

  const formSubmit = event => {
    event.preventDefault();
    dispatch(login(form));
    resetForm();
  };

  const resetForm = () => {
    setForm({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={formSubmit} className={s.form}>
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
        Log in
      </button>
    </form>
  );
};

export default AuthFormLogin;
