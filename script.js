/*script.js*/
function validatePassword() {
    let confirmPasswordInput = document.getElementById("confirmPassword");
    let password = document.getElementById("password").value; 
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(confirmPassword === '') {
        confirmPasswordInput.setCustomValidity('Retype your password');
        confirmPasswordInput.reportValidity();
    }   else if(password !== confirmPassword)    { 
        confirmPasswordInput.setCustomValidity('Passwords do not match');
        confirmPasswordInput.reportValidity();
    }   else {
        confirmPasswordInput.setCustomValidity('');
    }
    confirmPasswordInput.reportValidity();
     
}
