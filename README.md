<div align="center">
  <img src="images/logo/icon.png" alt="HarMed Logo" width="120" />
  <br />
  <h1>🩺 HarMed | Medical Luxury</h1>
  <h3>Where Elegance Meets Function</h3>

  <p>
    <a href="https://seif4d.github.io/Harmed/">
      <img src="https://img.shields.io/badge/Live_Demo-Visit_Site-D4AF37?style=for-the-badge&logo=github&logoColor=black" alt="Live Demo" />
    </a>
    <img src="https://img.shields.io/badge/Status-Production_Ready-25D366?style=for-the-badge" alt="Status" />
  </p>
  <p>
    <a href="#-english"><strong>🇬🇧 English</strong></a> | 
    <a href="#-arabic"><strong>🇸🇦 العربية</strong></a>
  </p>
</div>

---
<div id="english"></div>
## 🇬🇧 English

## 📖 Overview
**HarMed** is a premium e-commerce web application designed specifically for healthcare professionals. It bridges the gap between high-end medical fashion and seamless digital utility.

Built with a **Mobile-First** mindset, the platform offers an app-like experience (SPA feel) without the overhead of complex frameworks. It features a sophisticated **Direct-to-WhatsApp** checkout system, eliminating the need for traditional payment gateways and account creation.

## 💡 The Technical Solution (Smart Logic)

Instead of creating static HTML pages for every single product—which is inefficient and hard to maintain—we engineered a **Dynamic Product Engine** using Vanilla JavaScript.

### How it Works 🧠
1.  **Single Template Architecture:** The entire store relies on one template file: `product.html`.
2.  **Smart Routing:** When a user clicks a product, the URL passes a unique ID (e.g., `?id=classic`).
3.  **Instant Rendering:** The JavaScript engine intercepts the URL parameter, fetches the specific data (Images, Colors, Prices, Description) from the internal `productsDB`, and renders the DOM instantly.

## ✨ Key Features

### 🎨 UI/UX Excellence
- **Luxury Aesthetic:** A deep black and gold theme conveying professionalism and quality.
- **Visual Effects:** Custom **ECG (Heartbeat) Preloader**, Smooth Scroll Reveals, and Glassmorphism elements.
- **App-Like Navigation:** Bottom Navigation Bar, Swipeable Image Galleries, and Sticky Action Buttons for easy one-thumb interaction.

### 🛠️ Core Functionality
- **🛒 Smart WhatsApp Checkout:** 
  The system captures user selection (Model, Color, Size, Quantity), automatically calculates the **Total Price**, and formats a professional order message sent directly via the **WhatsApp API**.
- **🎨 Dynamic Color Selection:** 
  The UI updates color names and active states dynamically based on user interaction.
- **⚡ High Performance:** 
  Zero dependencies, lightweight code, and Lazy Loading implementation for blazing-fast load times.

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![WhatsApp API](https://img.shields.io/badge/WhatsApp_API-25D366?style=flat&logo=whatsapp&logoColor=white)

## 📂 Folder Structure

The project is structured to separate Logic, UI, and Assets efficiently:

```text
Harmed/
├── index.html           # Main Landing Page
├── product.html         # Dynamic Product Template
├── README.md            # Documentation
└── assets/
    ├── css/             # Styles (main.css, product.css)
    └── js/              # Logic (main.js, product.js) <- The Brain 🧠
└── images/
    ├── logo/
    ├── ui/
    └── products/        # Product Images (Organized by Model)
        ├── classic/
        ├── round/
        ├── zipper/
        └── ...
```

## ⚙️ Configuration Guide

You can manage the entire store inventory and settings from `assets/js/product.js`.

### 1. Set Admin WhatsApp Number
To receive orders, update the `phoneNumber` variable at the top of `product.js`:
```javascript
const phoneNumber = "2010xxxxxxxx"; // Country Code + Number
```

### 2. Adding a New Product
No need to touch HTML! Just add a new object to the `productsDB`:
```javascript
"new_style": {
    name: "New Style Scrub",
    price: "700",
    description: "Description goes here...",
    colors: ["#000", "#FFF"],
    colorNames: ["Black", "White"],
    images: [
        "images/products/new_style/1.jpg",
        "images/products/new_style/2.jpg"
    ]
}
```
Then link it anywhere using: `product.html?id=new_style`.

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/seif4d/Harmed.git
   ```
2. **Open** `index.html` in any modern web browser.

## 📸 Screenshots

*(Add screenshots here)*

## 👤 Developer

Designed and Developed by: **Seif**
- **GitHub:** [@seif4d](https://github.com/seif4d)

---

<div align="center">
  <p>Made with ❤️ & ☕ for Healthcare Heroes</p>
  <p>&copy; 2025 HarMed Medical Wear.</p>
</div>

---

<div id="arabic"></div>

## 🇸🇦 العربية

## 📖 نظرة عامة (Overview)
**HarMed** ليس مجرد متجر إلكتروني تقليدي، بل هو **تطبيق ويب تفاعلي (Web App)** مصمم لتقديم تجربة تسوق فاخرة للأطباء والممارسين الصحيين.
تم بناء المشروع بـعقلية **Mobile-First**، حيث يعتمد على واجهة مستخدم تحاكي التطبيقات الأصلية (Native Apps) وتخلو من التعقيد، مع نظام "الطلب المباشر" الذي يربط العميل بالمتجر فوراً عبر واتساب.

## 💡 فكرة المشروع والحل التقني

بدلاً من بناء عشرات الصفحات لكل منتج (مما يزيد حجم الموقع ويصعب صيانته)، قمنا بتطوير **محرك منتجات ديناميكي (Dynamic Product Engine)** باستخدام **Vanilla JavaScript**.

### كيف يعمل؟ 🧠
1.  **صفحة واحدة للكل:** يوجد ملف واحد فقط لعرض المنتجات (`product.html`).
2.  **التوجيه الذكي:** عند الضغط على أي منتج، يتم إرسال "مُعرف" المنتج في الرابط (مثلاً: `?id=classic`).
3.  **جلب البيانات:** يقوم كود الجافاسكريبت بقراءة الرابط، البحث في قاعدة البيانات المحلية (`productsDB`)، ثم بناء الصفحة (الصور، النصوص، الأسعار، الألوان) في أجزاء من الثانية.

## ✨ المميزات الرئيسية (Key Features)

### 🎨 واجهة المستخدم (UI/UX)
- **تصميم فاخر (Premium Aesthetic):** دمج اللون الأسود العميق مع الذهبي ليعكس الفخامة.
- **تأثيرات بصرية:** شاشة تحميل مبتكرة بنبض القلب (**ECG Preloader**)، وحركات انسيابية عند التمرير (**Scroll Reveal**).
- **تجربة التطبيق:** شريط تنقل سفلي (Bottom Navigation)، معرض صور بالسحب (Swipe)، وأزرار عائمة (Sticky Actions).

### 🛠️ الوظائف التقنية (Functionality)
- **🛒 Smart WhatsApp Checkout:** 
  يقوم الموقع بجمع تفاصيل الطلب (المنتج، اللون، المقاس، الكمية)، ثم يحسب **السعر الإجمالي** تلقائياً، ويقوم بصياغة رسالة واتساب منسقة وجاهزة للإرسال بنقرة واحدة.
- **🎨 Color Logic:** 
  تغيير اسم اللون المعروض ديناميكياً عند الضغط على دائرة اللون.
- **⚡ أداء فائق:** 
  الموقع (Static) وسريع جداً، لا يعتمد على مكتبات ضخمة، ويستخدم تقنيات Lazy Loading للصور.

## 🛠️ التقنيات المستخدمة (Tech Stack)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![WhatsApp API](https://img.shields.io/badge/WhatsApp_API-25D366?style=flat&logo=whatsapp&logoColor=white)

## 📂 هيكلية المشروع (Folder Structure)

تم تنظيم المشروع ليفصل بين (الواجهة) و (البيانات) و (المنطق):

```text
Harmed/
├── index.html           # واجهة المتجر الرئيسية
├── product.html         # القالب الديناميكي للمنتج
├── README.md            # التوثيق
└── assets/
    ├── css/             # (main.css, product.css)
    └── js/              # (main.js, product.js) <- العقل المدبر للموقع
└── images/
    ├── logo/
    ├── ui/
    └── products/        # صور المنتجات منظمة في مجلدات
        ├── classic/
        ├── round/
        ├── zipper/
        └── ...
```

## ⚙️ دليل التعديل (Configuration Guide)

يمكنك إدارة محتوى الموقع بالكامل من خلال ملف `assets/js/product.js`.

### 1. ضبط رقم الواتساب
لاستقبال الطلبات على رقمك، عدل السطر الأول في `product.js`:
```javascript
const phoneNumber = "2010xxxxxxxx"; // كود الدولة + الرقم
```

### 2. إضافة منتج جديد
لا داعي لإنشاء ملفات HTML جديدة! فقط أضف كائن جديد في `productsDB`:
```javascript
"new_style": {
    name: "New Style Scrub",
    price: "700",
    description: "وصف المنتج...",
    colors: ["#000", "#FFF"],
    colorNames: ["Black", "White"],
    images: [
        "images/products/new_style/1.jpg",
        "images/products/new_style/2.jpg"
    ]
}
```
ثم استخدم الرابط: `product.html?id=new_style` في أي مكان بالموقع.

## 🚀 طريقة التشغيل (How to Run)

1. قم بتحميل المشروع:
   ```bash
   git clone https://github.com/seif4d/Harmed.git
   ```
2. افتح ملف `index.html` في المتصفح.

## 📸 معرض الصور (Screenshots)

*(مساحة لإضافة صور للموقع لاحقاً)*

## 👤 المطور (Developer)

تم التصميم والتطوير بواسطة: **سيف**
- **GitHub:** [@seif4d](https://github.com/seif4d)

---
<div align="center">
  <p>Made with ❤️ & ☕ for Healthcare Heroes</p>
  <p>&copy; 2025 HarMed Medical Wear.</p>
</div>
