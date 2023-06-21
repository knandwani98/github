import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink className="navs" activeClass="active" to={"/"}>
              home
            </NavLink>
            <NavLink className="navs" activeClass="active" to={"/articles"}>
              articles
            </NavLink>
            <NavLink className="navs" activeClass="active" to={"/blogs"}>
              blogs
            </NavLink>
            <NavLink className="navs" activeClass="active" to={"/contact"}>
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
