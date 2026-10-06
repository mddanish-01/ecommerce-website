// ===== products.html ka JS =====
// Ye file script.js ke BAAD load hoti hai,
// isliye "products" array yahan seedha use kar sakte hain.


// STEP 1: HTML me jahan cards dikhane hain, wo jagah dhundo
const productsGrid = document.querySelector("#products-grid");


// STEP 2: Ye code sirf products page pe chalna chahiye
// (baaki pages pe #products-grid hota hi nahi)
if (productsGrid) {

    // STEP 3: Baaki elements dhundo (title, description, count)
    const pageTitle = document.querySelector("#page-title");
    const pageDescription = document.querySelector("#page-description");
    const productsCount = document.querySelector("#products-count");


    // STEP 4: URL se category nikalo
    // Agar URL hai products.html?category=tshirts
    // to selectedCategory = "tshirts" ban jaayega
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category");


    // STEP 5: Category ke naam (title aur card me dikhane ke liye)
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


    // STEP 6: Sirf wahi products chuno jo is category ke hain
    let filteredProducts = [];

    if (selectedCategory) {
        // category mili, to filter karo
        filteredProducts = products.filter(function (item) {
            return item.subcategory === selectedCategory;
        });
    } else {
        // category nahi mili, to saare products dikhao
        filteredProducts = products;
    }


    // STEP 7: Page ka title aur count set karo
    let title = "All Products";

    if (selectedCategory && categoryNames[selectedCategory]) {
        title = categoryNames[selectedCategory];
    }

    pageTitle.textContent = title;
    pageDescription.textContent = "Explore our latest collection.";
    productsCount.textContent = filteredProducts.length + " Products";


    // STEP 8: Cards banao
    productsGrid.innerHTML = "";   // pehle grid khali karo

    if (filteredProducts.length === 0) {
        // koi product nahi mila
        productsGrid.innerHTML = "<p>No products found.</p>";
    } else {
        // har product ke liye ek card banao
        for (let i = 0; i < filteredProducts.length; i++) {

            const item = filteredProducts[i];

            // card pe chhota category naam (jaise "T-Shirts")
            let subcategoryName = categoryNames[item.subcategory];
            if (!subcategoryName) {
                subcategoryName = item.subcategory;
            }

            // card ka HTML, ${...} ki jagah product ki value aa jaati hai
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


    // STEP 9: Card pe click karne par product page kholo
    // (cards upar ban chuke hain, isliye ab unhe dhund sakte hain)
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