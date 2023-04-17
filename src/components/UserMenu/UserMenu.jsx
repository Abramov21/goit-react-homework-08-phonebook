import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/contact/contactsOperations';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.email);

  return (
    <div className={s.box__menu}>
      <p className={s.text}>{email}</p>
      <button className={s.btn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
