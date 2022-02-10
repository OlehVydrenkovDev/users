import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './components/AppRouter';

import { check } from './http/userApi';

import { setUserData } from './store/actions/setUserData';
import { setAuthTrue } from './store/actions/setAuth';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    check().then(({ data }) => {
      dispatch(setUserData(data.id));
      dispatch(setAuthTrue());
    });
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
