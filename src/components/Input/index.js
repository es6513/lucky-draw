import React from "react";
import { PropTypes } from "prop-types";

function Input({ inputName, useFormRef, className, errors, ...restProps }) {
  return (
    <input
      name={inputName}
      ref={useFormRef}
      className={className}
      {...restProps}
    />
  );
}

export default React.memo(Input);

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object,
  useFormRef: PropTypes.func,
};

Input.defaultProps = {
  className: "",
};
