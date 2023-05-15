import React from "react";

import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
import HeaderContainer from "./Header/HeaderContainer/HeaderContainer";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={` ${classes.header}`}>
        <HeaderContainer />
      </div>
      <div className={`${classes.general} ${classes.left}`}>
        <LeftSideBar />
      </div>
      <div className={`${classes.general} ${classes.right}`}>
        <RightSideBar />
      </div>
      <main className={classes.outlet}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
