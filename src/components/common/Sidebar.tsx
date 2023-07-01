// components/Sidebar.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Team Management</Link>
        </li>
        <li>
          <Link to="/cardsale">Card Sale</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
