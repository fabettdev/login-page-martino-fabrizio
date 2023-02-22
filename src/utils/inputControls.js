function checkValidityInput(element, string) {
    const result = {
        isEmpty: false,
        errorMessage: ""
    }

    if (element.length === 0) {
        result.isEmpty = true;
        //this.isPasswordRequired = true;
        result.errorMessage = string + " is required";
    }

    return result;
}

function checkLengthInput(element, string, length) {
    const result = {
        isTooShort: false,
        errorMessage: ""
    }

    if (element.length < length) {
        result.isTooShort = true;
        result.errorMessage = string + " is too short";
    }

    return result;
}

function checkRegExInput(element, string, rule) {
    const result = {
        isValid: true,
        errorMessage: ""
    }
    if (!element.match(rule)) {
        result.isValid = false;
        result.errorMessage = string + " is not valid";
    }

    return result;
}

function emailRegex() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
}


function checkPasswords(string1, string2) {
    const result = {
        isValid: false,
        errorMessage: "Passwords must be equal"
    }
    if (string1 === string2) {
        result.isValid = true;
        result.errorMessage = "";
    }
    return result;
}

function checkGdpr(checkValue) {
    return checkValue ? "" : "First you have to accept the conditions"
}

export { checkValidityInput, checkLengthInput, checkRegExInput, emailRegex, checkPasswords, checkGdpr }
/*
checkInputValidation = () => {
    let username = null;
    let password = null;
    let message = "";
    let pswErrMessage = "";

    if (this.password.length === 0) {
        password = true;
        this.isPasswordRequired = true;
        pswErrMessage = "Password is required";
    } else if (this.password.length > 0 && this.password.length < 8) {
        password = true;
        this.isPasswordRequired = true;
        pswErrMessage = "Password is too short";
    } else {
        this.isPasswordRequired = false;
        password = false;
    }

    if (this.username.match(this.validEmailFormat)) {
        username = false;
        this.isUsernameRequired = false; //
    } else if (this.username.length === 0) {
        username = true;
        this.isUsernameRequired = true; //
        message = "Username is required";
    } else {
        username = true;
        this.isUsernameRequired = true;
        message = "Insert a valid email";
    }

    if (username === false && password === false) {
        alert("You are now logged in");
    }

    this.setState({
        usernameRequired: username,
        passwordRequired: password,
        usernameMessage: message,
        pswMessage: pswErrMessage,
    });
};

buttonLogin = (e) => {
    e.preventDefault();
    this.checkInputValidation();
};

toggleCallback = (e) => {
    e.preventDefault();
    this.setState({
        showPassword: !this.state.showPassword,
    });
};

componentWillUnmount() {
    console.log("unmounted");
}*/