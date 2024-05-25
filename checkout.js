document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalPriceElement = document.getElementById('subtotal-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let products = [];

    // Fetch product data
    const fetchProducts = async () => {
        try {
            const response = await fetch('products.json');
            products = await response.json();
            renderCartItems();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Render cart items
    const renderCartItems = () => {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach((cartItem, index) => {
            const product = products.find((p) => p.id === cartItem.product_id);
            if (product) {
                const itemTotalPrice = product.price * cartItem.quantity;
                subtotal += itemTotalPrice;

                const cartItemElement = document.createElement('div');
                cartItemElement.classList.add('item');
                cartItemElement.innerHTML = `
                    <div class="image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="name">
                        ${product.name}
                    </div>
                    <div class="totalprice">
                        $${itemTotalPrice.toFixed(2)}
                    </div>
                    <div class="quantity">
                        <span class="minus" data-index="${index}">-</span>
                        <span>${cartItem.quantity}</span>
                        <span class="plus" data-index="${index}">+</span>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            }
        });

        subtotalPriceElement.textContent = `$${subtotal.toFixed(2)}`;

        // Add event listeners to the plus and minus buttons
        const plusButtons = cartItemsContainer.querySelectorAll('.plus');
        const minusButtons = cartItemsContainer.querySelectorAll('.minus');

        plusButtons.forEach(button => {
            button.addEventListener('click', incrementQuantity);
        });

        minusButtons.forEach(button => {
            button.addEventListener('click', decrementQuantity);
        });
    };

    // Increment quantity
    const incrementQuantity = (event) => {
        const index = event.target.getAttribute('data-index');
        cart[index].quantity += 1;
        updateCart();
    };

    // Decrement quantity
    const decrementQuantity = (event) => {
        const index = event.target.getAttribute('data-index');
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1); // Remove the item if quantity reaches 0
        }
        updateCart();
    };

    // Update cart in localStorage and re-render
    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
    };

    fetchProducts();
});




function fillCheckoutForm() {
    try {
        // Fetch data from localStorage
        const fullName = localStorage.getItem("name");
        const email = localStorage.getItem("email");
        const address = localStorage.getItem("address");
        const city = localStorage.getItem("city");
        const state = localStorage.getItem("state");
        const pincode = localStorage.getItem("pincode");

        // Log the retrieved data to check if it's correct
        console.log("Name:", fullName);
        console.log("Email:", email);
        console.log("Address:", address);
        console.log("City:", city);
        console.log("State:", state);
        console.log("Pincode:", pincode);

        // Set data to form fields
        document.querySelector('#fullName').value = fullName;
        document.querySelector('#email').value = email;
        document.querySelector('#address').value = address;
        document.querySelector('#city').value = city;
        document.querySelector('#state').value = state;
        document.querySelector('#pincode').value = pincode;
    } catch (error) {
        console.error("An error occurred while filling the checkout form:", error);
    }
}

// Add event listener to the button
document.querySelector('.button11').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    fillCheckoutForm();
});
document.querySelector('.button111').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    fillCheckoutForm();
});