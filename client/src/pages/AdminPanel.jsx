import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AdminTopPanel from '../components/AdminTopPanel';
import Profiles from '../components/Profiles';
import Dashboard from '../components/Dashboard';
import Users from '../components/Users';

import { setAuthFalse } from '../store/actions/setAuth';
import { setOpenPanel } from '../store/actions/setOpenPanel';
import { LOGIN_ROUTE } from '../utils/consts';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  let role = useSelector((state) => state.userReducer.role);
  let userName = useSelector((state) => state.userReducer.userName);
  let openPanel = useSelector((state) => state.openPanelReducer.openPanel);

  const handleLogOut = () => {
    dispatch(setAuthFalse());
    dispatch(setOpenPanel('profiles'));
    history(LOGIN_ROUTE);
    localStorage.removeItem('token');
  };
  return (
    <>
      <header className="header">
        <div className="header__left">
          {role === 'ADMIN' ? (
            <span className="left__admin-avatar"></span>
          ) : (
            <span className="left__user-avatar"></span>
          )}

          <p className="left__user-name">{userName}</p>
        </div>

        <div className="header__right">
          {role === 'ADMIN' && <AdminTopPanel />}

          <input
            type="button"
            className="right__button"
            onClick={() => handleLogOut()}
            value="Log out"
          />
        </div>
      </header>

      <div className="main-container">
        {role === 'USER' && (
          <>
            <Profiles />
          </>
        )}
        {role === 'ADMIN' && openPanel === 'profiles' && (
          <>
            <Profiles />
          </>
        )}
        {role === 'ADMIN' && openPanel === 'dashboard' && (
          <>
            <Dashboard />
          </>
        )}
        {role === 'ADMIN' && openPanel === 'users' && (
          <>
            <Users />
          </>
        )}
      </div>
    </>
  );
};

export default AdminPanel;
