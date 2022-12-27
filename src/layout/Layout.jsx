import React from "react";
import { Header, Footer } from '../components'
import { Outlet } from "react-router-dom";
const Layout = ({title, buttons}) => {
  return (
    <>
      <Header title={title} buttons={buttons} />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout