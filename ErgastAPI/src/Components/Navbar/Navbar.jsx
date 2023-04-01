import { NavLink } from "react-router-dom";
import { routes } from "./routes";

const NavBar = () => {

  return (
    <header className="main-nav">
      <div className="container flex-between">
        <span className="main-nav__logo">Formula 1 - Tracker</span>
        <nav>
          <ul className="main-nav__list"> 
            {routes.map(({ name, url }) => (
              <li key={url} className="main-nav__item">
                <NavLink
                  to={url}
                  className="main-nav__link"
                >{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

//  <Link className={(pathname === '/homepage') ? 'active' : ''} to="/homepage">Dashboard</Link>
