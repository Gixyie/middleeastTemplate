document.addEventListener("DOMContentLoaded", function () {
  const addToBasketBtn = document.getElementById("basket");
  const quantityInput = document.getElementById("quantity");
  const priceElement = document.getElementById("price");
  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartContent = document.getElementById("cart-content");

  // Quando clicchi su "Add to basket"
  addToBasketBtn.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(priceElement.textContent);
    const title = document.querySelector(".text-side h2").textContent;

    if (quantity > 0) {
      // Costruzione del contenuto da mostrare nel carrello
      const itemHTML = `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
          <strong>${title}</strong><br>
          Quantità: ${quantity}<br>
          Prezzo totale: €${(price * quantity).toFixed(2)}
        </div>
      `;

      cartContent.innerHTML = itemHTML; // Sovrascrive per ora
      cartSidebar.style.display = "block"; // Mostra il carrello
    }
  });

  // Quando clicchi sull'icona del carrello
  cartIcon.addEventListener("click", () => {
    const currentDisplay = cartSidebar.style.display;
    cartSidebar.style.display = currentDisplay === "none" ? "block" : "none";
  });
});

 // Funzione per aggiornare il carrello
  function renderCart() {
    cartContent.innerHTML = ""; // pulisce
    cartItems.forEach(item => {
      const totalPrice = (item.price * item.quantity).toFixed(2);
      cartContent.innerHTML += `
        <div style="margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
          <strong>${item.title}</strong><br>
          Quantità: ${item.quantity}<br>
          Prezzo totale: €${totalPrice}
        </div>
      `;
    });
}
const closeButton = document.getElementById("close-cart");
const cartSidebar = document.getElementById("cart-sidebar");
// chiudi carrello con x
closeButton.addEventListener("click", () => {
  cartSidebar.style.display = "none";
});


const imageList = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentImageIndex = 0;

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");

document.querySelector(".clickable-img").addEventListener("click", () => {
  modal.style.display = "flex";
  modalImg.src = imageList[currentImageIndex];
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("prev").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
  modalImg.src = imageList[currentImageIndex];
});

document.getElementById("next").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  modalImg.src = imageList[currentImageIndex];
});
