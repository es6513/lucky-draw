import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames/bind";
import manAvatar from "../../assets/manAvatar.svg";
import womanAvatar from "../../assets/womanAvatar.svg";
import styles from "./style.moduls.scss";

const cx = classnames.bind(styles);

function Avatar({ className, gender }) {
  return (
    <img
      className={cx(className)}
      src={gender === "man" ? manAvatar : womanAvatar}
      alt={`${gender}Avatar`}
    />
  );
}

export default React.memo(Avatar);

Avatar.propTypes = {
  className: PropTypes.string,
  gender: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  className: "",
  gender: "",
};
