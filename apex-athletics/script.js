let cartCount = 0;

const cartCountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {

    cartCount++;

    const productCard = button.closest('.product-card');

    const productTitle = productCard.querySelector('h4').textContent;
    const productPrice = productCard.querySelector('p').textContent;

    emptyCartMsg.style.display = 'none';

    const newCartItem = document.createElement('li');

    newCartItem.style.padding = "10px 0";
    newCartItem.style.borderBottom = "1px solid #eee";
    newCartItem.innerHTML = `<strong>${productTitle}</strong> - ${productPrice.replace('Price tag : ', '')}`;

    cartItemList.appendChild(newCartItem);

    cartCountElement.textContent = cartCount;

    button.textContent ="Added ! ✔";
    button.disabled = true;

    setTimeout(() => { button.textContent = "ADD TO CART";
    button.disabled = false;
    }, 2000);

    });
  
});

const cartIcon = document.getElementById("cart-icon");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCartBtn = document.getElementById("close-cart");

cartIcon.addEventListener('click', () => {
cartSidebar.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
cartSidebar.classList.remove('open');
});

const cartItemList = document.getElementById("cart-items-list");
const emptyCartMsg = document.getElementById("empty-cart-msg");