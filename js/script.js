

// Variabler för att hämta DOM-element
const listProductHTML = document.querySelector('.listProduct');
const listCartHTML = document.querySelector('.listCart');
const iconCart = document.querySelector('.icon-cart');
const iconCartSpan = document.querySelector('.icon-cart span');
const body = document.querySelector('body');
const closeCart = document.querySelector('.close');
const readMoreButtons = document.querySelectorAll('.read-more-button');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const dropdowns = document.querySelectorAll('select');


// Produkter och varukorgsarrayer
let products = [];
let cart = [];

// Funktion för att visa eller dölja varukorgen
function toggleCart() {
    body.classList.toggle('showCart');
}

// Funktion för att lägga till produkt i varukorgen
function addToCart(productName, price, size, color) {
    cart.push({ name: productName, price: price, size: size, color: color});
    updateCart();
}

// Funktion för att uppdatera varukorgen i varukorgsikonen
function updateCartIcon() {
    iconCartSpan.textContent = cart.length;
}
// Funktion för att ta bort produkt från varukorgen
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    updateCartIcon();
}

// Funktion för att uppdatera antal produkter i varukorgen


// Lyssna på klickhändelser för plus och minus knappar samt ta bort knappar
listCartHTML.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('remove')) {
        const index = [...target.parentElement.parentElement.children].indexOf(target.parentElement);
        removeFromCart(index);
    } else if (target.classList.contains('minus')) {
        const quantityElement = target.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            const index = [...target.parentElement.parentElement.children].indexOf(target.parentElement.parentElement);
            updateQuantity(index, quantity);
        }
    } else if (target.classList.contains('plus')) {
        const quantityElement = target.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        const index = [...target.parentElement.parentElement.children].indexOf(target.parentElement.parentElement);
        updateQuantity(index, quantity);
    }
});
function updateQuantity(index, quantity) {
    cart[index].quantity = quantity;
}

// Funktion för att uppdatera varukorgen på sidan
function updateCart() {
    listCartHTML.innerHTML = '';
    cart.forEach((product, index) => {
        const productHTML = document.createElement('div');
        productHTML.classList.add('cart-item');
        productHTML.innerHTML = `
            ${product.name} / ${product.color} / ${product.size} / ${product.price} kr
            <div class="quantity">
                <span class="minus">-</span>
                <span>1</span>
                <span class="plus">+</span>
            </div>
            <button class="remove">Ta bort</button>
        `;
        listCartHTML.appendChild(productHTML);
    });
}

// Lyssna på klickhändelser för att visa/dölja varukorgen
iconCart.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);

// Lyssna på klickhändelser för "köp nu"-knappar
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const productElement = this.closest('.product');
        const productName = productElement.querySelector('h2').textContent;
        const productPriceString = productElement.querySelector('p').textContent;
        const productPrice = parseInt(productPriceString.match(/\d+/)[0]);
        const selectedSize = productElement.querySelector('select[name="size"]').value;
        const selectedColor = productElement.querySelector('select[name="color"]').value;
        addToCart(productName, productPrice, selectedSize, selectedColor);
        updateCartIcon();
        toggleCart(); 
    });
});

// Lyssna på klickhändelser för dropdown-menyer
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('change', function() {
        const selectedValue = this.value;
        console.log("Valt alternativ: " + selectedValue);
    });
});

// Lyssna på klickhändelser för "Läs mer"-knappar
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.nextElementSibling.style.display = 'block';
    });
});

// Lyssna på klickhändelser för "X"-knappar i modalerna
modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.carousel-btn next-btn');
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-img');

    let currentIndex = 0;
    let imageWidth = images[0].clientWidth;

    // Vänta på att bilderna är helt laddade innan vi kör karusellen
    window.addEventListener('load', () => {
        imageWidth = images[0].clientWidth;
        moveCarousel(); // Flytta karusellen till rätt bild efter att bilderna har laddats
    });

    function moveCarousel() {
        track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1;
        }
        moveCarousel();
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        moveCarousel();
    });
});


// Funktion för att scrolla till sektionen "more-info"
function scrollToMoreInfo() {
    document.getElementById('more-info').scrollIntoView({ behavior: 'smooth' });
}

// Funktion för att scrolla till sektionen "minaerfarenheter"
function scrollToMinaErfarenheter() {
    document.getElementById('minaerfarenheter').scrollIntoView({ behavior: 'smooth' });
}
function scrollToommig() {
    document.getElementById('om-mig').scrollIntoView({ behavior: 'smooth' });
}