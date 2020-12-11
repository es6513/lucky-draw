import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

function Item({ className, prefix, suffix, children, ...restProps }) {
  return (
    <li className={cx(className, "lists-item")} {...restProps}>
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
