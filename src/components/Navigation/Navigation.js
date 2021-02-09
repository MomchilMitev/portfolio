import './Navigation.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburgerIcon from '../../assets/icons/hamburger.svg';
import closeIcon from '../../assets/icons/close.svg';

const Navigation = () => {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(!opened);
  };

  return (
    <nav className="navigation">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="61"
        height="32"
        className="navigation__logo"
      >
        <path
          fill="#33323D"
          fillRule="evenodd"
          d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
        />
      </svg>
      <div
        className={
          opened
            ? 'navigation__links'
            : 'navigation__links navigation__links--closed'
        }
      >
        <NavLink
          activeStyle={{ color: 'var(--slightlyDesaturatedCyan)' }}
          className="navigation__link"
          exact
          to="/"
          onClick={open}
        >
          home
        </NavLink>
        <NavLink
          activeStyle={{ color: 'var(--slightlyDesaturatedCyan)' }}
          className="navigation__link"
          to="/portfolio"
          onClick={open}
        >
          portfolio
        </NavLink>
        <NavLink
          activeStyle={{ color: 'var(--slightlyDesaturatedCyan)' }}
          className="navigation__link"
          to="contact"
          onClick={open}
        >
          contact
        </NavLink>
      </div>
      <img
        className="navigation__icon"
        src={opened ? closeIcon : hamburgerIcon}
        alt="hamburger nav icon"
        onClick={open}
      />
    </nav>
  );
};

export default Navigation;
