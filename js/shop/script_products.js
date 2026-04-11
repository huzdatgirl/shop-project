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