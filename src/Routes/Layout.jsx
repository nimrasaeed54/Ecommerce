
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar';

export default function Layout() {
  return (
    <div className="flex h-screen">
  
      <SideNavbar />
      <div className="flex-1 -ml-24 mt-20 lg:mt-20 md:mt-[139px] pl-[60px] rounded-3xl overflow-auto">
        <Outlet />
      </div>

    </div>
  );
}
