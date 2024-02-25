import React from "react";
import { Link } from "react-router-dom";

const Galery = () => {
  return (
    <div>
      <h1>Galéria</h1>
      <ul>
        <li><Link to="/galery/galery1">1</Link></li>
        <li><Link to="/galery/galery2">2</Link></li>
        <li><Link to="/galery/galery3">3</Link></li>
      </ul>
    </div>
  );
};

export default Galery;
