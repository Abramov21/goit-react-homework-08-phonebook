import React from 'react';
import PhoneBookList from './PhoneBookList';
import { Form } from './Form/Form';
import Filter from './Filter';
import { useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(state => state?.isLoading);
  return (
    <>
      <Form />
      <Filter />
      {isLoading && <Loader />}
      <PhoneBookList />
    </>
  );
};
