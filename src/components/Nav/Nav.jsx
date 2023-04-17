import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isAuther } from 'redux/Selection/Selection';
import s from './Nav.module.css';

const { NavLink, Link, Outlet } = require('react-router-dom');

export const Nav = () => {
  const isAuth = useSelector(isAuther);
  console.log(isAuth);
  return (
    <>
      <div className={s.box}>
        <Link className={s.link} to="/:phonebook">
          Phonebook APP
        </Link>
        <div className={s.button__group}>
          {!isAuth ? (
            <NavLink to="/register" className={s.link}>
              Register
            </NavLink>
          ) : null}
          {isAuth ? (
            <NavLink to="/contacts" className={s.link}>
              Contacts
            </NavLink>
          ) : null}

          {!isAuth ? (
            <NavLink to="/login" className={s.link}>
              LogIn
            </NavLink>
          ) : null}
        </div>
        <div>{isAuth ? <UserMenu /> : null}</div>
      </div>
      <Outlet />
    </>
  );
};
