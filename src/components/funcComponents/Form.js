import React from "react";
import SocialLogo from "./SocialLogo";

import "./form.css";
import "../../styles/common.css";

function Form(props) {


    function checkInputValidation(e) {
        props.onSubmitForm(e);
    }

    return (
        <div className="wrap-login">
            <form onSubmit={checkInputValidation} className="login-form">
                <header>
                    <h1 id="form-title">{props.formTitle}</h1>
                </header>

                {props.children}

                {/* <div className="text-center sign-up-container-1">
                    <span className="sign-up-text">Or Sign Up Using</span>
                </div>

                <div className="social-container">
                    <SocialLogo
                        className={"fa fa-facebook"}
                        bgColor={"bg-facebook"}
                    />
                    <SocialLogo
                        className={"fa fa-twitter"}
                        bgColor={"bg-twitter"}
                    />
                    <SocialLogo className={"fa fa-google"} bgColor={"bg-google"} />
                </div>
                <div className="text-center sign-up-container-2">
                    <span className="sign-up-text p-b-17">Or Sign Up Using</span>
                    <a href="/" className="sign-up-link">
                        Sign Up
                    </a>
                </div> */}
            </form>
        </div>
    );
}

export default Form;
