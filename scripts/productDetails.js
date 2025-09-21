// Product data structure
// const productData = {
//     'notebooks': {
//         title: 'Premium Notebooks & Registers',
//         price: '₹50',
//         mrp: '₹75',
//         category: 'Office Stationery',
//         description: 'Our premium notebooks and registers are perfect for students, professionals, and businesses. Made with high-quality paper and durable binding, these notebooks offer excellent writing experience and long-lasting durability.',
//         features: [
//             'High-quality 70 GSM paper for smooth writing',
//             'Durable hardcover binding',
//             'Available in ruled, plain, and graph paper formats',
//             'Perfect size for daily use (A4/A5)',
//             'Eco-friendly materials used'
//         ],
//         options: ['Ruled', 'Plain', 'Graph'],
//         images: [
//             'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IiM2QjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OVIPC/kD48L3RleHQ+Cjwvc3ZnPgo=',
//             'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRUVGMkZGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IiM2QjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OVIPC/kD48L3RleHQ+Cjwvc3ZnPgo=',
//             'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRkVGM0M3Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IiM2QjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OVIPC/kD48L3RleHQ+Cjwvc3ZnPgo=',
//             'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNFOEZGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IiM2QjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OVIPC/kD48L3RleHQ+Cjwvc3ZnPgo='
//         ]
//     },
//     'pens': {
//         title: 'Premium Pens & Writing Tools',
//         price: '₹15',
//         mrp: '₹25',
//         category: 'Office Stationery',
//         description: 'High-quality ball pens, gel pens, and markers for smooth writing experience. Perfect for office, school, and personal use.',
//         features: [
//             'Smooth ink flow technology',
//             'Comfortable grip design',
//             'Long-lasting ink cartridge',
//             'Available in multiple colors',
//             'Premium build quality'
//         ],
//         options: ['Blue', 'Black', 'Red'],
//         images: [
//             'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRkVGMkYyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IiM2QjczODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7inJLvuI88L3RleHQ+Cjwvc3ZnPgo='
//         ]
//     }
// };

let productData = {};

let currentImageIndex = 0;
let currentProduct = 'notebooks'; // Default product
let quantity = 1;

// Initialize page
function initializePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1';
    loadProduct(productId);
}

// Load product data
function loadProduct(productId) {
    if (productData[productId]) {
        currentProduct = productId;
        const product = productData[productId];
        
        // Update product info
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-mrp').textContent = product.mrp;
        document.getElementById('breadcrumb-category').textContent = product.category;
        document.getElementById('breadcrumb-product').textContent = product.title;
        
        // Update description
        document.getElementById('description-title').textContent = product.title;
        document.getElementById('description-text').textContent = product.description;
        
        // Update features list
        const featuresList = document.getElementById('features-list');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Update product options
        const optionsContainer = document.getElementById('product-options');
        optionsContainer.innerHTML = '';
        product.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = `option-btn px-4 py-2 border-2 ${index === 0 ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-300 text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700'} rounded-lg font-medium transition-colors duration-200`;
            button.textContent = option;
            button.onclick = () => selectOption(button, option);
            optionsContainer.appendChild(button);
        });

        // Update images
        if (product.images && product.images.length > 0) {
            document.getElementById('main-image').src = product.images[0];
            updateThumbnails(product.images);
        }
    }
}

// Update thumbnail images
function updateThumbnails(images) {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = '';
    
    images.forEach((image, index) => {
        const button = document.createElement('button');
        button.className = `thumbnail-btn flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-green-500' : 'border-gray-200 hover:border-green-400'} transition-colors duration-200`;
        button.onclick = () => changeImage(index);
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Thumbnail ${index + 1}`;
        img.className = 'w-full h-full object-cover';
        img.onerror = () => {
            img.src = '../assets/common/imagebroken.jpg';
        }
        
        button.appendChild(img);
        thumbnailContainer.appendChild(button);
    });
}

// Image navigation functions
function changeImage(index) {
    const product = productData[currentProduct];
    if (product.images && index < product.images.length) {
        currentImageIndex = index;
        document.getElementById('main-image').src = product.images[index];
        
        // Update thumbnail borders
        const thumbnails = document.querySelectorAll('.thumbnail-btn');
        thumbnails.forEach((thumb, i) => {
            thumb.className = thumb.className.replace('border-green-500', 'border-gray-200');
            if (i === index) {
                thumb.className = thumb.className.replace('border-gray-200', 'border-green-500');
            }
        });
    }
}

function nextImage() {
    const product = productData[currentProduct];
    if (product.images) {
        currentImageIndex = (currentImageIndex + 1) % product.images.length;
        changeImage(currentImageIndex);
    }
}

function previousImage() {
    const product = productData[currentProduct];
    if (product.images) {
        currentImageIndex = currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1;
        changeImage(currentImageIndex);
    }
}

// Product option selection
function selectOption(button, option) {
    // Remove active class from all option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.className = btn.className.replace('border-green-500 bg-green-50 text-green-700', 'border-gray-300 text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700');
    });
    
    // Add active class to selected button
    button.className = 'option-btn px-4 py-2 border-2 border-green-500 bg-green-50 text-green-700 rounded-lg font-medium transition-colors duration-200';
}

// Quantity management
function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}

// Action button functions
function orderNow(event) {
    const button = event.currentTarget;
    const product = productData[currentProduct];
    const selectedOption = document.querySelector('.option-btn.border-green-500')?.textContent || 'Default';
    
    // // Create WhatsApp message
    // const message = `Hi! I want to order:
    // Product: ${product.title}
    // Option: ${selectedOption}
    // Quantity: ${quantity}
    // Price: ${product.price} each
    // Total: ₹${parseInt(product.price.replace('₹', '')) * quantity}

    // Please confirm availability and delivery details.`;
        
    //     const whatsappUrl = `https://wa.me/918053769503?text=${encodeURIComponent(message)}`;
    //     window.open(whatsappUrl, '_blank');

    const originalText = button.textContent;
    
    // Add loading animation
    button.classList.add('animate-pulse');
    button.textContent = 'Processing...';
    button.disabled = true;
    
    setTimeout(() => {
        // Remove loading animation
        button.classList.remove('animate-pulse');
        
        // Add shake effect and change text
        button.classList.add('animate-bounce');
        button.textContent = 'Sorry Coming Soon';
        button.classList.remove('from-green-600', 'to-green-700', 'hover:from-green-700', 'hover:to-green-800');
        button.classList.add('from-red-500', 'to-red-600', 'hover:from-red-600', 'hover:to-red-700');
        
        setTimeout(() => {
            button.classList.remove('animate-bounce');
        }, 1000);
        
        // Reset after 3 seconds (optional)
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('from-red-500', 'to-red-600', 'hover:from-red-600', 'hover:to-red-700');
            button.classList.add('from-green-600', 'to-green-700', 'hover:from-green-700', 'hover:to-green-800');
            button.disabled = false;
        }, 3000);
        
    }, 1500);

}

function addToCart() {
    // Simulate add to cart functionality
    alert('Product added to cart! (This is a demo - integrate with your cart system)');
}

function addToWishlist() {
    // Simulate add to wishlist functionality
    alert('Product added to wishlist! (This is a demo - integrate with your wishlist system)');
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = btn.className.replace('border-green-500 text-green-600', 'border-transparent text-gray-500 hover:text-gray-700');
    });
    
    // Show selected tab content
    document.getElementById(tabName + '-content').classList.remove('hidden');
    
    // Add active class to selected tab
    const activeTab = document.getElementById(tabName + '-tab');
    activeTab.className = activeTab.className.replace('border-transparent text-gray-500 hover:text-gray-700', 'border-green-500 text-green-600');
}

// Initialize page when DOM is loaded
// document.addEventListener('DOMContentLoaded', initializePage);

document.addEventListener('DOMContentLoaded', loadJsonData);

async function loadJsonData() {
    // get category from URL (e.g. ?category=cases)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'holders';

    // build path to JSON
    const jsonPath = `../scripts/database/productDetails.json`;

    try {
        // fetch JSON file
        const response = await fetch(jsonPath);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        productData = data;
        initializePage();
    } catch (err) {
        console.error("Failed to load JSON:", err);
    }
}