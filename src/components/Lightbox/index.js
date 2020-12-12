import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import HeadTitle from "../HeadTitle";
import Button from "../Button";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function LightBox({ className, title, children, handleClose }) {
  return (
    <div className={cx(className, "light-box")}>
      <div className={cx("light-box-content")}>
        <HeadTitle headTag="h3" className={cx("light-box-header")}>
          {title}
        </HeadTitle>
        <div className={cx("light-box-body")}>{children}</div>
        <Button handleClick={handleClose}>OK!</Button>
      </div>
    </div>
  );
}

export default LightBox;

LightBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
};

LightBox.defaultProps = {
  className: "",
  title: "",
};
