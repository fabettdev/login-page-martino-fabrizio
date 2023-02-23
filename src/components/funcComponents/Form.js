import React from "react";
import PropTypes from 'prop-types';

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
            </form>
        </div>
    );
}

Form.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    formTitle: PropTypes.string,
    children: PropTypes.array.isRequired,
}

export default Form;
