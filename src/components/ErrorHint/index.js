import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import styles from "./style.moduls.scss";
const cx = classnames.bind(styles);

function ErrorHint({ className, message, ...restProps }) {
  return (
    <div className={cx("error-message")} {...restProps}>
      {message}
    </div>
  );
}

export default React.memo(ErrorHint);

ErrorHint.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ErrorHint.defaultProps = {
  className: "",
};
