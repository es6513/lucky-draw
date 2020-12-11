import React from "react";
import { PropTypes } from "prop-types";

function Button({ className, handleClick, children, ...restProps }) {
  return (
    <button
      className={className}
      onClick={handleClick}
      onKeyDown={(event) => {
        const key = event.key;

        if (key === " " || key === "Enter") event.preventDefault();
      }}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);

Button.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  className: "",
  handleClick: () => null,
};
