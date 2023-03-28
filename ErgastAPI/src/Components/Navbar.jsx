import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/results">Last Results</NavLink>
        <NavLink to="/standings">Standings</NavLink>
        <NavLink to="/drivers">Drivers</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
