import React from "react";
import { PropTypes } from "prop-types";

function Item({ className, children, ...restProps }) {
  return (
    <li className={className} {...restProps}>
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
