import React from "react";
import { useState } from "react";
import { links, social } from "../data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <h2>Coding Addict</h2>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
      <div>
        <ul>
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
