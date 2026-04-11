document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".product-accordion");

    accordions.forEach((accordion) => {
        const btn = accordion.querySelector(".accordion-btn");
        const content = accordion.querySelector(".accordion-content");

        btn.addEventListener("click", () => {
            const isOpen = btn.classList.contains("active");

            accordions.forEach((other) => {
                const otherBtn = other.querySelector(".accordion-btn");
                const otherContent = other.querySelector(".accordion-content");

                if (otherBtn !== btn) {
                    otherBtn.classList.remove("active");
                    otherContent.style.maxHeight = "0px";
                }
            });

            if (isOpen) {
                btn.classList.remove("active");
                content.style.maxHeight = "0px";
            } else {
                btn.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("cartModal");
    const openBtn = document.querySelector(".buy-btn");

    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const qtyEl = document.getElementById("qty");

    const unitPriceEl = document.getElementById("unitPrice");
    const totalEl = document.getElementById("total");

    const closeBtn = document.getElementById("closeCart");
    const confirmBtn = document.getElementById("addToCartConfirm");

    const price = 59.99; // 🔥 cena produktu

    let qty = 1;

    function update() {
        qtyEl.textContent = qty;
        unitPriceEl.textContent = price.toFixed(2);
        totalEl.textContent = (price * qty).toFixed(2);
    }

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        qty = 1;
        update();
    });

    plus.addEventListener("click", () => {
        qty++;
        update();
    });

    minus.addEventListener("click", () => {
        if (qty > 1) qty--;
        update();
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
        const toast = document.getElementById("cart-toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
        modal.style.display = "none";


    });

});


document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("cartModal");
    const openBtn = document.querySelector(".buy-btn");

    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const qtyEl = document.getElementById("qty");
    const totalEl = document.getElementById("total");

    const closeBtn = document.getElementById("closeCart");
    const confirmBtn = document.getElementById("addToCartConfirm");

    const cartTotalEl = document.getElementById("cart-total");
    const cartCountEl = document.getElementById("cart-count");

    const price = 59.99;
    let qty = 1;

    let cart = JSON.parse(localStorage.getItem("cart")) || {
        count: 0,
        total: 0
    };

    function updateModal() {
        qtyEl.textContent = qty;
        totalEl.textContent = (qty * price).toFixed(2);
    }

    function updateNavbar() {
        cartTotalEl.textContent = cart.total.toFixed(2) + " zł";
        cartCountEl.textContent = `(${cart.count})`;
    }

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        qty = 1;
        updateModal();
    });

    plus.addEventListener("click", () => {
        qty++;
        updateModal();
    });

    minus.addEventListener("click", () => {
        if (qty > 1) qty--;
        updateModal();
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    confirmBtn.addEventListener("click", () => {
        cart.count += qty;
        cart.total += qty * price;

        localStorage.setItem("cart", JSON.stringify(cart));

        updateNavbar();
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    updateNavbar();

});