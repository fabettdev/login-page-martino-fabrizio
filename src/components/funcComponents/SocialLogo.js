import React from "react";
import "./socialLogo.css";
import PropTypes from 'prop-types';

function SocialLogo(props) {
  return (
    <div>
      <a href="/" className={props.bgColor + " login-social-item"}>
        <i className={props.className}></i>
      </a>
    </div>
  );
}

SocialLogo.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
}

export default SocialLogo;
