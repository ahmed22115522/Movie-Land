import React from 'react'
import { HashRouter, Outlet } from "react-router-dom";
import  Navbar  from '../Navbar/Navbar';

const Layout = ({token , logout}) => {
  return (
    <>

      <Navbar token={token} logout={logout} />

      <Outlet />

    </>
  )
}

export default Layout