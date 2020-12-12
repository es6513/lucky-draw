import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
const cx = classnames.bind(styles);

function Input({ inputName, useFormRef, className, errors, ...restProps }) {
  return (
    <input
      name={inputName}
      ref={useFormRef}
      className={cx(className, "input")}
      {...restProps}
    />
  );
}

export default React.memo(Input);

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object,
  useFormRef: PropTypes.func,
};

Input.defaultProps = {
  className: "",
};
