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
        alert(`Dodano ${qty} szt. za ${(price * qty).toFixed(2)} zł`);
        modal.style.display = "none";

        // 👉 TU PÓŹNIEJ PODŁĄCZYMY PRAWDZIWY KOSZYK
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});