import React from "react";
import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;
