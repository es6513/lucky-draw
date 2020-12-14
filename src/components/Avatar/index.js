import React from "react";
import { PropTypes } from "prop-types";
import manAvatar from "../../assets/manAvatar.svg";
import womanAvatar from "../../assets/womanAvatar.svg";

function Avatar({ className, gender }) {
  return (
    <img
      className={className}
      src={gender === "man" ? manAvatar : womanAvatar}
      alt={`${gender}Avatar`}
    />
  );
}

export default Avatar;

Avatar.propTypes = {
  className: PropTypes.string,
  gender: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: "",
  gender: "",
};
