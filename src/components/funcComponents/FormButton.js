import React from "react";
import "./formButton.css";

function FormButton(props) {
  function callback(e) {
    if (props.callbackButton || typeof props.callbackButton === 'function') {
      return props.callbackButton(e);
    }
  }

  return (
    <div className="container-login-btn">
      <div className="wrap-login-btn">
        <div className="login-gradient"></div>
        <button type="submit" className="login-btn" onClick={callback}>
          {props.label}
        </button>
      </div>
    </div>
  );
}

export default FormButton;
