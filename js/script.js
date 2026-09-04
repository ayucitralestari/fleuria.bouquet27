document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // FILTER PRODUK
    // ==============================

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const products =
        document.querySelectorAll(".product-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");


            const category =
                this.getAttribute("data-category");


            products.forEach(product => {

                const productCategory =
                    product.getAttribute("data-category");


                if (
                    category === "all" ||
                    category === productCategory
                ) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });



    // ==============================
    // FAVORITE
    // ==============================

    const favoriteButtons =
        document.querySelectorAll(".favorite");


    favoriteButtons.forEach(button => {

        button.addEventListener("click", function () {

            if (this.classList.contains("liked")) {

                this.classList.remove("liked");

                this.textContent = "♡";

            } else {

                this.classList.add("liked");

                this.textContent = "♥";

            }

        });

    });



    // ==============================
    // MOBILE MENU
    // ==============================

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navMenu =
        document.querySelector(".nav-menu");


    mobileMenu.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-active");

    });


});