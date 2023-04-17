import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import PhoneBookList from 'components/PhoneBookList/PhoneBookList';
import { Form } from '../Form/Form';
import { isLoading } from 'redux/Selection/Selection';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const isLoadin = useSelector(isLoading);
  console.log('contacts');
  return (
    <>
      <Form />
      <Filter />
      {isLoadin && <Loader />}
      <PhoneBookList />
    </>
  );
};
