import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn-transparent"];

const SIZES = ["btn-large", "btn-medium"];

export const Button = ({ btnStyle, btnSize, btnClick, type, children }) => {
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <button
      className={`btn ${checkBtnStyle} ${checkBtnSize}`}
      onClick={btnClick}
      type={type}
    >
      {children}
    </button>
  );
};
