const productsGrid = document.querySelector("#products-grid");

if (productsGrid) {

    const pageTitle = document.querySelector("#page-title");
    const pageDescription = document.querySelector("#page-description");
    const productsCount = document.querySelector("#products-count");

    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category");

    const categoryNames = {
        tshirts: "T-Shirts",
        shirts: "Shirts",
        hoodies: "Hoodies",
        jackets: "Jackets",
        trousers: "Trousers",
        sneakers: "Sneakers",
        boots: "Boots",
        "casual-shoes": "Casual Shoes",
        loafers: "Loafers",
        watches: "Watches",
        bags: "Bags",
        belts: "Belts",
        sunglasses: "Sunglasses"
    };

    let filteredProducts = [];

    if (selectedCategory) {

        filteredProducts = products.filter(function (item) {
            return item.subcategory === selectedCategory;
        });
    } else {

        filteredProducts = products;
    }

    let title = "All Products";

    if (selectedCategory && categoryNames[selectedCategory]) {
        title = categoryNames[selectedCategory];
    }

    pageTitle.textContent = title;
    pageDescription.textContent = "Explore our latest collection.";
    productsCount.textContent = filteredProducts.length + " Products";

    productsGrid.innerHTML = ""; 

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = "<p>No products found.</p>";
    } else {
        for (let i = 0; i < filteredProducts.length; i++) {

            const item = filteredProducts[i];

            let subcategoryName = categoryNames[item.subcategory];
            if (!subcategoryName) {
                subcategoryName = item.subcategory;
            }

            productsGrid.innerHTML += `
                <article class="product-card" data-product-id="${item.id}">
                    <div class="product-image">
                        <button class="wishlist-btn">♡</button>
                        <img src="${item.image}" alt="${item.name}">
                        <button class="quick-add-btn" data-product-id="${item.id}">Add to Cart</button>
                    </div>

                    <div class="product-info">
                        <p class="product-category">${subcategoryName}</p>
                        <h3>${item.name}</h3>
                    </div>

                    <div class="product-price">
                        <span>₹${item.price}</span>
                    </div>
                </article>
            `;
        }
    }

    const cards = document.querySelectorAll(".product-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (event) {

            if (event.target.classList.contains("wishlist-btn")) {
                return;
            }

            const productId = cards[i].dataset.productId;
            window.location.href = "product.html?id=" + productId;
        });
    }

    const quickAddButtons = document.querySelectorAll(".quick-add-btn");

    for (let i = 0; i < quickAddButtons.length; i++) {
        quickAddButtons[i].addEventListener("click", function (event) {

            event.stopPropagation();

            const productId = Number(quickAddButtons[i].dataset.productId);

            let selectedProduct = null;
            for (let j = 0; j < products.length; j++) {
                if (products[j].id === productId) {
                    selectedProduct = products[j];
                }
            }

            if (selectedProduct === null) {
                return;
            }

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const defaultSize = "M";

            let alreadyInCart = false;

            for (let k = 0; k < cart.length; k++) {
                if (cart[k].id === selectedProduct.id && cart[k].size === defaultSize) {
                    cart[k].quantity = Number(cart[k].quantity) + 1;
                    alreadyInCart = true;
                }
            }

            if (!alreadyInCart) {
                cart.push({
                    id: selectedProduct.id,
                    name: selectedProduct.name,
                    price: selectedProduct.price,
                    image: selectedProduct.image,
                    size: defaultSize,
                    quantity: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            quickAddButtons[i].textContent = "Added ✓";

            setTimeout(function () {
                quickAddButtons[i].textContent = "Add to Cart";
            }, 1500);
        });
    }
}
