import React from 'react';
import Header from 'app/components/Header';
import Sidebar from 'app/components/Sidebar';

interface Props {
  children: React.ReactElement;
}

function DefaultLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
