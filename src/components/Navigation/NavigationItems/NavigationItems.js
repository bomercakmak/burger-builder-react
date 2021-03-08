import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link={"/"}>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link={"/orders"}>Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link={"/auth"}>Authentication</NavigationItem>
    ) : (
      <NavigationItem link={"/logout"}>Logout</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
