import React from 'react';

import { fetchUsers } from '../http/userApi';

const Dashboard = () => {
  const amount = fetchUsers();
  console.log(amount);
  return (
    <div className="dashboard">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="dashboard__main">
        <div className="users-amount"></div>
        <div className="profiles-amount"></div>
        <div className="over18-amount"></div>
      </div>
    </div>
  );
};

export default Dashboard;
