import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/login/login.css";
import "../styles/common.css";
import Form from "../components/funcComponents/Form";
import { checkValidityInput, checkLengthInput, checkRegExInput, emailRegex } from '../utils/inputControls';
import '../utils/getSetLocalStorage';
import Input from '../components/funcComponents/Input';
import SocialLogo from "../components/funcComponents/SocialLogo";
import FormButton from "../components/funcComponents/FormButton";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailMessage: "",
      pswMessage: "",
      showPassword: false,
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  checkInputValidation = (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;

    // Controllo password
    const passwordExists = checkValidityInput(password, 'Password');
    const passwordLength = checkLengthInput(password, 'Password', 8);
    // Controllo email
    const emailExists = checkValidityInput(username, 'Email');
    const emailValidity = checkRegExInput(username, 'Email', emailRegex());

    if (emailExists.isEmpty === false && !passwordExists.isEmpty && emailValidity.isValid === true && passwordLength.isTooShort === false) {
      alert("You are now logged in");
    }

    this.setState({
      pswMessage: passwordExists.errorMessage || passwordLength.errorMessage,
      emailMessage: emailExists.errorMessage || emailValidity.errorMessage
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
          <Form onSubmitForm={this.checkInputValidation} formTitle={"Login"}>
            <Input
              label="Email"
              name="email"
              placeholder="Type your email"
              icon="&#xf0e0;"
              margin="mb-23"
              type="text"
              errMessage={this.state.emailMessage}
              alertValidate={this.state.emailMessage ? "alert-validate" : ""}
            />

            <Input
              label="Password"
              name="password"
              placeholder="Type your password"
              inputIcon={true}
              icon="&#xf023;"
              toggleCallback={this.toggleCallback}
              isVisible={this.state.showPassword}
              type={this.state.showPassword ? "text" : "password"}
              errMessage={this.state.pswMessage}
              alertValidate={this.state.pswMessage ? "alert-validate" : ""}
            />

            <div className="forgot-psw-container">
              <a href="#">Forgot password?</a>
            </div>

            <FormButton label={"LOGIN"} />

            <div className="text-center sign-up-container-1">
              <span className="sign-up-text">Or Sign In Using</span>
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
              <Link to={"/subscribe"} className="sign-up-link">
                Sign up
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
