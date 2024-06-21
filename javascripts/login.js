function login() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const sellers = [
        { username: 'car', password: 'seller' },

    ];

    const foundSeller = sellers.find(seller =>
        seller.username.toLowerCase() === usernameInput.value.toLowerCase() &&
        seller.password === passwordInput.value
    );

    if (foundSeller) {
        alert('Login successful!');
        // Redirect to the seller page or perform other actions
        window.location.href = 'seller.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
