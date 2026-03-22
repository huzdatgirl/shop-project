// Paginacja

const allProducts = Array.from(document.querySelectorAll(".product-card"));
let filteredProducts = [...allProducts];

const productsPerPage = 15;
let currentPage = 1;

const searchInput = document.getElementById("searchInput");

function showPage(page) {

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    allProducts.forEach(product => product.style.display = "none");

    filteredProducts.forEach((product, index) => {
        if (index >= start && index < end) {
            product.style.display = "block";
        }
    });

    renderPageNumbers(totalPages);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function renderPageNumbers(totalPages) {
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

    if (totalPages === 0) {
        container.textContent = "Brak wyników";
    }
}

document.getElementById("next").addEventListener("click", () => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    filteredProducts = allProducts.filter(product => {
        const text = product.textContent.toLowerCase();
        return text.includes(query);
    });

    currentPage = 1;
    showPage(currentPage);
});

showPage(currentPage);