function validateForm() {
    // Get form elements
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Validate if required fields are not empty
    if (
        nameInput.value.trim() === '' ||
        addressInput.value.trim() === '' ||
        phoneInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        usernameInput.value.trim() === '' ||
        passwordInput.value.trim() === ''
    ) {
        alert('Please fill in all required fields.');
        return;
    }

    // Add additional validation logic as needed

    // If all validations pass, you can submit the form (or perform other actions)
    alert('Form submitted successfully!');
}
