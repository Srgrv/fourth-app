import React from "react";
import classes from "./LeftSideBar.module.css";
import Button from "./Button/Button";
import { ReactComponent as HomeSVG } from "../../layout/LeftSideBar/SVG/HomeButton.svg";

const active = ({ isActive }) => (isActive ? classes.active : undefined);

const LeftSideBar = () => {
  return (
    <aside className={classes.left}>
      <Button to={"/"} className={active} name={"Home"} />
      <Button
        to={"collobarate/"}
        className={active}
        name={"Collobarate"}
        svgComponent={<HomeSVG />}
      />
      <Button to={"messages/"} className={active} name={"Messages"} />
      <Button to={"subscribtions/"} className={active} name={"Subscribtions"} />
      <Button to={"bookmark/"} className={active} name={"Bookmark"} />
      <Button to={"communities/"} className={active} name={"All Communities"} />
    </aside>
  );
};

export default LeftSideBar;
