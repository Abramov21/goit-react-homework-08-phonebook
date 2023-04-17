import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthFormLogin from './AuthFormLogin/AuthFormLogin';
import AuthFormRegister from './AuthFormRegister/AuthFormRegister';
import { Nav } from './Nav/Nav';
import { getCurrentUser } from 'redux/contact/contactsOperations';
import { Contacts } from './Contacts/Contacts';
import { isAuther } from 'redux/Selection/Selection';
import s from './App.module.css';

const PrivetGroupe = ({ component, redirectTo = '/login' }) => {
  const isAuth = useSelector(isAuther);
  console.log(isAuth);
  return isAuth ? component : <Navigate to={redirectTo} />;
};

const PublickGroupe = ({ component, redirectTo = '/contacts' }) => {
  const isAuth = useSelector(isAuther);
  console.log(isAuth);
  return !isAuth ? component : <Navigate to={redirectTo} />;
};

export const App = () => {
  const dispatch = useDispatch();
  console.log(dispatch);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            path="/login"
            element={<PublickGroupe component={<AuthFormLogin />} />}
          />
          <Route
            path="/register"
            element={<PublickGroupe component={<AuthFormRegister />} />}
          />
          <Route
            path="/contacts"
            element={<PrivetGroupe component={<Contacts />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
