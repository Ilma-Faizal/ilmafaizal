// Filter products by category
function filterCategory() {
    const category = document.getElementById("categoryDropdown").value;
    const products = document.querySelectorAll(".product-card");
    const description = document.getElementById("categoryDescription");

    // Category descriptions
    const descriptions = {
        all: "Browse all our handcrafted resin creations, from art pieces to personalized gifts.",
        art: "Discover stunning abstract and wall art made from premium resin.",
        home: "Explore functional yet stylish home decor items crafted from resin.",
        jewelry: "Adorn yourself with unique resin earrings, necklaces, and rings.",
        custom: "Create personalized resin designs to make your gifts extra special.",
    };

    // Update description
    description.textContent = descriptions[category];

    // Filter products
    products.forEach(product => {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
