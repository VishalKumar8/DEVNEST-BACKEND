const emailValidate = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const passwordValidate = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*+])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return re.test(password);
}

// console.log(passwordValidate('Excellence100*'));
// console.log(emailValidate('vaishnnav91@gmail.com'));

module.exports = {
    emailValidate,
    passwordValidate
}