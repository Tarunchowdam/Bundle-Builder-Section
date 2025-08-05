const productCards = document.querySelectorAll('.product-card');
const selectedProductsList = document.getElementById('selected-products-list');
const progressCount = document.getElementById('progress-count');
const progressBar = document.getElementById('progress-bar');
const discountSpan = document.getElementById('discount');
const subtotalSpan = document.getElementById('subtotal');
const bundleBtn = document.getElementById('bundle-btn');

let selectedProducts = [];

function updateSidebar() {
  // Clear sidebar
  selectedProductsList.innerHTML = '';
  let subtotal = 0;

  // Render selected products
  selectedProducts.forEach(product => {
    subtotal += product.price * product.qty;
    const row = document.createElement('div');
    row.className = 'selected-product-row';
    row.innerHTML = `
      <img src="${product.img}" alt="${product.title}" />
      <div class="selected-product-info">
        <span class="selected-product-title">${product.title}</span>
        <span class="selected-product-price">$${product.price.toFixed(2)}</span>
      </div>
      <div class="selected-product-controls">
        <button class="qty-btn" data-action="decrease">-</button>
        <span class="selected-product-qty">${product.qty}</span>
        <button class="qty-btn" data-action="increase">+</button>
      </div>
      <button class="remove-btn" title="Remove">  
        <svg width="20" height="20" viewBox="0 0 1024 1024" fill="none">
          <path d="M320 400v368c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V400" stroke="#888" stroke-width="48" stroke-linecap="round"/>
          <path d="M432 464v224M592 464v224" stroke="#888" stroke-width="48" stroke-linecap="round"/>
          <rect x="256" y="336" width="512" height="64" rx="32" fill="#888"/>
          <path d="M400 336V272c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32v64" stroke="#888" stroke-width="48"/>
        </svg>
      </button>
    `;

    // Quantity controls
    row.querySelector('[data-action="decrease"]').onclick = () => {
      if (product.qty > 1) {
        product.qty--;
        updateSidebar();
      }
    };
    row.querySelector('[data-action="increase"]').onclick = () => {
      product.qty++;
      updateSidebar();
    };
    // Remove button
    row.querySelector('.remove-btn').onclick = () => {
      selectedProducts = selectedProducts.filter(p => p.id !== product.id);
      // Unselect button in grid
      const gridBtn = document.querySelector(`.product-card[data-product-id="${product.id}"] .add-to-bundle-btn`);
      if (gridBtn) {
        gridBtn.classList.remove('selected');
        gridBtn.querySelector('span').textContent = 'Add to Bundle';
        gridBtn.querySelector('.icon').textContent = '+';
      }
      updateSidebar();
    };
    selectedProductsList.appendChild(row);
  });

  // Add placeholders for empty slots (always show 3 slots)
  const placeholders = 3 - selectedProducts.length;
  for (let i = 0; i < placeholders; i++) {
    const placeholder = document.createElement('div');
    placeholder.className = 'sidebar-placeholder';
    selectedProductsList.appendChild(placeholder);
  }

  // Progress bar
  //progressCount.textContent = `${selectedProducts.length}/3 added`;
  progressBar.style.width = `${Math.min(selectedProducts.length / 3, 1) * 100}%`;

  // Discount
  let discount = 0;
  let discountValue = 0;
  if (selectedProducts.length >= 3) {
    discount = 0.3;
    discountValue = subtotal * discount;
    discountSpan.textContent = `-$${discountValue.toFixed(2)} (30%)`;
  } else {
    discountSpan.textContent = `-$0.00 (30%)`;
  }

  // Subtotal
  let finalTotal = subtotal;
  if (discount) finalTotal = subtotal - discountValue;
  subtotalSpan.textContent = `$${finalTotal.toFixed(2)}`;

  // Enable/disable CTA
  bundleBtn.disabled = selectedProducts.length < 3;
  if (selectedProducts.length < 3) {
    bundleBtn.innerHTML = `<span>Add 3 Items to Proceed</span><span class="icon"></span>`;
  } else {
    bundleBtn.innerHTML = `<span>Add 3 items to Cart</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="icon">&gt</span>`;
  }
}

// Toggle product selection
productCards.forEach(card => {
  const btn = card.querySelector('.add-to-bundle-btn');
  btn.addEventListener('click', () => {
    const id = card.dataset.productId;
    const title = card.dataset.title;
    const price = parseFloat(card.dataset.price);
    const img = card.dataset.img;

    const index = selectedProducts.findIndex(p => p.id === id);
    if (index > -1) {
      // Deselect
      selectedProducts.splice(index, 1);
      btn.classList.remove('selected');
      btn.querySelector('span').textContent = 'Add to Bundle';
      btn.querySelector('.icon').textContent = '+';
    } else {
      // Select
    //   if (selectedProducts.length >= 3) {
    //   return; // Do nothing if already 3 selected
    // }
      selectedProducts.push({ id, title, price, img, qty: 1 });
      btn.classList.add('selected');
      btn.querySelector('span').textContent = 'Added to Bundle';
      btn.querySelector('.icon').textContent = '✓';
    }
    updateSidebar();
  });
});

// CTA button logs bundle
bundleBtn.addEventListener('click', () => {
  if (selectedProducts.length >= 3) {
    console.log('Bundle added:', selectedProducts);
    alert('Bundle added! Check the console for details.');
  }
});

updateSidebar();