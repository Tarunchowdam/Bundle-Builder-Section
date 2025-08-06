# Bundle Builder UI

This project is a **static "Bundle Builder" interface** inspired by Shopify's custom bundle section. Built using **HTML, CSS, and JavaScript**, it allows users to select products, track progress, see dynamic pricing, and more.

##  Live Demo

🔗 [View on Netlify](https://bundle-builder-section-tarun.netlify.app/)

---

## Folder Structure
├── index.html             # Main HTML file
├── style.css              # All styling using custom CSS
├── script.js              # JavaScript for interactive behavior
└── assets/                # Product images
    ├── product1.jpg
    ├── product2.jpg
    ├── product3.jpg
    ├── product4.jpg
    ├── product5.jpg
    └── product6.jpg

---

##  Features Implemented

- ✅ **Responsive product grid** (6 cards)
- ✅ Toggle-style “Add to Bundle” buttons
- ✅ **Dynamic sidebar** with:
  - Progress bar (e.g., 2/3 items selected)
  - Thumbnails, names, prices of selected products
  - Subtotal with **30% discount** after selecting 3+ products
- ✅ **"Add Bundle to Cart"** button enabled at 3+ selections
- ✅ Mobile-friendly layout:
  - Product grid stacks vertically
  - Sidebar adapts below or sticky

---

##  How to Run Locally

1. Clone the repository or download the zip:
    ```bash
    git clone https://github.com/your-username/bundle-builder.git
    ```

2. Navigate to the folder:
    ```bash
    cd bundle-builder
    ```

3. Open `index.html` in your browser.

---

##  Deploying on Netlify

Want to host it like this? 👉 [https://bundle-builder-section-tarun.netlify.app](https://bundle-builder-section-tarun.netlify.app)

### Step-by-Step Guide:

1. **Go to** [https://app.netlify.com/](https://app.netlify.com/)
2. Sign in with GitHub or Email
3. Click `Add New Site` → `Import from Git`
4. Select your GitHub repo with the project
5. Set build command to _empty_ (since this is a static site)
6. Set publish directory as `/bundle-builder/`
7. Click **Deploy Site**

✅ Once deployed, Netlify will give you a live link. You can also change the name under **Site Settings → Domain Management**.

---

##  Tech Stack

- HTML5 (Semantic structure)
- CSS3 (Custom styling, responsiveness)
- JavaScript (Pure vanilla JS, no frameworks)

---

##  Notes

- No frameworks (like React/Vue)
- No external JS libraries (e.g., jQuery)
- Pure front-end simulation — no cart or checkout logic
- Designed to match layout, spacing, and interactivity closely with provided Figma mockup

---

##  Optional Stretch Goals (To Try)

- Quantity stepper for each product
- Animated toggle buttons
- Deselect/remove items directly from sidebar
- Simulated cart view on CTA click

---

## 👤 Author

**Tarunchowdam (bundle-builder-section-tarun.netlify.app)**  
Feel free to reach out if you'd like to collaborate or connect!


