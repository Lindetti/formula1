import { Link, Outlet, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/standings">Standings</NavLink>
        <NavLink to="/results">Results</NavLink>
        <NavLink to="/drivers">Drivers</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
