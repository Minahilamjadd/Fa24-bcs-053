document.addEventListener("DOMContentLoaded", () => {
  let cart = [];
  const maxLimit = (5 % 4) + 2; // 3 items max per product

  const cartToggle = document.getElementById("cartToggle");
  const miniCartPanel = document.getElementById("miniCartPanel");
  const cartBadge = document.querySelector(".cart-badge");
  const miniCartItems = document.getElementById("miniCartItems");
  const miniCartTotal = document.getElementById("miniCartTotal");

  // Toggle mini-cart panel on cart icon click
  if (cartToggle && miniCartPanel) {
    cartToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = miniCartPanel.style.display === "block";
      miniCartPanel.style.display = isVisible ? "none" : "block";
    });
  }

  // Handle "Add to Cart" buttons
  const addButtons = document.querySelectorAll(".btn-cart");
  addButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card") || e.target.closest(".col");
      if (!card) return;

      const nameEl = card.querySelector(".name a") || card.querySelector(".pd-title") || card.querySelector("h3");
      const priceEl = card.querySelector(".price-row span") || card.querySelector(".price") || card.querySelector("del");
      
      const productName = nameEl ? nameEl.innerText.trim() : "Product";
      const priceText = priceEl ? priceEl.innerText.replace(/[^0-9]/g, "") : "1000";
      const productPrice = parseInt(priceText, 10) || 1000;

      const existingItem = cart.find(item => item.name === productName);
      const currentCount = existingItem ? existingItem.qty : 0;

      if (currentCount >= maxLimit) return;

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        cart.push({ name: productName, price: productPrice, qty: 1 });
      }

      updateCartUI();
      updateButtonStates(btn, productName);
    });
  });

  function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartBadge) cartBadge.innerText = totalQty;

    if (miniCartItems && miniCartTotal) {
      miniCartItems.innerHTML = "";
      if (cart.length === 0) {
        miniCartItems.innerHTML = "<p class='text-muted mb-0'>Your cart is empty.</p>";
        miniCartTotal.innerText = "Rs. 0";
        return;
      }

      let totalPrice = 0;
      cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        totalPrice += itemTotal;

        const row = document.createElement("div");
        row.className = "d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom";
        row.innerHTML = `
          <div>
            <div class="fw-bold">${item.name}</div>
            <small class="text-muted">Rs. ${item.price.toLocaleString()} × ${item.qty}</small>
          </div>
          <button class="btn btn-sm btn-outline-danger rounded-0 remove-item" data-index="${index}">&times;</button>
        `;
        miniCartItems.appendChild(row);
      });

      miniCartTotal.innerText = `Rs. ${totalPrice.toLocaleString()}`;

      document.querySelectorAll(".remove-item").forEach(removeBtn => {
        removeBtn.addEventListener("click", (evt) => {
          const idx = parseInt(evt.target.getAttribute("data-index"), 10);
          const removedItem = cart[idx];
          
          if (removedItem.qty > 1) {
            removedItem.qty -= 1;
          } else {
            cart.splice(idx, 1);
          }

          updateCartUI();
          resetButtonStateForProduct(removedItem.name);
        });
      });
    }
  }

  function updateButtonStates(btn, productName) {
    const item = cart.find(i => i.name === productName);
    if (item && item.qty >= maxLimit) {
      btn.innerText = "Limit reached";
      btn.setAttribute("disabled", "true");
      btn.classList.add("btn-secondary");
      btn.classList.remove("btn-dark");
    }
  }

  function resetButtonStateForProduct(productName) {
    addButtons.forEach(btn => {
      const card = btn.closest(".product-card") || btn.closest(".col");
      if (card) {
        const nameEl = card.querySelector(".name a") || card.querySelector(".pd-title") || card.querySelector("h3");
        if (nameEl && nameEl.innerText.trim() === productName) {
          btn.innerText = "Add to Cart";
          btn.removeAttribute("disabled");
          btn.classList.remove("btn-secondary");
          btn.classList.add("btn-dark");
        }
      }
    });
  }
});