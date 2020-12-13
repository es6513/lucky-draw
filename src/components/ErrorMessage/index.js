import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import styles from "./style.moduls.scss";
const cx = classnames.bind(styles);

function ErrorMessage({ className, message, ...restProps }) {
  return <div className={cx("error-message")}>{message}</div>;
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ErrorMessage.defaultProps = {
  className: "",
};
