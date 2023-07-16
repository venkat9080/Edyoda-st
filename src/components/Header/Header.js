import React, { useState } from "react";
import "./header.css";


const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <h3 className="logo">Edyoda</h3>
            <span className="stories">Stories</span>
          </li>
        </ul>
        <ul>
          <li className="tagline">
            EdYoda is free learning and knowledge
            <br /> sharing platform for techies
          </li>
          <li>
            <button className="navbtn">Go To Main Website</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;