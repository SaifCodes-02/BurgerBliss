let btn=document.querySelector(".nav-toggle");
console.log(btn);

btn.addEventListener("click",()=>{
    console.log("Clicked");
    let nav=document.querySelector(".navlist").style.left="0";
    console.log(nav)
    console.log("CLICKED")
})



const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
};
ScrollReveal().reveal(".burger", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".content", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    duration: 500,
});
ScrollReveal().reveal(".burger2", {
    ...scrollRevealOption,
    duration: 2000,
});
ScrollReveal().reveal(".content2", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".text", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".drink", {
    ...scrollRevealOption,
    origin:"left",
});
ScrollReveal().reveal(".menu-label", {
    ...scrollRevealOption,
});

const navLinks = document.querySelector('.navlist');
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
});
const cartButtons = document.querySelectorAll('.cart');
const productPage = document.getElementById('product-page');
const productDetailsContainer = document.querySelector('.product-page-content .product-container');
const closeProductPage = document.getElementById('close-product-page');

cartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Show product page
        productPage.classList.add('visible');

        // Dynamically populate product details
        const productCard = event.target.closest('.card');
        const productName = productCard.querySelector('h1').innerText;
        const productPrice = productCard.querySelector('h2').innerText;
        const productImageSrc = productCard.querySelector('img').getAttribute('src');
        const productDescription = productCard.querySelector('p').innerText;

        productDetailsContainer.innerHTML = `
        <div class="product-image-section">
            <img src="${productImageSrc}" alt="${productName}" style="width:100%; max-width:300px; margin-bottom:20px;">
            <h2>${productName}</h2>
            <p>${productDescription}</p>
        </div>
        <div class="product-options-section">
            <form>
                <div class="option-group">
                    <h3>1st Sauce  <span class="required">Required</span></h3>
                    <label><input type="radio" name="sauce1" value="Tangy Sauce" checked> Tangy Sauce</label>
                    <label><input type="radio" name="sauce1" value="Chipotle Sauce"> Chipotle Sauce</label>
                </div>
                <div class="option-group">
                    <h3>2nd Sauce  <span class="required">Required</span></h3>
                    <label><input type="radio" name="sauce2" value="Tangy Sauce"> Tangy Sauce</label>
                    <label><input type="radio" name="sauce2" value="Chipotle Sauce" checked> Chipotle Sauce</label>
                </div>
                <div class="option-group">
                    <h3>Soft Drink <span class="required">Required</span></h3>
                    <label><input type="radio" name="drink" value="Pepsi" checked> Pepsi</label>
                    <label><input type="radio" name="drink" value="Sprite"> Sprite</label>
                </div>
                <div class="quantity-group">
                    <button type="button" class="quantity-btn" id="decrease-quantity">-</button>
                    <input type="number" id="quantity" value="1" min="1">
                    <button type="button" class="quantity-btn" id="increase-quantity">+</button>
                </div>
                <div class="add-to-cart">
                    <span class="price">${productPrice}</span>
                    <button type="submit" class="cart-btn">Add To Cart</button>
                </div>
            </form>
        </div>
    `;
    
    // Attach event listeners to the quantity buttons
    const quantityInput = document.getElementById('quantity');
    const decreaseButton = document.getElementById('decrease-quantity');
    const increaseButton = document.getElementById('increase-quantity');
    
    // Decrease quantity
    decreaseButton.addEventListener('click', () => {
        const currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        } else {
            alert('Quantity cannot be less than 1.');
        }
    });
    
    // Increase quantity
    increaseButton.addEventListener('click', () => {
        const currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity < 5) {
            quantityInput.value = currentQuantity + 1;
        } else {
            alert('You cannot add more than 5 items.');
        }
    });
    

        document.querySelector('.cart-btn').addEventListener('click', (event) => {
            event.preventDefault();
            let cartCountElement = document.querySelector('.cart-count');
            let currentCount = parseInt(cartCountElement.innerText) || 0;

if(currentCount >= 3) {
    alert('You cannot add more than 3 items to the cart!');
    return;

}

            cartCountElement.innerText = currentCount + 1;
            productPage.classList.remove('visible');
            alert('Added to cart');
        });
    });
});

closeProductPage.addEventListener('click', () => {
 productPage.classList.remove('visible');
});
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 450) { // Adjust threshold as needed
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
    }
});

// Extend the openProductPage function to include "Add to Cart" functionality for combos
function openProductPage(name, description, image, price) {
    // Show product page
    productPage.classList.add('visible');

    // Populate product details
    productDetailsContainer.innerHTML = `
    <div class="product-image-section">
        <img src="${image}" alt="${name}" style="width:100%; max-width:300px; margin-bottom:20px;">
        <h2>${name}</h2>
        <p>${description}</p>
    </div>
    <div class="product-options-section">
        <form>
            <div class="option-group">
                <h3>Sides Option <span class="required">Required</span></h3>
                <label><input type="radio" name="side" value="Mashed Potatoes"> Mashed Potatoes</label>
                <label><input type="radio" name="side" value="Fries" checked> Fries</label>
            </div>

            <div class="option-group">
                <h3>Soft Drink <span class="required">Required</span></h3>
                <label><input type="radio" name="drink" value="Pepsi"> Pepsi</label>
                <label><input type="radio" name="drink" value="Sprite" checked> Sprite</label>
            </div>
            <div class="quantity-group">
                <button type="button" class="quantity-btn" id="decrease-quantity">-</button>
                <input type="number" id="quantity" value="1" min="1">
                <button type="button" class="quantity-btn" id="increase-quantity">+</button>
            </div>
            <div class="add-to-cart">
                <span class="price">${price}</span>
                <button type="button" class="cart-btn combo-cart-btn">Add To Cart</button>
            </div>
        </form>
    </div>
`;

// Add event listeners for quantity update
const quantityInput = document.getElementById('quantity');
const decreaseButton = document.getElementById('decrease-quantity');
const increaseButton = document.getElementById('increase-quantity');

// Decrease quantity
decreaseButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

// Increase quantity
increaseButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity < 5) {
        quantityInput.value = currentQuantity + 1;
    } else {
        alert('You cannot add more than 5 items.');
    }
});

// Add to Cart functionality
document.querySelector('.combo-cart-btn').addEventListener('click', () => {
    const selectedSide = document.querySelector('input[name="side"]:checked')?.value || 'None';
    const selectedDrink = document.querySelector('input[name="drink"]:checked')?.value || 'None';
    const quantity = parseInt(quantityInput.value) || 1;
    const priceValue = parseFloat(price.replace('$', ''));

    // Check if the cart count is already at the limit (3)
    const cartCountElement = document.querySelector('.cart-count');
    const currentCount = parseInt(cartCountElement.innerText) || 0;

    if (currentCount >= 3) {
        alert('You cannot add more than 3 items to the cart!');
        return; // Prevent adding more items
    }

    // Check if the item already exists in the cart
    const existingItem = cartItems.find(
        (item) => item.description === `${description} (Side: ${selectedSide}, Drink: ${selectedDrink})`
    );

    if (existingItem) {
        // Increment quantity of the existing item
        existingItem.quantity += quantity;
    } else {
        // Add new item to the cart
        cartItems.push({
            name: name,
            description: `${description} (Side: ${selectedSide}, Drink: ${selectedDrink})`,
            image: image,
            price: priceValue,
            quantity: quantity
        });

        // Update cart count only when a new item is added
        cartCountElement.innerText = currentCount + 1;
    }

    // Update cart sidebar
    updateCartSidebar();

    // Close product page after adding to cart
    productPage.classList.remove('visible');
});
}



// Select the cart button, cart sidebar, and close button
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');

// Event listener to open the cart sidebar
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('visible'); // Add the 'visible' class to show the sidebar
});

// Event listener to close the cart sidebar
closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('visible'); // Remove the 'visible' class to hide the sidebar
});











// Cart array to store items
let cartItems = [];

// Function to update the cart sidebar dynamically
function updateCartSidebar() {
    const cartItemsContainer = document.querySelector('.cart-items'); // Container in the cart sidebar
    const cartSummary = document.querySelector('.cart-summary'); // Cart summary container
    const clearCartBtn = document.querySelector('.btn-clear-cart'); // Clear cart button

    // Clear the existing cart items in the sidebar
    cartItemsContainer.innerHTML = '';

    let subtotal = 0;
    const deliveryFee = 100; // Fixed delivery fee
    let tax = 0;
    let total = 0;
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>'; // Show "Your cart is empty." message
        cartSummary.innerHTML = ''; // Clear cart summary content
        clearCartBtn.disabled = true; // Disable "Clear Cart" if the cart is empty
        return;
    }

    cartItems.forEach((item, index) => {
        subtotal += item.price * item.quantity;
    
        // Add product details to the cart sidebar
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="decrease-btn" data-index="${index}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" readonly>
                    <button class="increase-btn" data-index="${index}">+</button>
                </div>
            </div>
            <button class="remove-item-btn" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Attach event listeners to the increase and decrease buttons
    const decreaseButtons = document.querySelectorAll('.decrease-btn');
    const increaseButtons = document.querySelectorAll('.increase-btn');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    decreaseButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            const item = cartItems[index];
            if (item.quantity > 1) {
                item.quantity -= 1; // Decrease quantity
                updateCartSidebar(); // Refresh the sidebar
            } else {
                alert('Quantity cannot be less than 1.');
            }
        });
    });
    
    increaseButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            const item = cartItems[index];
            if (item.quantity < 5) {
                item.quantity += 1; // Increase quantity
                updateCartSidebar(); // Refresh the sidebar
            } else {
                alert('You cannot add more than 5 items.');
            }
        });
    });
    

    // Calculate tax (e.g., 10% of subtotal)
    tax = subtotal * 0.1;

    // Calculate total
    total = subtotal + deliveryFee + tax;

    // Update the cart summary
    cartSummary.innerHTML = `
        <h3>Subtotal: $${subtotal.toFixed(2)}</h3>
        <h3>Delivery Fee: $${deliveryFee.toFixed(2)}</h3>
        <h3>Tax: $${tax.toFixed(2)}</h3>
        <h3>Total: $${total.toFixed(2)}</h3>
    `;

    clearCartBtn.disabled = false; // Enable "Clear Cart" if the cart has items

    // Attach event listeners to the "Remove" buttons
    const removeItemButtons = document.querySelectorAll('.remove-item-btn');
    removeItemButtons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
           
            const index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1); // Remove the item from the cart
            let cartCountElement = document.querySelector('.cart-count');
            let currentCount = parseInt(cartCountElement.innerText) || 0;
    
            if (currentCount > 0) {
                cartCountElement.innerText = currentCount - 1;
            }
    
            updateCartSidebar(); // Refresh the sidebar

        });
    });
}


// Add to cart button logic in product section
cartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        // Get product details
        const productCard = event.target.closest('.card');
        const productName = productCard.querySelector('h1').innerText;
        const productPrice = parseFloat(productCard.querySelector('h2').innerText.replace('$', ''));
        const productImageSrc = productCard.querySelector('img').getAttribute('src');

        // Calculate the total number of items in the cart
        const currentCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        // If the cart has 3 or more items, prevent adding more items
        if (currentCount >= 3) {
            alert("You can only add up to 3 items in the cart!");
            return; // Prevent adding more items
        }

        // Check if product already exists in cart
        const existingProduct = cartItems.find((item) => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increment quantity if already in cart
        } else {
            // Add new product to cart.
            cartItems.push({
                name: productName,
                price: productPrice,
                image: productImageSrc,
                quantity: 1,
            });
        }

        // Update the cart sidebar
        updateCartSidebar();
    });
});









// Clear cart functionality
document.querySelector('.btn-clear-cart').addEventListener('click', () => {
    cartItems = []; // Empty the cart
    let cartCountElement = document.querySelector('.cart-count');
            let currentCount = parseInt(cartCountElement.innerText) || 0;
    
            if (currentCount > 0) {
                cartCountElement.innerText = 0;
            }
    
            updateCartSidebar(); // Refresh the sidebar
    updateCartSidebar(); // Refresh the sidebar
});


const cbtn = document.querySelector('.btn-checkout');
cbtn.addEventListener('click', (event) => {
    // Check if the cart is empty
    if (cartItems.length === 0) {
        alert("Your cart is empty");
  
        event.preventDefault(); // Prevent navigation to the next page
        return; // Stop further execution
    }

    // Save the cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    cbtn.disabled = false;
});








