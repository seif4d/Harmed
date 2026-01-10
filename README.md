<div align="center">
  <img src="images/logo/icon.png" alt="HarMed Logo" width="120" />
  <br />
  <h1>🩺 HarMed | Medical Luxury</h1>
  
  <p>
    <strong>Where Elegance Meets Functionality</strong><br>
    <em>الأناقة في ميدان العمل</em>
  </p>

  <p>
    <a href="https://seif4d.github.io/Harmed/">
      <img src="https://img.shields.io/badge/Live_Demo-Click_Here-D4AF37?style=for-the-badge&logo=github&logoColor=black" alt="Live Demo" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/WhatsApp_API-25D366?style=flat-square&logo=whatsapp&logoColor=white" />
  </p>
</div>

---

## 🌍 English Description

### 🚀 About The Project
**HarMed** is a high-end e-commerce web application dedicated to medical fashion. Unlike traditional static websites, HarMed operates as a **Dynamic Single-Page Interface**. It leverages Vanilla JavaScript to render product details, manage cart logic, and process orders via WhatsApp API without needing a backend server.

The project is built with a **Mobile-First** approach, featuring app-like interactions such as swipe galleries, bottom navigation bars, and sticky action buttons to ensure the best UX for healthcare professionals on the go.

### ✨ Key Features
*   **Dynamic Product Engine:** A single `product.html` file acts as a template. It automatically fetches and renders product data (Images, Prices, Descriptions, Colors) based on the URL parameter (e.g., `?id=zipper`).
*   **Smart WhatsApp Checkout:** The system calculates the total price based on quantity and formats the order details (Size, Color, Model) into a pre-filled WhatsApp message sent directly to the store owner.
*   **App-Like UX:**
    *   **Scroll Spy:** Bottom navigation automatically updates based on the visible section.
    *   **Swipe Gallery:** Touch-friendly image slider with dynamic dots.
    *   **Sticky Footer:** "Buy Now" button remains accessible at all times.
*   **Medical Themed UI:** Includes a custom **ECG (Heartbeat) Preloader** and a luxury Dark/Gold color scheme.
*   **Performance:** Optimized Lazy Loading logic and zero external dependencies.

### ⚙️ How It Works (The Logic)
1.  **Mini-Database:** All product data is stored in a JSON-like object `productsDB` inside `assets/js/product.js`.
2.  **Routing:** When a user clicks a product, they are redirected to `product.html?id=MODEL_NAME`.
3.  **Rendering:** JavaScript captures the ID, searches the DB, and injects the specific data into the DOM.

---

## 🇸🇦 الوصف بالعربية

### 🚀 عن المشروع
**HarMed** هو منصة ويب متطورة للملابس الطبية الفاخرة. تم تصميم المشروع ليكون أكثر من مجرد موقع عرض؛ هو **تطبيق ويب تفاعلي** يعمل بذكاء.

يعتمد الموقع على بنية برمجية ديناميكية، حيث يتم توليد صفحات المنتجات تلقائياً باستخدام الجافاسكريبت، مما يجعل الموقع سريعاً جداً وسهل الصيانة. كما يوفر نظام شراء مباشر يربط العميل بمالك المتجر عبر واتساب بضغطة زر.

### ✨ المميزات التقنية
*   **محرك منتجات ديناميكي:** لا حاجة لإنشاء 100 صفحة لـ 100 منتج. صفحة واحدة (`product.html`) تتشكل وتتغير محتوياتها وألوانها وصورها بناءً على رابط المنتج.
*   **نظام طلب ذكي:** يقوم الموقع بحساب السعر الإجمالي وتجهيز "فاتورة مبدئية" تتضمن (الموديل، اللون، المقاس، والعدد) وإرسالها لواتساب المتجر فوراً.
*   **تجربة مستخدم للهاتف (Mobile First):**
    *   شريط تنقل سفلي مثل التطبيقات (Bottom Nav).
    *   معرض صور يعمل بالسحب (Swipe).
    *   أزرار تفاعلية لاختيار الألوان والمقاسات.
*   **واجهة بصرية فاخرة:** شاشة تحميل (Preloader) بنبض القلب، وتصميم يعتمد على الألوان الداكنة والذهبية ليعكس هوية البراند.

### 📂 هيكلية الملفات (Folder Structure)

```text
Harmed/
├── index.html           # (Home) Landing Page
├── product.html         # (Template) Dynamic Product Page
├── assets/
│   ├── css/             # Styling files
│   └── js/              # Core Logic (main.js & product.js)
└── images/
    ├── products/        # Organized product images
        ├── classic/
        ├── round/
        └── ...
```

### 🔧 التعديل والإدارة (Configuration)

لإضافة منتج جديد أو تغيير الأسعار، لا تحتاج لتعديل كود HTML. فقط اذهب لملف `assets/js/product.js`:

1.  **تغيير رقم الواتساب:**
    ```javascript
    const phoneNumber = "201xxxxxxxxx";
    ```
2.  **إضافة منتج:**
    أضف بيانات المنتج الجديد داخل كائن `productsDB`، وسيظهر تلقائياً في الموقع عند ربطه.

---

## 👤 Author (المطور)

Developed with ❤️ and ☕ by **Seif**
*   **GitHub:** [@seif4d](https://github.com/seif4d)

<div align="center">
  <p>&copy; 2025 HarMed Medical Wear. All Rights Reserved.</p>
</div>
