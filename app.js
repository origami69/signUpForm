let password = document.querySelector('input[name=password]')
let passwordConfirm = document.querySelector('input[name=confirm]')
let wrong = document.getElementById('message')

function validatePassword() {
    if (password.value === passwordConfirm.value) {
        wrong.style.color = 'green';
        wrong.innerHTML = '*Passwords Do Match';
        password.setCustomValidity('');
    } else {
        wrong.style.color = 'red';
        wrong.innerHTML = '*Password Does Not Match';
        password.setCustomValidity('Password Does Not Match');
    }
}