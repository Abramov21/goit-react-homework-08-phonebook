import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { change } from 'components/Redux/contact/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state?.filter);
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <h1>Contacts:</h1>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="name"
          value={filter}
          onChange={e => dispatch(change(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
