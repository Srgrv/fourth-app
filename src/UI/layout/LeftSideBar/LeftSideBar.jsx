import React from "react";
import classes from "./LeftSideBar.module.css";
import Button from "./Button/Button";
import { ReactComponent as HomeSVG } from "./SVG/HomeSVG.svg";
import { ReactComponent as MessageSVG } from "./SVG/MessageSVG.svg";

const LeftSideBar = () => {
  return (
    <aside className={classes.left}>
      <Button to={"/"} name={"Home"} svgComponent={<HomeSVG />} />
      <Button
        to={"collobarate/"}
        name={"Collobarate"}
        svgComponent={<HomeSVG />}
      />
      <Button
        to={"messages/"}
        name={"Messages"}
        svgComponent={<MessageSVG />}
      />
      <Button
        to={"subscribtions/"}
        name={"Subscribtions"}
        svgComponent={<MessageSVG />}
      />
      <Button
        to={"bookmark/"}
        name={"Bookmark"}
        svgComponent={<MessageSVG />}
      />
      <Button
        to={"communities/"}
        name={"All Communities"}
        svgComponent={<MessageSVG />}
      />
    </aside>
  );
};

export default LeftSideBar;
