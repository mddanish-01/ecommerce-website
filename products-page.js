const productsGrid = document.querySelector("#products-grid");

if (productsGrid) {

    const pageTitle = document.querySelector("#page-title");
    const pageDescription = document.querySelector("#page-description");
    const productsCount = document.querySelector("#products-count");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const sortSelect = document.querySelector("#sort-select");

    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category");
    const searchText = params.get("search");

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

    let activeFilter = "all";
    let activeSort = "featured";


    function getProducts() {

        let list = products.slice();

        if (searchText) {
            const text = searchText.toLowerCase();

            list = list.filter(function (item) {
                const name = (item.name || "").toLowerCase();
                const sub = (item.subcategory || "").toLowerCase();
                return name.includes(text) || sub.includes(text);
            });

        } else if (selectedCategory) {
            list = list.filter(function (item) {
                return item.subcategory === selectedCategory;
            });
        }

        if (activeFilter !== "all") {
            list = list.filter(function (item) {
                return item.category === activeFilter;
            });
        }

        if (activeSort === "low") {
            list.sort(function (a, b) {
                return a.price - b.price;
            });
        } else if (activeSort === "high") {
            list.sort(function (a, b) {
                return b.price - a.price;
            });
        } else if (activeSort === "newest") {
            list.sort(function (a, b) {
                return b.id - a.id;
            });
        }

        return list;
    }


    function showProducts() {

        const list = getProducts();

        if (pageTitle) {
            let title = "All Products";

            if (searchText) {
                title = "Results for “" + searchText + "”";
            } else if (selectedCategory && categoryNames[selectedCategory]) {
                title = categoryNames[selectedCategory];
            }

            pageTitle.textContent = title;
        }

        if (pageDescription) {
            pageDescription.textContent = "Explore our latest collection.";
        }

        if (productsCount) {
            productsCount.textContent = list.length + " Products";
        }

        productsGrid.innerHTML = "";

        if (list.length === 0) {
            productsGrid.innerHTML = "<p>No products found.</p>";
            return;
        }

        for (let i = 0; i < list.length; i++) {

            const item = list[i];

            let subcategoryName = categoryNames[item.subcategory];
            if (!subcategoryName) {
                subcategoryName = item.subcategory;
            }

            productsGrid.innerHTML += `
                <article class="product-card" data-product-id="${item.id}">
                    <div class="product-image">
                        <button class="wishlist-btn">♡</button>
                        <img src="${item.image}" alt="${item.name}">
                        <button class="quick-add-btn">Add to Cart</button>
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

        syncWishlistButtons();
    }


    productsGrid.addEventListener("click", function (event) {

        const card = event.target.closest(".product-card");

        if (!card) {
            return;
        }

        if (event.target.closest(".wishlist-btn")) {
            return;
        }

        const quickBtn = event.target.closest(".quick-add-btn");

        if (quickBtn) {
            addQuickToCart(card.dataset.productId);

            quickBtn.textContent = "Added ✓";

            setTimeout(function () {
                quickBtn.textContent = "Add to Cart";
            }, 1500);

            return;
        }

        window.location.href = "product.html?id=" + card.dataset.productId;
    });


    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            activeFilter = button.dataset.filter;

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            showProducts();
        });
    });


    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            activeSort = sortSelect.value;
            showProducts();
        });
    }


    showProducts();
}