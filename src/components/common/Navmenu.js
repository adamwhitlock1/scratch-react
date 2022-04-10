import { NavLink } from 'react-router-dom';

function Navmenu() {
  return (
    <nav className="vads-u-display--flex vads-l-row  vads-u-justify-content--center vads-u-align-items--center vads-u-background-color--primary-darker vads-c-header_nav">
      <ul className="vads-u-display--flex vads-l-row vads-u-justify-content--center vads-c-header_nav-list">
        <li className="vads-u-flex--1 vads-u-text-align--center vads-c-header_nav-item">
          <NavLink
            className="vads-u-color--white vads-u-font-size--md vads-c-header_nav-link vads-u-font-weight--bold vads-u-border-color--gold"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="vads-u-flex--1 vads-u-text-align--center vads-u-color--white vads-u-font-size--md vads-c-header_nav-item">
          <NavLink
            className="vads-u-color--white vads-u-font-size--md vads-c-header_nav-link vads-u-font-weight--bold"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="vads-u-flex--1 vads-u-text-align--center vads-u-color--white vads-u-font-size--md vads-c-header_nav-item">
          <NavLink
            className="vads-u-color--white vads-u-font-size--md vads-c-header_nav-link vads-u-font-weight--bold"
            to="/form-example"
          >
            Form Example
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navmenu;
