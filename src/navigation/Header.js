import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Header.css';


const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>/
      </li>
      <li>
        <Link to="/admin">Admin </Link>/
      </li>
    
      <li>
        <Link to="/add">Add </Link>/
      </li>
      <li>
        <Link to="/cart">Cart </Link>/
      </li>
    </ul>
    <hr />
  </nav>
);
export default Header;