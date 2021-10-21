import React from "react";
import Menu from "../components/Menu";

const Layout = ({children}) => (
  <div className='App'>
    <Menu />
    {children}
  </div>
);

export default Layout;
