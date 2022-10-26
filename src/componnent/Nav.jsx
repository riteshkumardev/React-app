import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "blue",
        display: "flex",
        color: "white",
      }}
    >
      <Link to="/home">
        <h3 style={{ color: "white", marginLeft: "100px" }}>Home</h3>
      </Link>
      <Link to="/counter">
        <h3 style={{ color: "white", marginLeft: "100px" }}> Counter</h3>
      </Link>
      <Link to="/todo">
        <h3 style={{ color: "white", marginLeft: "100px" }}> Todo</h3>
      </Link>
      <Link to="/form">
        <h3 style={{ color: "white", marginLeft: "100px" }}> Form</h3>
      </Link>
      <Link to="/newForm">
        <h3 style={{ color: "white", marginLeft: "100px" }}>New Form</h3>
      </Link>
      <Link to="/table">
        <h3 style={{ color: "white", marginLeft: "100px" }}>Table</h3>
      </Link>
      <Link to="/exam">
        <h3 style={{ color: "white", marginLeft: "100px" }}>Exam</h3>
      </Link>

      <Link to="/api">
        <h3 style={{ color: "white", marginLeft: "100px" }}> Api</h3>
      </Link>
    </div>
  );
}

export default Nav;
