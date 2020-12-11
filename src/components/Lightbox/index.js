import React from "react";
import { PropTypes } from "prop-types";
import HeadTitle from "../HeadTitle";
import Button from "../Button";

function LightBox({ className, title, children, handleClose }) {
  return (
    <div className={className}>
      <div className="light-box-content">
        <div className="light-box-header">
          <HeadTitle headTag="h3">{title}</HeadTitle>
        </div>
        <div className="light-box-body">{children}</div>
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
