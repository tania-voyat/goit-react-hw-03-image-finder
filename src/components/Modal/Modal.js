import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.props.onCloseModal();
      }
    });
  }
  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
