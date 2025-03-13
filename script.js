function checkPassword() {
    const correctPassword = 'test'; // Replace with your desired password
    const inputPassword = document.getElementById('passwordInput').value;
    const message = document.getElementById('message');
    
    if (inputPassword === correctPassword) {
        message.textContent = 'Access granted!';
        message.style.color = 'green';
        // Here you can redirect to another page or display additional content
    } else {
        message.textContent = 'Yaara nee??';
        message.style.color = 'red';
    }
}
