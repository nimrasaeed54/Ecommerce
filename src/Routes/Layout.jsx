
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar';

export default function Layout() {
  return (
    <div className="flex h-screen">
  
      <SideNavbar />
      <div className="flex-1 -ml-24 mt-20 pl-14 rounded-3xl overflow-auto">
        <Outlet />
      </div>

    </div>
  );
}
