import React from "react";
import { PropTypes } from "prop-types";

function Count({ count }) {
  return <div>{count}</div>;
}

export default Count;

Count.propTypes = {
  count: PropTypes.number.isRequired,
};
