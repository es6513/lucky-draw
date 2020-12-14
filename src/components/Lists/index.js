import React from "react";
import { PropTypes } from "prop-types";
import Item from "./Item/index";

function Lists({ className, children, ...restProps }) {
  return (
    <ul className={className} {...restProps}>
      {children}
    </ul>
  );
}

Lists.Item = Item;

export default Lists;

Lists.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Lists.defaultProps = {
  className: "",
};
