
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


// Lyssna på klickhändelser på varukorgsikonen för att visa varukorgen
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

// Lyssna på klickhändelser på "köp nu"-knapparna för att lägga till produkter i varukorgen
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Förhindra standardbeteendet för länken
        console.log("Köp-knappen klickad!"); // Lägg till loggning här för att verifiera att klickhändelsen aktiveras

        // Hitta elementen som representerar produkten
        const productElement = this.closest('.product');
        const productName = productElement.querySelector('h2').textContent;
        const productPriceString = productElement.querySelector('p').textContent;
        const productPrice = parseInt(productPriceString.match(/\d+/)[0]); // Extrahera priset från texten
      
        // Hämta vald storlek från dropdown-menyn för storlek
        const selectedSize = productElement.querySelector('select[name="size"]').value;

        // Hämta vald färg från dropdown-menyn för färg
        const selectedColor = productElement.querySelector('select[name="color"]').value;

        


// Lägg till produkten i varukorgen
        addToCart(productName, productPrice, selectedSize, selectedColor );

        // Uppdatera varukorgen i varukorgsikonen
        updateCartIcon();

       
    });
});

// Funktion för att lägga till produkten i varukorgen
function addToCart(productName, price, size, color) {
    // Lägg till produkten i varukorgen
    cart.push({ name: productName,  price: price, size: size, color: color});
    
   

    // Uppdatera varukorgen på sidan
    updateCart();
}

// Funktion för att uppdatera varukorgen på sidan
function updateCart() {
    // Implementera uppdateringslogik för varukorgen
}

// Funktion för att uppdatera varukorgen i varukorgsikonen
function updateCartIcon() {
    // Uppdatera varukorgen i varukorgsikonen baserat på den aktuella varukorgen (cart)
    iconCartSpan.textContent = cart.length; // Uppdatera antalet produkter i varukorgen
}


// Funktion för att uppdatera varukorgen på sidan
function updateCart() {
    // Töm listan över produkter i varukorgen
    listCartHTML.innerHTML = '';


    // Loopa igenom varje produkt i varukorgen
    cart.forEach(product => {
        // Skapa en ny rad i varukorgen för varje produkt
        const productHTML = document.createElement('div');
        productHTML.classList.add('cart-item');
        productHTML.innerHTML = `
        <img src="${product.image}" alt="${product.name} ${product.color} ${product.size} ${product.price} kr " >
        <div class="quantity">
                <span class="minus"><</span>
                <span>1</span>
                <span class="plus">></span>
            </div>
            <button class="remove">Ta bort</button>

        `   
        ;
        // Lägg till den nya raden i varukorgen
        listCartHTML.appendChild(productHTML);
    });
}
// Hämta vald storlek från dropdown-menyn för storlek
const valdStorlek = productElement.querySelector('.storlek-dropdown').value;

// Hämta vald färg/smak från dropdown-menyn för färg/smak
const valdFargSmak = productElement.querySelector('.farg-smak-dropdown').value;

var dropdowns = document.querySelectorAll('select');

    // Loopa igenom varje dropdown-menyn
    dropdowns.forEach(function(dropdown) {
        // Lägg till en händelselyssnare för när ett alternativ väljs
        dropdown.addEventListener('change', function() {
            // Hämta det valda värdet från dropdown-menyn
            var valtAlternativ = this.value;
            // Visa det valda alternativet i konsolen (kan användas för att göra andra åtgärder)
            console.log("Valt alternativ: " + valtAlternativ);
        });
    });














