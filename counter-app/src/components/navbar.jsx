// import React, { Component } from "react";
import React from "react";

// Stateless Functional Component: same as class
// 'sfc' + tab
// props is only for class, so use parameter 'props'
// const NavBar = props => {    // destruct 'props'
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Count of incremented elements{" "}
        <span className="badge badge-pill badge-secondary">
          {/* {this.props.totalCounters} */}
          {/* {props.totalCounters} */} {/* destruct 'props' */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
