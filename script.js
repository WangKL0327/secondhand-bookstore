// Dummy cart array
let cart = [];

// Function to add a book to the cart
function addToCart(bookTitle, price) {
    cart.push({ title: bookTitle, price: price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.title} - $${item.price}</p>
            <button class="btn remove-item" onclick="removeFromCart(${index})">移除</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Function to remove a book from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const bookItem = button.parentElement;
        const title = bookItem.querySelector('h3').textContent;
        const price = parseFloat(bookItem.querySelector('p:nth-child(4)').textContent.replace('價格: $', ''));
        addToCart(title, price);
    });
});

// Event listener for the checkout button
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('感謝您的購買！您的訂單已成功提交。');
        cart = [];
        updateCart();
    } else {
        alert('您的購物車是空的。');
    }
});
