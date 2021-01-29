import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import style from '../styles/Layout.module.css';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
