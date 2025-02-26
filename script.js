document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title.substring(0, 20)}...</h3>
                    <p>${product.price} $</p>
                `;
                productCard.addEventListener("click", () => {
                    modalTitle.textContent = product.title;
                    modalDescription.textContent = product.description;
                    modal.style.display = "block";
                });
                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error("Veri çekme hatası:", error));
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});