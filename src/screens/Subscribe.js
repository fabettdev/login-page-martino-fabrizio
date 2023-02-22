import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/login/login.css";
import "../styles/common.css";
import Form from "../components/funcComponents/Form";
import { checkValidityInput, checkLengthInput, checkRegExInput, emailRegex, checkPasswords, checkGdpr } from '../utils/inputControls';
import { setLocalStorage } from '../utils/getSetLocalStorage';
import Input from '../components/funcComponents/Input';
import Select from "../components/funcComponents/Select";
import FormButton from "../components/funcComponents/FormButton";

class Subscribe extends Component {
    constructor(props) {
        super(props);

        this.roles = ['frontend', 'backend', 'backoffice'];

        this.state = {
            nameMessage: "",
            surnameMessage: "",
            emailMessage: "",
            pswMessage: "",
            equalPswMessage: "",
            gdprMessage: "",
            showPassword: false,
        };
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    checkInputValidation = (e) => {
        e.preventDefault();
        console.log(e.target[10].checked)

        const name = e.target[0].value;
        const surname = e.target[1].value;
        const birthDate = e.target[2].value;
        const email = e.target[3].value;
        const password = e.target[4].value;
        const confirmPassword = e.target[5].value;
        const role = e.target[6].value
        let gender = null;
        const gdprAccepted = e.target[10].checked;

        //7.8.9
        if (e.target[7].checked) {
            gender = "Male"
        } else if (e.target[8].checked) {
            gender = "Female"
        } else if (e.target[9].checked) {
            gender = "Other"
        }

        // Controlli name
        const nameExists = checkValidityInput(name, 'Name');
        // Controlli surname
        const surnameExists = checkValidityInput(surname, 'Surname');

        // Controlli password
        const passwordExists = checkValidityInput(password, 'Password');
        const passwordLength = checkLengthInput(password, 'Password', 8);
        const passwordEquals = checkPasswords(password, confirmPassword)

        // Controlli email
        const emailExists = checkValidityInput(email, 'Email');
        const emailValidity = checkRegExInput(email, 'Email', emailRegex());


        if (!nameExists.isEmpty && !surnameExists.isEmpty &&
            !emailExists.isEmpty &&
            !passwordExists.isEmpty &&
            !passwordLength.isTooShort &&
            passwordEquals.isValid &&
            emailValidity.isValid &&
            gdprAccepted) {

            const userData = {
                name: name, // name, 
                surname: surname, // surname,  
                email: email, // email,
                password: password, // password, 
                birthDate: birthDate, // birthDate,
                role: role, // role, 
                gender: gender, // gender, 
                gdprAcceptance: gdprAccepted

            }

            setLocalStorage('userData', userData)
            console.log("You are now logged in");
        }

        this.setState({
            nameMessage: nameExists.errorMessage,
            surnameMessage: surnameExists.errorMessage,
            pswMessage: passwordExists.errorMessage || passwordLength.errorMessage,
            equalPswMessage: passwordEquals.errorMessage,
            emailMessage: emailExists.errorMessage || emailValidity.errorMessage,
            gdprMessage: checkGdpr(gdprAccepted),

        });
    };

    toggleCallback = (e) => {
        e.preventDefault();
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login">
                    <Form onSubmitForm={this.checkInputValidation} formTitle={"Subscribe"} errorMessagePassword={this.state.pswMessage} errorMessageEmail={this.state.emailMessage}>
                        <Input
                            label="Name *"
                            name="name"
                            placeholder="Type your name"
                            icon="&#xf007;"
                            margin="mb-23"
                            type="text"
                            errMessage={this.state.nameMessage}
                            alertValidate={this.state.nameMessage ? "alert-validate" : ""}
                        />

                        <Input
                            label="Surname *"
                            name="surname"
                            placeholder="Type your surname"
                            icon="&#xf007;"
                            margin="mb-23"
                            type="text"
                            errMessage={this.state.surnameMessage}
                            alertValidate={this.state.surnameMessage ? "alert-validate" : ""}
                        />

                        <Input
                            label="Birth date"
                            name="birth-date"
                            icon="&#xf007;"
                            margin="mb-23"
                            type="date"
                        />

                        <Input
                            label="Email *"
                            name="email"
                            placeholder="Type your email"
                            icon="&#xf0e0;"
                            margin="mb-23"
                            type="text"
                            errMessage={this.state.emailMessage}
                            alertValidate={this.state.emailMessage ? "alert-validate" : ""}
                        />

                        <Input
                            label="Password *"
                            name="password"
                            placeholder="Type your password"
                            icon="&#xf023;"
                            margin="mb-23"
                            inputIcon={true}
                            isVisible={this.state.showPassword}
                            toggleCallback={this.toggleCallback}
                            type={this.state.showPassword ? "text" : "password"}
                            errMessage={this.state.pswMessage}
                            alertValidate={this.state.pswMessage ? "alert-validate" : ""}
                        />

                        <Input
                            label="Confirm password *"
                            name="confirm-password"
                            placeholder="Repeat your password"
                            icon="&#xf023;"
                            margin="mb-23"
                            type={this.state.showPassword ? "text" : "password"}
                            errMessage={this.state.equalPswMessage}
                            alertValidate={this.state.equalPswMessage ? "alert-validate" : ""}
                        />

                        <Select
                            label="Select your role"
                            selectOptions={this.roles} />
                        <div style={{ marginBottom: '23px' }}>
                            <div
                                className="label-input">Select gender</div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}>
                                <Input
                                    label="M"
                                    value="M"
                                    nameInput="gender"
                                    type={"radio"}
                                    inputCSS={"radio"}
                                />

                                <Input
                                    label="F"
                                    value="F"
                                    nameInput="gender"
                                    type={"radio"}
                                    inputCSS={"radio"}
                                />

                                <Input
                                    label="Other"
                                    value="other"
                                    nameInput="gender"
                                    type={"radio"}
                                    inputCSS={"radio"}
                                />
                            </div>
                        </div>

                        <Input
                            label="* By subscribiting you agree to the terms of our privacy policy"
                            type={"checkbox"}
                            inputCSS={"checkbox"}
                            errMessage={this.state.gdprMessage}
                            alertValidate={this.state.gdprMessage ? "alert-validate" : ""}
                        />

                        <FormButton label={"SUBSCRIBE"} />

                        <div className="text-center sign-up-container-2">
                            <span className="sign-up-text p-b-17">Or Sign In Using</span>
                            <Link to={"/login"} className="sign-up-link">
                                Login
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Subscribe;
