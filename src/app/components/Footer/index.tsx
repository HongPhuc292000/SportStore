import React from 'react';
import Copyright from './Components/Copyright';
import FooterLocation from './Components/FooterLocation';
import MoreInfo from './Components/MoreInfo';

function Footer() {
  return (
    <>
      <FooterLocation />
      <MoreInfo />
      <Copyright />
    </>
  );
}

export default React.memo(Footer);
