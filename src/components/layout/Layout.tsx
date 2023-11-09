// src/components/layout/index.tsx

import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
