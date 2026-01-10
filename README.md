# HarMed - Medical Luxury 🩺✨

**HarMed** is a modern, mobile-first e-commerce website designed for premium medical wear. It features a sleek UI, dynamic product rendering, and a direct-to-WhatsApp ordering system, providing a seamless shopping experience for healthcare professionals.

## 🌟 Key Features

*   **Mobile-First Design:** Optimized for smartphones with bottom navigation, swipeable galleries, and sticky action buttons.
*   **Dynamic Product Engine:** Uses a single `product.html` file to render unlimited products via JavaScript based on URL parameters (e.g., `?id=classic`).
*   **Direct WhatsApp Checkout:** Automatically formats orders (Product, Color, Size, Quantity, Total Price) and opens a WhatsApp chat with the store.
*   **Medical Themed UI:** Features a custom ECG (Heartbeat) Preloader and medical aesthetics (Gold & Black theme).
*   **Performance:** Lightweight, vanilla JavaScript (No heavy frameworks), and Lazy Loading techniques.
*   **Scroll Spy Navigation:** Auto-active navigation links based on the user's scroll position.

## 📂 Project Structure

Ensure your files are organized exactly like this for the images and styles to load correctly:

```text
HarMed-Project/
│
├── index.html           # Main Landing Page
├── product.html         # Dynamic Product Details Page
│
├── assets/
│   ├── css/
│   │   ├── main.css     # Styles for Home Page
│   │   └── product.css  # Styles for Product Page
│   │
│   └── js/
│       ├── main.js      # Logic for Home Page (Scroll, Preloader)
│       └── product.js   # Logic for Product Data & WhatsApp
│
└── images/
    ├── logo/
    │   └── icon.png
    ├── ui/
    │   └── bg.jpg       # Hero section background
    └── products/        # Product Images (Case Sensitive!)
        ├── classic/
        ├── round/
        ├── zipper/
        ├── halfneck/
        ├── halfneck2/
        ├── hijab/
        ├── polo/
        └── female/
```

## 🚀 How to Run

Since this is a static website, you don't need to install Node.js or databases.

1.  **Clone or Download** this repository.
2.  Open the project folder.
3.  Double-click `index.html` to open it in your browser.

## ⚙️ Configuration & Customization

### 1. Changing the WhatsApp Number
To receive orders on your phone, go to `assets/js/product.js` and update the variable at the top:

```javascript
// assets/js/product.js
const phoneNumber = "201000000000"; // Replace with your number (Country code + Number)
```

### 2. Adding/Editing Products
All product data is stored in the `productsDB` object inside `assets/js/product.js`. To add a new product:

1.  Add a new key to the object (e.g., `"newmodel"`).
2.  Fill in the details (name, price, images, colors).
3.  **Important:** Create a folder in `images/products/newmodel/` and add the images there.

```javascript
"newmodel": {
    name: "New Scrub Style",
    price: "700",
    description: "Description here...",
    colors: ["#000000"],
    colorNames: ["Black"],
    images: [
        "images/products/newmodel/cover.jpg",
        "images/products/newmodel/1.jpg"
    ]
}
```

### 3. Linking the New Product
In `index.html`, simply add a link with the ID you created:
```html
<a href="product.html?id=newmodel">View Details</a>
```

## ⚠️ Important Note on Images

**Linux servers (and GitHub Pages) are Case Sensitive.**
Ensure your folder names in the code match your actual folder names exactly.
*   ❌ Code: `images/products/HalfNeck/...` | Folder: `halfneck`
*   ✅ Code: `images/products/halfneck/...` | Folder: `halfneck`

**Recommendation:** Keep all folder names and extensions in **lowercase** (`.jpg`, not `.JPG`).

## 🛠️ Technologies Used

*   **HTML5** (Semantic Structure)
*   **CSS3** (Flexbox, Grid, Glassmorphism, Animations)
*   **JavaScript** (ES6+, DOM Manipulation, URLSearchParams)
*   **FontAwesome** (Icons)
*   **Google Fonts** (Cairo & Playfair Display)

## 📞 Contact

**HarMed Medical Wear**
*   *Be Unique... Be Elegant.*

---
*Developed with ❤️ by Seif X DebiaN*
