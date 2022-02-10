import React from 'react';
import { useDispatch } from 'react-redux';

import { setOpenPanel } from '../store/actions/setOpenPanel';

const AdminTopPanel = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="right__profiles"
        onClick={() => dispatch(setOpenPanel('profiles'))}
      >
        Profiles
        <span className="profiles__icon"></span>
      </div>

      <div
        className="right__dashboard"
        onClick={() => dispatch(setOpenPanel('dashboard'))}
      >
        Dashboard
        <span className="dashboard__icon"></span>
      </div>
      <div
        className="right__users"
        onClick={() => dispatch(setOpenPanel('users'))}
      >
        Users
        <span className="users__icon"></span>
      </div>
    </>
  );
};

export default AdminTopPanel;
