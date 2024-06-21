function validateCarForm() {
    // Get form elements
    const makeInput = document.getElementById('make');
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const mileageInput = document.getElementById('mileage');
    const locationInput = document.getElementById('location');
    const priceInput = document.getElementById('price');

    // Validate if required fields are not empty
    if (
        makeInput.value.trim() === '' ||
        modelInput.value.trim() === '' ||
        yearInput.value.trim() === '' ||
        mileageInput.value.trim() === '' ||
        locationInput.value.trim() === '' ||
        priceInput.value.trim() === ''
    ) {
        alert('Please fill in all required fields.');
        return;
    }

    // Additional validation for numeric fields
    if (isNaN(yearInput.value) || isNaN(mileageInput.value) || isNaN(priceInput.value)) {
        alert('Please enter valid numeric values for Year, Mileage, and Price.');
        return;
    }

    // Add additional validation logic as needed

    // If all validations pass, you can submit the form (or perform other actions)
    alert('Car added successfully!');
}
