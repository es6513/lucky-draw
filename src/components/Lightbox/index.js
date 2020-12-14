import React, { useRef, useCallback } from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import HeadTitle from "../HeadTitle";
import Button from "../Button";
import useOutsideClick from "customHooks/useOutsideClick";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function LightBox({ className, title, children, handleClose }) {
  const lightBoxContentRef = useRef(null);
  useOutsideClick(lightBoxContentRef, handleClose);

  return (
    <div className={cx(className, "light-box")}>
      <div ref={lightBoxContentRef} className={cx("light-box-content")}>
        <HeadTitle headTag="h3" className={cx("light-box-header")}>
          {title}
        </HeadTitle>
        <div className={cx("light-box-body")}>{children}</div>
        <Button
          data-color="confirm"
          data-size="big"
          className={cx("light-box-button")}
          handleClick={handleClose}
        >
          OK!
        </Button>
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
