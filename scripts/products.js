document.addEventListener('DOMContentLoaded', initializePage);

async function initializePage() {
    // get category from URL (e.g. ?category=cases)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'holders';

    // build path to JSON
    const jsonPath = `../scripts/database/productlist.json`;

    try {
        // fetch JSON file
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        updateCategoryDisplay(data, category);
        makeProductList(data, category);
    } catch (err) {
        console.error("Failed to load JSON:", err);
    }
}

function makeProductList(jsonResponse, category) {
    const products = jsonResponse.productlist[category];
    const productsContainer = document.getElementById("category-products-list");
    productsContainer.innerHTML = ''; // Clear existing products
    if (products && products.length > 0) {
        products.forEach(product => {
            const productHTML = returnProductItem(product);
            productsContainer.insertAdjacentHTML('beforeend', productHTML);
        });
    }

}

function updateCategoryDisplay(jsonResponse, category) {
    const categoryData = jsonResponse.contenttitle[category];
    if (categoryData) {
        document.getElementById("category-title").innerText = categoryData.title;
        document.getElementById("category-description").innerText = categoryData.description;
        document.getElementById("category-icon").innerText = categoryData.icon;
    }
}

function returnProductItem(productData){
    return `<div class="product-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300">
        <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <span class="text-6xl" id="category-icon">📝</span>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${productData.name}</h3>
            <p class="text-gray-600 mb-4">${productData.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">₹${productData.price}</span>
                <button class="order-btn text-white px-6 py-2 rounded-lg font-semibold" onclick="window.location.href='./productdetails.html?id=${productData.id}'">
                    Order Now
                </button>
            </div>
        </div>
    </div>`;
}
