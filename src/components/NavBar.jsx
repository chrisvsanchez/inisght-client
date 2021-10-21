import { React } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/uploadposts">Upload Posts</NavLink>
    </div>
  );
};
export default NavBar;
