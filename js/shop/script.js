// // Paginacja

// const allProducts = Array.from(document.querySelectorAll(".product-card"));
// let filteredProducts = [...allProducts];

// const productsPerPage = 15;
// let currentPage = 1;

// const searchInput = document.getElementById("searchInput");

// function showPage(page) {

//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const start = (page - 1) * productsPerPage;
//     const end = start + productsPerPage;

//     allProducts.forEach(product => product.style.display = "none");

//     filteredProducts.forEach((product, index) => {
//         if (index >= start && index < end) {
//             product.style.display = "block";
//         }
//     });

//     renderPageNumbers(totalPages);

//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

// function renderPageNumbers(totalPages) {
//     const container = document.getElementById("page-info");
//     container.innerHTML = "";

//     for (let i = 1; i <= totalPages; i++) {
//         const btn = document.createElement("button");
//         btn.textContent = i;

//         if (i === currentPage) {
//             btn.classList.add("active");
//         }

//         btn.addEventListener("click", () => {
//             currentPage = i;
//             showPage(currentPage);
//         });

//         container.appendChild(btn);
//     }

//     if (totalPages === 0) {
//         container.textContent = "Brak wyników";
//     }
// }

// document.getElementById("next").addEventListener("click", () => {
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     if (currentPage < totalPages) {
//         currentPage++;
//         showPage(currentPage);
//     }
// });

// document.getElementById("prev").addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         showPage(currentPage);
//     }
// });

// searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase();

//     filteredProducts = allProducts.filter(product => {
//         const text = product.textContent.toLowerCase();
//         return text.includes(query);
//     });

//     currentPage = 1;
//     showPage(currentPage);
// });

// showPage(currentPage);


// const categoryLinks = document.querySelectorAll(".categories a");

// let selectedCategory = "all";

// categoryLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();

//         selectedCategory = link.dataset.category;

//         filterProducts();
//     });
// });


// // Wszystkie produkty w tablicy
// const allProducts = Array.from(document.querySelectorAll(".product-card"));
// let filteredProducts = [...allProducts];

// const productsPerPage = 15;
// let currentPage = 1;

// const searchInput = document.getElementById("searchInput");

// // Aktualnie wybrana kategoria
// let selectedCategory = "";

// // Pokazuje produkty na stronie
// function showPage(page) {
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const start = (page - 1) * productsPerPage;
//     const end = start + productsPerPage;

//     allProducts.forEach(product => product.style.display = "none");

//     filteredProducts.forEach((product, index) => {
//         if (index >= start && index < end) {
//             product.style.display = "block";
//         }
//     });

//     renderPageNumbers(totalPages);

//     window.scrollTo({ top: 0, behavior: "smooth" });
// }

// // Renderuje numery stron
// function renderPageNumbers(totalPages) {
//     const container = document.getElementById("page-info");
//     container.innerHTML = "";

//     if (totalPages === 0) {
//         container.textContent = "Brak wyników";
//         return;
//     }

//     for (let i = 1; i <= totalPages; i++) {
//         const btn = document.createElement("button");
//         btn.textContent = i;

//         if (i === currentPage) btn.classList.add("active");

//         btn.addEventListener("click", () => {
//             currentPage = i;
//             showPage(currentPage);
//         });

//         container.appendChild(btn);
//     }
// }

// // Filtrowanie produktów (po wyszukiwaniu i kategorii)
// function filterProducts() {
//     const query = searchInput.value.toLowerCase();

//     filteredProducts = allProducts.filter(product => {
//         const textMatch = product.querySelector("h4").textContent.toLowerCase().includes(query);
//         const categoryMatch = selectedCategory ? product.dataset.category === selectedCategory : true;
//         return textMatch && categoryMatch;
//     });

//     currentPage = 1;
//     showPage(currentPage);
// }

// // Obsługa przycisków Next/Prev
// document.getElementById("next").addEventListener("click", () => {
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         showPage(currentPage);
//     }
// });

// document.getElementById("prev").addEventListener("click", () => {
//     if (currentPage > 1) {
//         currentPage--;
//         showPage(currentPage);
//     }
// });

// // Obsługa wyszukiwania
// searchInput.addEventListener("input", filterProducts);

// // Obsługa kategorii
// const categoryLinks = document.querySelectorAll(".categories ul li a");
// categoryLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();

//         // Pobieramy kategorię z tekstu linku
//         selectedCategory = link.textContent.trim();

//         // Podświetlenie aktywnej kategorii
//         categoryLinks.forEach(l => l.classList.remove("active"));
//         link.classList.add("active");

//         filterProducts();
//     });
// });

// // Start
// showPage(currentPage);

const allProducts = Array.from(document.querySelectorAll(".product-card"));
let filteredProducts = [...allProducts];

const productsPerPage = 15;
let currentPage = 1;

const searchInput = document.getElementById("searchInput");
const categoryLinks = document.querySelectorAll(".categories a");
let selectedCategory = ""; // "" oznacza "Wszystko"

// Funkcja pokazująca produkty na stronie
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

// Funkcja generująca numery stron
function renderPageNumbers(totalPages) {
    const container = document.getElementById("page-info");
    container.innerHTML = "";

    if (totalPages === 0) {
        container.textContent = "Brak wyników";
        return;
    }

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

// Funkcja filtrująca produkty według kategorii i wyszukiwania
function filterProducts() {
    const query = searchInput.value.toLowerCase();

    filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory ? product.dataset.category === selectedCategory : true;
        const matchesSearch = product.textContent.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    currentPage = 1;
    showPage(currentPage);
}

// Obsługa przycisków Next / Prev
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

// Obsługa wyszukiwania
searchInput.addEventListener("input", () => {
    filterProducts();
});

// Obsługa kliknięć w kategorie
categoryLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const category = link.textContent.trim();

        if (category.toLowerCase() === "wszystko") {
            selectedCategory = "";
        } else {
            selectedCategory = category;
        }

        // podświetlenie aktywnej kategorii
        categoryLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        filterProducts();
    });
});

// Start - pokaz pierwszą stronę
showPage(currentPage);
