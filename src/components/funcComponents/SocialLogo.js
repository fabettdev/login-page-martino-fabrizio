import React from "react";
import "./socialLogo.css";

function SocialLogo(props) {
  return (
    <div>
      <a href="/" className={props.bgColor + " login-social-item"}>
        <i className={props.className}></i>
      </a>
    </div>
  );
}

export default SocialLogo;
