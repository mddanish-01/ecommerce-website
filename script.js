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
        price: 2499,
        image: "images/product-images/product-1.jpg",
        category: "clothing"
    },

    {
        id: 2,
        name: "Premium T-shirt",
        price: 999,
        image: "images/product-images/product-2.jpg",
        category: "clothing"
    },

    {
        id: 3,
        name: "Cotton T-Shirt",
        price: 2499,
        image: "images/product-images/product-3.jpg",
        category: "clothing"
    },

    {
        id: 4,
        name: "Boxy Shirt",
        price: 1499,
        image: "images/product-images/product-4.jpg",
        category: "clothing"
    },

    {
        id: 5,
        name: "Nike Sneaker",
        price: 7499,
        image: "images/product-images/product-5.jpg",
        category: "footwear"
    },

    {
        id: 6,
        name: "Hoodie",
        price: 1999,
        image: "images/clothing-images/hoodies.jpg",
        category: "clothing"
    },

    {
        id: 7,
        name: "Leather Jacket",
        price: 3799,
        image: "images/clothing-images/jackets.jpg",
        category: "clothing"
    },

    {
        id: 8,
        name: "Classy Shirt",
        price: 1499,
        image: "images/clothing-images/shirts.jpg",
        category: "clothing"
    },

    {
        id: 9,
        name: "Baggy Trouser",
        price: 1299,
        image: "images/clothing-images/trousers.jpg",
        category: "clothing"
    },

    {
        id: 10,
        name: "T-shirt",
        price: 2499,
        image: "images/clothing-images/tshirts.jpg",
        category: "clothing"
    },

    {
        id: 11,
        name: "Leather Boots",
        price: 4499,
        image: "images/footwear-images/boots.jpg",
        category: "footwear"
    },

    {
        id: 12,
        name: "Casual Shoe",
        price: 1499,
        image: "images/footwear-images/casual-shoes.jpg",
        category: "footwear"
    },

    {
        id: 13,
        name: "Loafer Shoes",
        price: 1399,
        image: "images/footwear-images/loafers.jpg",
        category: "footwear"
    },

    {
        id: 14,
        name: "Sneaker",
        price: 7499,
        image: "images/footwear-images/sneakers.jpg",
        category: "footwear"
    },

    {
        id: 15,
        name: "Premium Bag",
        price: 6499,
        image: "images/accessories-images/bags.jpg",
        category: "accessories"
    },

    {
        id: 16,
        name: "Leather Belt",
        price: 999,
        image: "images/accessories-images/belts.jpg",
        category: "accessories"
    },

    {
        id: 17,
        name: "Ray ben Sunglass",
        price: 11499,
        image: "images/accessories-images/sunglasses.jpg",
        category: "accessories"
    },

    {
        id: 18,
        name: "Classic Watch",
        price: 19999,
        image: "images/accessories-images/watches.jpg",
        category: "accessories"
    }
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


