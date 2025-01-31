const passwordField = document.getElementById("password");

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

    let charPool = "";
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool === "") {
        passwordField.value = "Select at least one option!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}