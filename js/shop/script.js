// Paginacja

const products = document.querySelectorAll(".product-card");
const productsPerPage = 15;

let currentPage = 1;
const totalPages = Math.ceil(products.length / productsPerPage);

function showPage(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {
        if (index >= start && index < end) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });

    renderPageNumbers();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function renderPageNumbers() {
    const container = document.getElementById("page-info");
    container.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;

        if (i === currentPage) {
            btn.classList.add("active");
        }

        btn.addEventListener("click", () => {
            currentPage = i;
            showPage(currentPage);
        });

        container.appendChild(btn);
    }
}

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < totalPages) {
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