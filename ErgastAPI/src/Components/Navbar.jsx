import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="links">
        <NavLink className={pathname === "/" ? "active" : ""} to="/">
          Schedule
        </NavLink>
        <NavLink
          className={pathname === "/results" ? "active" : ""}
          to="/results"
        >
          Last Results
        </NavLink>
        <NavLink
          className={pathname === "/standings" ? "active" : ""}
          to="/standings"
        >
          Standings
        </NavLink>
        <NavLink
          className={pathname === "/drivers" ? "active" : ""}
          to="/drivers"
        >
          Drivers
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

//  <Link className={(pathname === '/homepage') ? 'active' : ''} to="/homepage">Dashboard</Link>
