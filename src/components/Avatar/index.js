import React from "react";
import { PropTypes } from "prop-types";
import manAvatar from "../../assets/manAvatar.svg";
import womanAvatar from "../../assets/womanAvatar.svg";

function Avatar({ gender }) {
  return (
    <img
      src={gender === "man" ? manAvatar : womanAvatar}
      alt={`${gender}Avatar`}
    />
  );
}

export default Avatar;

Avatar.propTypes = {
  gender: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  gender: "",
};
