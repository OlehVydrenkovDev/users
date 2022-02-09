import React from 'react';
import { useSelector } from 'react-redux';

const AdminPanel = () => {
  let role = useSelector((state) => state.userReducer.role);
  return (
    <>
      <header className="header">
        <div className="header__left">
          {role === 'ADMIN' ? (
            <span className="left__admin-avatar"></span>
          ) : (
            <span className="left__user-avatar"></span>
          )}

          <p className="left__user-name">UserName</p>
        </div>

        <div className="header__right">
          {role === 'ADMIN' && (
            <>
              <div className="right__profiles">
                Profiles
                <span className="profiles__icon"></span>
              </div>

              <div className="right__dashboard">
                Dashboard
                <span className="dashboard__icon"></span>
              </div>
              <div className="right__users">
                Users
                <span className="users__icon"></span>
              </div>
            </>
          )}

          <input type="button" className="right__button" value="Log out" />
        </div>
      </header>
    </>
  );
};

export default AdminPanel;
