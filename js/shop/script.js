// Paginacja
const products = document.querySelectorAll(".product-card");
const productsPerPage = 12;

let currentPage = 1;

function showPage(page) {
    const start = (page -1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {
        if (index >= start && index < end) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });

    document.getElementById("page-info").textContent =
    `Strona ${page} z ${Math.ceil(products.length / productsPerPage)}`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

showPage(currentPage);