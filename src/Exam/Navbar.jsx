import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="./logoo.png" alt="pic" className={styles.logo} />
    </div>
  );
}

export default Navbar;
