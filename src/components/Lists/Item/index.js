import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";

const cx = classnames.bind();

function Item({ className, children, ...restProps }) {
  return (
    <li className={cx(className)} {...restProps}>
      {children}
    </li>
  );
}

export default Item;

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
  className: "",
};
