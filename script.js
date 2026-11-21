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
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
        let logout = confirm("Do you want to logout?");

        if (logout) {
            localStorage.removeItem("loggedInUser");
            location.reload();
        }
    } else {
        window.location.href = "login.html";
    }
}

function goToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector("#search-input");

if (searchBtn && searchBox && searchInput) {

    searchBtn.addEventListener("click", () => {
        searchBox.classList.toggle("open");
        searchInput.focus();
    });

    searchInput.addEventListener("keydown", (event) => {
        if(event.key === "Enter") {
            const text = searchInput.value.trim();

            if (text !== "") {
                window.location.href = "products.html?search=" + encodeURIComponent(text);
            }
        }
    });

    document.addEventListener("click", (event) => {
        
        const clickedInsideBox = searchBox.contains(event.target);
        const clickedSearchIcon = searchBtn.contains(event.target);

        if (!clickedInsideBox && !clickedSearchIcon) {
            searchBox.classList.remove("open");
        }
    });
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
        subcategory: "loafers" 

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

    card.addEventListener("click", (event) => {

        if(event.target.closest(".wishlist-btn")) {
            return;
        }

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


    if (productCategory) {
        productCategory.textContent = product.category;
    }

    if (productName) {
        productName.textContent = product.name;
    }

    if (productPrice) {
        productPrice.textContent = "₹" + product.price;
    }

    const thumbnailList = document.querySelector("#thumbnail-list");

    let images = [product.image];

    if (product.images) {
        images = product.images;
    }

    productImage.src = images[0];
    productImage.alt = product.name;

    for (let i = 0; i < images.length; i++) {
        thumbnailList.innerHTML += `
            <button class="thumbnail" data-index="${i}">
                <img src="${images[i]}" alt="${product.name}">
            </button>
        `;
    }

    const thumbnails = thumbnailList.querySelectorAll(".thumbnail");
    thumbnails[0].classList.add("active");

    thumbnails.forEach(function (thumb) {
        thumb.addEventListener("click", function () {

            productImage.src = images[thumb.dataset.index];

            thumbnails.forEach(function (t) {
                t.classList.remove("active");
            });

            thumb.classList.add("active");
        });
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
    const buyNowBtn = document.querySelector(".buy-now-btn");

    function addCurrentProduct() {

        const selectedSize = document.querySelector(".size-btn.active");

        if (!selectedSize) {
            alert("Please select a size");
            return false;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const size = selectedSize.textContent;

        const sameItem = cart.find(function (item) {
            return item.id === product.id && item.size === size;
        });

        if (sameItem) {
            sameItem.quantity = Number(sameItem.quantity) + quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: size,
                quantity: quantity
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        return true;
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            if (addCurrentProduct()) {
                alert("Product added to cart");
            }
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", function () {
            if (addCurrentProduct()) {
                window.location.href = "cart.html";
            }
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
    let totalItems = 0;

    savedCart.forEach((item) => {
        subtotal += item.price * item.quantity;
        totalItems += Number(item.quantity);

    });

    let shipping = 99;
    if (subtotal >= 2000) {
        shipping = 0;
    }

    const total = subtotal + shipping;

    document.querySelector("#cart-subtotal").textContent =
        "₹" + subtotal;

        if (shipping === 0) {
        document.querySelector("#cart-shipping").textContent = "Free";
        } else {
        document.querySelector("#cart-shipping").textContent = "₹" + shipping;
    }

    document.querySelector("#cart-total").textContent =
        "₹" + total;

    document.querySelector(".cart-item-count").textContent =
        totalItems + (totalItems === 1 ? " Item" : " Items");

}

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function toggleWishlist(productId) {
    let wishlist = getWishlist();

    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter((id) => id !== productId);
    } else {
        wishlist.push(productId);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function syncWishlistButtons() {
    const wishlist = getWishlist();

    document.querySelectorAll(".product-card").forEach((card) => {

        const heartBtn = card.querySelector(".wishlist-btn");

        if (!heartBtn) {
            return;
        }

        const isSaved = wishlist.includes(Number(card.dataset.productId));

        heartBtn.classList.toggle("active", isSaved);
        heartBtn.textContent = isSaved ? "♥" : "♡";
    });
}

document.addEventListener("click", (event) => {

    const heartBtn = event.target.closest(".wishlist-btn");

    if (!heartBtn) {
        return;
    }
    
    const card = heartBtn.closest(".product-card");

    toggleWishlist(Number(card.dataset.productId));
    syncWishlistButtons();
    renderWishlist();


});

syncWishlistButtons();

const wishlistGrid = document.querySelector("#wishlist-grid");
const wishlistEmpty = document.querySelector("#wishlist-empty");

function renderWishlist() {
    if (!wishlistGrid) {
        return;      
    }

    const savedIds = getWishlist();
    const savedProducts = products.filter((item) => savedIds.includes(item.id));

    if (savedProducts.length === 0) {
        wishlistGrid.innerHTML = "";
        wishlistEmpty.style.display = "block";
        return;
    }

    wishlistEmpty.style.display = "none";
    wishlistGrid.innerHTML = "";

    savedProducts.forEach((item) => {

        wishlistGrid.innerHTML += `
            <article class="product-card" data-product-id="${item.id}">
                <div class="product-image">
                    <button class="wishlist-btn">♥</button>
                    <img src="${item.image}" alt="${item.name}">
                </div>

                <div class="product-info">
                    <h3>${item.name}</h3>
                </div>

                <div class="product-price">
                    <span>₹${item.price}</span>
                </div>
            </article>
        `;
    });

    wishlistGrid.querySelectorAll(".product-card").forEach((card) => {
        card.addEventListener("click", (event) => {

            if (event.target.closest(".wishlist-btn")) {
                return;
            }

            window.location.href = "product.html?id=" + card.dataset.productId;
        });
    });

    syncWishlistButtons();
}

renderWishlist();

document.querySelectorAll(".icon-btn").forEach((button) => {
    if (button.querySelector(".fa-heart")) {
        button.addEventListener("click", () => {
            window.location.href = "wishlist.html";
        });
    }
});


