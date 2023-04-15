import axios from 'axios';
// https://643583a883a30bc9ad62eeb3.mockapi.io/contacts
axios.defaults.baseURL = 'https://643583a883a30bc9ad62eeb3.mockapi.io/contacts';

export const getContactApi = () => {
  return axios.get('').then(
    ({ data }) => data
    // console.log(data)
  );
};

export const addContactApi = contact => {
  return axios.post('', contact).then(({ data }) => {
    return data;
  });
};

export const deleteContactApi = id => {
  return axios.delete(`/${id}`).then(() => id);
};
