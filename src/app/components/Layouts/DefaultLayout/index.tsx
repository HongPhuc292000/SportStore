import React from 'react';
import Header from 'app/components/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'app/components/Footer';
import SocialsLink from 'app/components/SocialsLink';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SocialsLink />
    </>
  );
}

export default DefaultLayout;
