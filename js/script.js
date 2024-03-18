function buildMenu()
{ 
    var links = [
        ["Hem", "index.html"],
        ["Produkter", "produkt.html"],
        ["Aktuell kampanj", "campaign.html"], 
        ["Om oss", "omoss.html"],
        ["Kontakta oss", "kontakta.html"],
    ]

        var content=""
    for(var i = 0; i < links.length; i++)
    {
        var text = links[i][0]
        var adress = links[i][1]
        content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>"
        // <li><a href="index.html">Startsida</a></li>
    }
    document.getElementById("menu").innerHTML = content 
}


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

        // Lägg till produkten i varukorgen
        addToCart(productName, productPrice);

        // Uppdatera varukorgen i varukorgsikonen
        updateCartIcon();

       
    });
});

// Funktion för att lägga till produkten i varukorgen
function addToCart(productName, price) {
    // Lägg till produkten i varukorgen
    cart.push({ name: productName, price: price });
    
   

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
        <img src="images/images/Herr-tshirt.png${product.image}" alt="${product.name}  ${product.price} kr" >
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













