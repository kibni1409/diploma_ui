import { Outlet } from 'react-router-dom';
import React from 'react';

const AppLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default AppLayout