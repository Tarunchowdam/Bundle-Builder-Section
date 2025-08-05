# Bundle Builder (Static UI)

This is a static **"Bundle Builder" UI** built using **HTML, CSS, and JavaScript**, inspired by Shopify's custom bundle section. It allows users to select products, view bundle progress, see discount calculations, and proceed with the selection — all simulated on the frontend.

---

## 📸 Preview

> A responsive product bundle builder with dynamic sidebar and discount logic — fully mobile-friendly!

---

## 📁 Folder Structure
bundle-builder/
├── index.html # Main HTML file


├── style.css # All styling using custom CSS


├── script.js # JavaScript for interactive behavior


└── assets/ # Product images & icons


├── product-1.jpg


├── product-2.jpg


├── ...

---

##  How to Run This Project

1. **Download the Project**
   - Clone the repo or [download the ZIP](#) and extract it.

2. **Open the Project**
   - Open the folder in your preferred code editor (VS Code, Sublime, etc.).

3. **View in Browser**
   - Simply open `index.html` in any web browser (Chrome, Firefox, etc.).

---

##  Features

### Product Grid
- 6 product cards with:
  - Image, title, and price.
  - Toggle-style **“Add to Bundle”** buttons.

### Bundle Sidebar
- Progress bar indicating how many products selected (e.g. 2/3 added).
- List of selected products with thumbnail, title, and price.
- **30% Discount** applied automatically when 3 or more products selected.
- Final **Subtotal** with discount shown.
- **"Add Bundle to Cart"** button:
  - Only enabled when 3+ products are selected.
  - Logs selected bundle to console on click.

### Mobile-Friendly
- Product grid stacks vertically.
- Sidebar becomes sticky or stacks below on smaller screens.

---

##  Simulated Logic (No Backend)
- Interactions are handled via **vanilla JavaScript** (no jQuery, no frameworks).
- Cart or checkout are not implemented — just console logs.

---

## Optional Stretch Features (Not Included Yet)
You can extend this project by:
- Adding quantity steppers per product.
- Animating the “Added ✓” button.
- Allowing removal of items from the sidebar.
- Showing a full cart modal view.

---

## Code Style & Guidelines
- Clean, semantic HTML5
- Fully commented JavaScript and CSS
- Responsive design using Flexbox and Media Queries

---

## Credits

- Icons and images are placeholders.
- Design inspired by Shopify's Bundle Builder UX.

---

## 📝 License

This is a assignment project. No license is enforced.


