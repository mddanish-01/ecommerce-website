const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

function openCart(){
    window.location.href = "cart.html";
};

function openLoginPage(){
    window.location.href = "login.html";
};

function goToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}


const products = [
    {
     id: 1,
     name: "Classic Overshirt", 
     price: 2499, image: "images/product-images/product-1.jpg", 
     category: "clothing",
      subcategory: "shirts" 
    },
    { 
        id: 2, 
        name: "Premium T-shirt", 
        price: 999, 
        image: "images/product-images/product-2.jpg", 
        category: "clothing", 
        subcategory: "tshirts" 
    },
    { 
        id: 3, 
        name: "Cotton T-Shirt", 
        price: 2499, 
        image: "images/product-images/product-3.jpg", 
        category: "clothing", 
        subcategory: "tshirts" 

    },
    { 
        id: 4, 
        name: "Boxy Shirt", 
        price: 1499, 
        image: "images/product-images/product-4.jpg", 
        category: "clothing", 
        subcategory: "shirts" 

    },
    { 
        id: 5, 
        name: "Nike Sneaker", 
        price: 7499, 
        image: "images/product-images/product-5.jpg", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    { 
        id: 6, 
        name: "Hoodie", 
        price: 1999, 
        image: "images/clothing-images/hoodies.jpg", 
        category: "clothing", 
        subcategory: "hoodies" 

    },
    { 
        id: 7, 
        name: "Leather Jacket", 
        price: 3799, 
        image: "images/clothing-images/jackets.jpg", 
        category: "clothing", 
        subcategory: "jackets" 

    },
    { 
        id: 8, 
        name: "Classy Shirt", 
        price: 1499, 
        image: "images/clothing-images/shirts.jpg", 
        category: "clothing", 
        subcategory: "shirts" 

    },
    { 
        id: 9, 
        name: "Baggy Trouser", 
        price: 1299, 
        image: "images/clothing-images/trousers.jpg", 
        category: "clothing", 
        subcategory: "trousers" 

    },
    { 
        id: 10, 
        name: "T-shirt", 
        price: 2499, 
        image: "images/clothing-images/tshirts.jpg", 
        category: "clothing", 
        subcategory: "tshirts" 

    },
    { 
        id: 11, 
        name: "Leather Boots", 
        price: 4499, 
        image: "images/footwear-images/boots.jpg", 
        category: "footwear", 
        subcategory: "boots" 

    },
    { 
        id: 12, 
        name: "Casual Shoe", 
        price: 1499, 
        image: "images/footwear-images/casual-shoes.jpg", 
        category: "footwear", 
        subcategory: "casual-shoes" 

    },
    { 
        id: 13, 
        name: "Loafer Shoes", 
        price: 1399, 
        image: "images/footwear-images/loafers.jpg", 
        category: "footwear", 
        ubcategory: "loafers" 

    },
    { 
        id: 14, 
        name: "Sneaker", 
        price: 7499,
        image: "images/footwear-images/sneakers.jpg", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    { 
        id: 15, 
        name: "Premium Bag", 
        price: 6499, 
        image: "images/accessories-images/bags.jpg", 
        category: "accessories", 
        subcategory: "bags" 

    },
    { 
        id: 16, 
        name: "Leather Belt", 
        price: 999, 
        image: "images/accessories-images/belts.jpg", 
        category: "accessories", 
        subcategory: "belts" 

    },
    { 
        id: 17, 
        name: "Ray ben Sunglass", 
        price: 11499, 
        image: "images/accessories-images/sunglasses.jpg", 
        category: "accessories", 
        subcategory: "sunglasses" 

    },
    { 
        id: 18, 
        name: "Classic Watch", 
        price: 19999, 
        image: "images/accessories-images/watches.jpg", 
        category: "accessories", 
        subcategory: "watches" 

    },

    {
        id: 19, 
        name: "Classic White Tee",
        price: 799, 
        image: "images/tshirts/tshirt-1.avif", 
        category: "clothing", 
        subcategory: "tshirts" 

    },
    {
        id: 20, 
        name: "Oversized Black Tee", 
        price: 1199, 
        image: "images/tshirts/tshirt-2.avif",
         category: "clothing", 
        subcategory: "tshirts" 

    },
    {
        id: 21, 
        name: "Striped Cotton Tee", 
        price: 1099, 
        image: "images/tshirts/tshirt-3.avif", 
        category: "clothing", 
        subcategory: "tshirts" 

    },
    
    {   id: 22, 
        name: "Polo T-shirt", 
        price: 1599, 
        image: "images/tshirts/tshirt-4.avif", 
        category: "clothing", 
        subcategory: "tshirts" },
    {
        id: 23, 
        name: "Graphic Print Tee", 
        price: 1299, 
        image: "images/tshirts/tshirt-5.avif", 
        category: "clothing", 
        subcategory: "tshirts" 

    },
    {
        id: 24, 
        name: "V-Neck Tee", 
        price: 899, 
        image: "images/tshirts/tshirt-6.avif", 
        category: "clothing", 
        subcategory: "tshirts" },
    {
        id: 25, 
        name: "Henley T-shirt", 
        price: 1399, 
        image: "images/tshirts/tshirt-7.avif", 
        category: "clothing", 
        subcategory: "tshirts" 

    },

    {
        id: 26, 
        name: "Urban Runner", 
        price: 3499, 
        image: "images/sneakers/sneaker-1.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    {
        id: 27, 
        name: "Street White Sneaker", 
        price: 4299, 
        image: "images/sneakers/sneaker-2.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    {
        id: 28, 
        name: "Classic Canvas Sneaker", 
        price: 1999, 
        image: "images/sneakers/sneaker-3.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    {
        id: 29, 
        name: "Court Low Sneaker", 
        price: 3799, 
        image: "images/sneakers/sneaker-4.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    
    { 
        id: 30, 
        name: "Retro Trainer", 
        price: 4999, 
        image: "images/sneakers/sneaker-5.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    {
        id: 31, 
        name: "Slip-on Sneaker", 
        price: 2299, 
        image: "images/sneakers/sneaker-6.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    {
        id: 32, 
        name: "Sport Runner", 
        price: 5499, 
        image: "images/sneakers/sneaker-7.avif", 
        category: "footwear", 
        subcategory: "sneakers" 

    },
    {
        id: 33, 
        name: "Minimal Leather Sneaker", 
        price: 5999, 
        image: "images/sneakers/sneaker-8.avif", category: "footwear", 
        subcategory: "sneakers" 

    },

    {
        id: 34, 
        name: "Classic Leather Watch", 
        price: 4999, 
        image: "images/watches/watch-1.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 35, 
        name: "Chronograph Steel", 
        price: 8999, 
        image: "images/watches/watch-2.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 36, 
        name: "Minimal Dial Watch",
         price: 3499, 
        image: "images/watches/watch-3.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 37, 
        name: "Digital Sport Watch", 
        price: 2499, 
        image: "images/watches/watch-4.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 38, 
        name: "Rose Gold Watch", 
        price: 6999, 
        image: "images/watches/watch-5.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 39, 
        name: "Black Edition Watch", 
        price: 5499, 
        image: "images/watches/watch-6.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 40, 
        name: "Smart Fit Watch", 
        price: 3999, 
        image: "images/watches/watch-7.avif", 
        category: "accessories",
         subcategory: "watches" },
    {
        id: 41, 
        name: "Vintage Gold Watch", 
        price: 7499, 
        image: "images/watches/watch-8.avif", 
        category: "accessories", 
        subcategory: "watches" },
    {
        id: 42, 
        name: "Automatic Watch", 
        price: 12999, 
        image: "images/watches/watch-9.avif", 
        category: "accessories", 
        subcategory: "watches" }
];

const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {

    card.addEventListener("click", () => {

        const productId = card.dataset.productId;

        window.location.href = `product.html?id=${productId}`;

    });

});


const productInfo = new URLSearchParams(window.location.search);
const selectedProductId = productInfo.get("id");
const product = products.find(item => item.id == selectedProductId);

if (product) {
    const productCategory = document.querySelector(".product-detail-category");
    const productName = document.querySelector("#product-name");
    const productPrice = document.querySelector(".product-detail-price");
    const productImage = document.querySelector("#main-image");
    const sideImages = document.querySelectorAll(".mains-image");


    if (productCategory) {
        productCategory.textContent = product.category;
    }

    if (productName) {
        productName.textContent = product.name;
    }

    if (productPrice) {
        productPrice.textContent = "₹" + product.price;
    }

    if (productImage) {
        productImage.src = product.image;
    }

    sideImages.forEach((img) => {
        img.src = product.image;
    });


    document.title = `${product.name} | MEN'S`;

    const sizeButton = document.querySelectorAll(".size-btn");

    sizeButton.forEach((button) => {

        button.addEventListener("click", () => {

            sizeButton.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

        });

    });

    const decreaseQuantity = document.querySelector(".decrease-quantity");
    const increaseQuantity = document.querySelector(".increase-quantity");
    const finalQuantity = document.querySelector(".quantity-number");

    let quantity = 1;

    if (increaseQuantity && finalQuantity) {

        increaseQuantity.addEventListener("click", () => {

            quantity++;

            finalQuantity.textContent = quantity;

        });

    }


    if (decreaseQuantity && finalQuantity) {
        decreaseQuantity.addEventListener("click", () => {

            if (quantity > 1) {

                quantity--;

                finalQuantity.textContent = quantity;
            }
        });

    }

    const addToCartBtn = document.querySelector(".add-cart-btn");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            const selectedSize = document.querySelector(".size-btn.active");

            if (!selectedSize) {
                alert("Please select a size");
                return;
            }

            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: selectedSize.textContent,
                quantity: quantity

            };

            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
            alert("Product added to cart");
        });
    }
}

const cartItemsContainer = document.querySelector("#cart-items");
const emptyCartContent = document.querySelector(".empty-cart-content");
const cartContent = document.querySelector(".cart-content");
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

if (cartItemsContainer) {
    if (savedCart.length === 0) {
        emptyCartContent.style.display = "block";
        cartContent.style.display = "none";
    } else {
        emptyCartContent.style.display = "none";
        cartContent.style.display = "grid";

        cartItemsContainer.innerHTML = "";

        savedCart.forEach((item, index) => {

            cartItemsContainer.innerHTML += `

                <div class="cart-item">

                    <img src="${item.image}" alt="${item.name}">

                    <div class="cart-item-info">

                        <button 
                            class="remove-item"
                            onclick="removeFromCart(${index})">
                            Remove
                        </button>

                        <h2>${item.name}</h2>

                        <p>Size: ${item.size}</p>

                        <div class="quantity-box">

                            <button onclick="changeQuantity(${index}, -1)">
                                −
                            </button>

                            <span>${item.quantity}</span>

                            <button onclick="changeQuantity(${index}, 1)">
                                +
                            </button>

                        </div>

                        <p class="cart-item-price">
                            ₹${item.price}
                        </p>

                    </div>

                </div>

            `;

        });

        updateCartSummary();

    }

}

function removeFromCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}

function changeQuantity(index, change) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity = Number(cart[index].quantity) + change;

    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}

function updateCartSummary() {

    let subtotal = 0;

    savedCart.forEach((item) => {

        subtotal += item.price * item.quantity;

    });


    const shipping = 99;

    const total = subtotal + shipping;


    document.querySelector("#cart-subtotal").textContent =
        "₹" + subtotal;


    document.querySelector("#cart-shipping").textContent =
        "₹" + shipping;


    document.querySelector("#cart-total").textContent =
        "₹" + total;


    document.querySelector(".cart-item-count").textContent =
        savedCart.length + (savedCart.length === 1 ? " Item" : " Items");

}


