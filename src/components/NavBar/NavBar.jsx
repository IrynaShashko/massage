import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/portfolio"}>Portgolio</NavLink>
      <NavLink to={"/reviews"}>Reviews</NavLink>
      <NavLink to={"/price"}>Price</NavLink>
    </div>
  );
};

export default NavBar;
