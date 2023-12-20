document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Define menu items and product items (replace with your actual data)
    var menuItems = [
        { name: "Plant-Powered Salad", description: "Fresh greens, cherry tomatoes, avocado, and a tangy balsamic vinaigrette.", price: 9.99 },
        { name: "Quinoa Buddha Bowl", description: "A nourishing bowl with quinoa, mixed vegetables, and tahini dressing.", price: 12.99 },
        { name: "Vegan Chocolate Cake", description: "Indulge in the rich and decadent flavor of our vegan chocolate cake.", price: 6.99 }
        // Add more menu items as needed
    ];

    var productItems = [
        { name: "Organic Quinoa", description: "High-protein and versatile, perfect for salads, bowls, and more.", price: 5.99 },
        { name: "Plant-Based Protein Powder", description: "Boost your protein intake with our plant-based protein powder.", price: 24.99 },
        { name: "Organic Avocado Oil", description: "Ideal for cooking and dressing, rich in heart-healthy monounsaturated fats.", price: 8.99 }
        // Add more product items as needed
    ];

    // Dynamically populate menu items and product items
    var menuItemsSection = document.getElementById("cafe-menu");
    var productItemsSection = document.getElementById("grocery-products");

    menuItems.forEach(function (item) {
        var menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        menuItemsSection.appendChild(menuItemElement);
    });

    productItems.forEach(function (item) {
        var productItemElement = document.createElement("div");
        productItemElement.classList.add("product-item");
        productItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        productItemsSection.appendChild(productItemElement);
    });

    // Nutrient calculator functionality
    var calculateButton = document.getElementById("calculate-button");
    calculateButton.addEventListener("click", calculateNutrients);

    function calculateNutrients() {
        // Get user inputs
        var foodType = document.getElementById('food-type').value;
        var quantity = parseFloat(document.getElementById('quantity').value);

        // Perform nutrient calculations (replace with your actual formulas)
        var calories = quantity * 2.5;  // Placeholder value
        var protein = quantity * 0.5;   // Placeholder value
        var fats = quantity * 0.3;      // Placeholder value
        var vitamins = quantity * 0.1;  // Placeholder value
        var minerals = quantity * 0.05; // Placeholder value

        // Display the results
        var resultsContainer = document.getElementById('nutrient-results');
        resultsContainer.innerHTML = `
            <p>Calories: ${calories.toFixed(2)} kcal</p>
            <p>Protein: ${protein.toFixed(2)} g</p>
            <p>Fats: ${fats.toFixed(2)} g</p>
            <p>Vitamins: ${vitamins.toFixed(2)} mg</p>
            <p>Minerals: ${minerals.toFixed(2)} mg</p>
        `;
    }
});
