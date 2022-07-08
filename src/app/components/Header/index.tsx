import React from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { Link, NavLink } from 'react-router-dom';
import styleHeader from './Header.module.scss';

import logoRed from 'assets/images/logo_red.png';
import MainNav from '../MainNav';

function Header() {
  React.useEffect(() => {
    const doc = document.documentElement;
    const w = window;
    let curScroll = 0;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curDirection = 0;
    let prevDirection = 0;
    let header = document.getElementById('site-header');
    let toggled = true;

    let checkScroll = function () {
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        curDirection = 2;
      } else {
        curDirection = 1;
      }

      if (curDirection !== prevDirection) {
        toggled = toggleHeader();
      }

      prevScroll = curScroll;
      if (toggled) {
        prevDirection = curDirection;
      }
    };

    let toggleHeader = function () {
      toggled = true;
      if (curDirection === 2) {
        header?.classList.add('hide');
      } else if (curDirection === 1) {
        header?.classList.remove('hide');
      } else {
        toggled = false;
      }
      return toggled;
    };

    window.addEventListener('scroll', checkScroll);

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div id="site-header">
      <div className="container">
        <nav className={clsx(styleHeader.headerNav)}>
          <div className={clsx(styleHeader.headerList)}>
            <NavLink className={clsx(styleHeader.headerItem)} to={'/'}>
              <Icon className={clsx(styleHeader.headerIcon)} icon="eva:menu-fill" />
            </NavLink>
            <NavLink className={clsx(styleHeader.headerItem)} to={'/'}>
              <Icon className={clsx(styleHeader.headerIcon)} icon="ant-design:global-outlined" />
            </NavLink>
          </div>
          <Link to={'/'}>
            <img src={logoRed} className={clsx(styleHeader.headerLogo)} alt="Logo chính" />
          </Link>
          <div className={clsx(styleHeader.headerList)}>
            <NavLink className={clsx(styleHeader.headerItem)} to={'/'}>
              <Icon className={clsx(styleHeader.headerIcon)} icon="fe:search" />
            </NavLink>
            <NavLink className={clsx(styleHeader.headerItem)} to={'/'}>
              <Icon className={clsx(styleHeader.headerIcon)} icon="ep:location" />
            </NavLink>
            <NavLink className={clsx(styleHeader.headerItem)} to={'/'}>
              <Icon className={clsx(styleHeader.headerIcon)} icon="carbon:user-avatar-filled-alt" />
            </NavLink>
          </div>
        </nav>
      </div>
      <MainNav />
    </div>
  );
}

export default React.memo(Header);
