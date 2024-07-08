import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7b0-hzfSqy2Na3TBVryC7N9M6dwPLZpaukg&s" alt="" />
      </div>
      <NavLink to="/loads" activeClassName="active-link">Loads</NavLink>
      <NavLink to="/statements" activeClassName="active-link">Statements</NavLink>
      <NavLink to="/transactions" activeClassName="active-link">Transactions</NavLink>
      <div className="logout">Logout</div>
    </div>
  );
};

export default Sidebar;
