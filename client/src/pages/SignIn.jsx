import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login, fetchUser } from '../http/userApi';
import { ADMIN_ROUTE } from '../utils/consts';

import { setUserData } from '../store/actions/setUserData';
import { setAuthTrue } from '../store/actions/setAuth';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const answer = await login(email, password);
    const { data } = await fetchUser(answer.id);

    dispatch(setUserData(data));
    dispatch(setAuthTrue());
    history(ADMIN_ROUTE);
  };
  return (
    <div className="sign-in">
      <h2 className="sign-up__header">Sign In</h2>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        name="createUser"
        className="sign-in__form"
      >
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input type="email" className="form__input" />

        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input type="password" className="form__input" />

        <input type="submit" value="Sign In" className="form__button" />

        <Link to="/">
          <span className="sign-in-button">Sign Up</span>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
