import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

import mainNavConfig from './mainNavConfig';
import styleMainNav from './MainNav.module.scss';

function MainNav() {
  return (
    <div className="container">
      <nav className={clsx(styleMainNav.mainNav)}>
        {mainNavConfig.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? clsx(styleMainNav.mainNavLink, styleMainNav.active)
                  : clsx(styleMainNav.mainNavLink)
              }
              to={'/'}
            >
              {item}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default MainNav;
