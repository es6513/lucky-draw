import React from "react";
import { PropTypes } from "prop-types";

function Item({ className, prefix, suffix, children, ...restProps }) {
  return (
    <li className={className} {...restProps}>
      {prefix}
      {children}
      {suffix}
    </li>
  );
}

export default Item;

Item.propTypes = {
  className: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
  className: "",
  prefix: null,
  suffix: null,
};
