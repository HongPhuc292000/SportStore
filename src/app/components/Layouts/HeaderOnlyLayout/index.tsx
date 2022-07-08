import React from 'react';
import Header from 'app/components/Header';

interface Props {
  children: React.ReactElement;
}

function HeaderOnlyLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnlyLayout;
