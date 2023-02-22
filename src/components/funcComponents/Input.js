import React from "react";
import "./input.css";

function Input(props) {
  function callback(e) {
    if (props.inputCallback || typeof props.inputCallback === 'function') {
      return props.inputCallback(e);
    }
  }

  function toggleCallback(e) {
    return props.toggleCallback(e);
  }

  return (
    <div
      className={`wrap-input validate-input ${props?.margin} ${props?.alertValidate} ${props.inputCSS}`}
      data-validate={props.errMessage}
    >
      <span className="label-input">{props.label}</span>
      <input
        className={"login-input " + props.inputCSS}
        onChange={callback}
        placeholder={props.placeholder}
        type={props.type}
        name={props.nameInput}
      />
      {props.type !== "checkbox" && <span className="focus-input" data-icon={props.icon}></span>}
      {props.inputIcon && <>
        <span className='toggle-password' onClick={toggleCallback}>
          {
            props.isVisible ? <i className="fa fa-eye" id="togglePassword"></i> : <i className="fa fa-eye-slash" id="togglePassword"></i>
          }
        </span>
      </>
      }
    </div>
  );
}

Input.defaultProps = {
  inputIcon: false,
}

export default Input;
