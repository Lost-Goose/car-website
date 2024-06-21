
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30000, location: 'City A', price: 25000 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 25000, location: 'City B', price: 22000 },
    // Add more cars as needed
];

async function performCarSearch(model, location) {
    // Filter cars based on user input
    const searchResults = cars.filter(car =>
        car.model.toLowerCase().includes(model.toLowerCase()) &&
        car.location.toLowerCase().includes(location.toLowerCase())
    );

    return searchResults;
}

function searchCars() {
    const modelInput = document.getElementById('model');
    const locationInput = document.getElementById('location');
    const searchResultsDiv = document.getElementById('searchResults');

    const model = modelInput.value.trim();
    const location = locationInput.value.trim();

    // Perform asynchronous car search
    performCarSearch(model, location)
        .then(searchResults => {
            // Display search results
            displaySearchResults(searchResults, searchResultsDiv);
        })
        .catch(error => {
            console.error('Error fetching car data:', error);
            // Display an error message to the user if needed
        });
}

function displaySearchResults(results, container) {
    // Clear previous results
    container.innerHTML = '';

    if (results.length === 0) {
        container.innerHTML = '<p>No results found.</p>';
        return;
    }

    const resultList = document.createElement('ul');

    results.forEach(car => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${car.make} ${car.model}</strong><br>
            Year: ${car.year}, Mileage: ${car.mileage} miles<br>
            Location: ${car.location}, Price: $${car.price}
        `;
        resultList.appendChild(listItem);
    });

    container.appendChild(resultList);
}
