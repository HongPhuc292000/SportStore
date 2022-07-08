import React from 'react';
import './GlobalStyles.scss';
interface Props {
  children: React.ReactElement;
}

const GlobalStyles = ({ children }: Props) => {
  return children;
};

export default React.memo(GlobalStyles);
