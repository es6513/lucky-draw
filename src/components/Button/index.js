import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classnames.bind(styles);

function Button({ className, handleClick, children, ...restProps }) {
  console.log("render button");

  return (
    <button
      className={cx(className, "button")}
      onClick={handleClick}
      onKeyDown={(event) => {
        const key = event.key;

        if (key === " " || key === "Enter") event.preventDefault();
      }}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: "",
  handleClick: () => null,
};
