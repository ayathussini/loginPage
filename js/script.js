document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;

    if (username === "") {
        showError('usernameError', 'Username is required.');
        isValid = false;
    } else {
        hideError('usernameError');
    }
    if (password === "") {
        showError('passwordError', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        hideError('passwordError');
    }

    if (isValid) {
        window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
    }
});

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
}
