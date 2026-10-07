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

            // agar heart button dabaya, to product page mat kholo
            if (event.target.classList.contains("wishlist-btn")) {
                return;
            }

            const productId = cards[i].dataset.productId;
            window.location.href = "product.html?id=" + productId;
        });
    }
}