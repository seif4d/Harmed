// --- 1. قاعدة بيانات المنتجات ---
const productsDB = {
    
    // 1. Classic V-Neck (Harmed V Neck)
    "classic": {
        name: "Classic V-Neck Scrub",
        price: "500", 
        description: "It’s a super classic v-neck with perfect fit around your neck to permit breathing of your skin.",
        colors: ["#000000", "#000080", "#808000", "#808080", "#967444", "#4169E1", "#FFC0CB", "#98FF98", "#008080", "#005F6A", "#40E0D0"],
        colorNames: ["Black", "Dark Blue", "Olive", "Grey", "Kamoni", "Blue", "Pink", "Mint Green", "Genzeri", "Petroleum", "Terkuwazi"],
        images: [
            "images/products/Classic-v-neck/cover.jpg",
            "images/products/Classic-v-neck/9.jpg",
            "images/products/Classic-v-neck/1.jpg",
            "images/products/Classic-v-neck/7.jpg",
            "images/products/Classic-v-neck/3.jpg",
            "images/products/Classic-v-neck/5.jpg",
            "images/products/Classic-v-neck/8.jpg",
            "images/products/Classic-v-neck/4.jpg",
            "images/products/Classic-v-neck/2.jpg",
            "images/products/Classic-v-neck/10.jpg"
        ]
    },

    // 2. Half Neck Style 1
    "halfneck": {
        name: "Half Neck Style",
        price: "650",
        description: "It’s our unique half neck style with capsule or zipper to be elegant.",
        colors: ["#000000", "#005F6A", "#000080", "#800020", "#808080", "#ADD8E6", "#808000", "#F5F5DC"],
        colorNames: ["Black", "Petroleum", "Dark Blue", "Burgundy", "Grey", "White Blue", "Olive", "Beige"],
        images: [
            "images/products/HalfNeck/1.jpg",
            "images/products/HalfNeck/2.jpg",
            "images/products/HalfNeck/3.jpg",
            "images/products/HalfNeck/4.jpg",
            "images/products/HalfNeck/5.jpg",
            "images/products/HalfNeck/6.jpg",
            "images/products/HalfNeck/7.jpg",
            "images/products/HalfNeck/8.jpg",
            "images/products/HalfNeck/9.jpg",
            "images/products/HalfNeck/10.jpg"

        ]
    },

    // 3. Half Neck Style 2
    "halfneck2": {
        name: "Half Neck Pro",
        price: "650",
        description: "Where quality meets design this will lead to our unique half neck style tailored for long shifts.",
        colors: ["#000000", "#800020", "#4169E1", "#000080", "#005F6A", "#98FF98", "#EE82EE", "#8B0000", "#FFC0CB", "#808000", "#4B5320"],
        colorNames: ["Black", "Burgundy", "Blue", "Dark Blue", "Petroleum", "Mint Green", "Violet", "Dark Red", "Pink", "Olive", "Geyshi"],
        images: [
            "images/products/HalfNeck2/1.jpg",
            "images/products/HalfNeck2/2.jpg",
            "images/products/HalfNeck2/3.jpg",
            "images/products/HalfNeck2/4.jpg"
        ]
    },

    // 4. Hijab Scrubs
    "hijab": {
        name: "Hijab Scrub",
        price: "650",
        description: "For all ladies with Hijab to feel more comfortable and modest.",
        colors: ["#000000", "#808000", "#000080"],
        colorNames: ["Black", "Olive", "Dark Blue"],
        images: [
            "images/products/hijab/1.jpg",
            "images/products/hijab/2.jpg",
            "images/products/hijab/3.jpg",
            "images/products/hijab/4.jpg",
            "images/products/hijab/5.jpg"
        ]
    },

    // 5. Zipper Scrub
    "Labcoat": {
        name: "Labcoat",
        price: "550",
        description: "Built to last… styles to impress. A modern look with durable zipper.",
        colors: ["#000000", "#FFFFFF", "#4169E1", "#000080", "#808080"],
        colorNames: ["Black", "White", "Blue", "Dark Blue", "Grey"],
        images: [
            "images/products/Labcoat/1.jpg",
            "images/products/Labcoat/2.jpg",
            "images/products/Labcoat/3.jpg",
            "images/products/Labcoat/4.jpg",
            "images/products/Labcoat/5.jpg",
            "images/products/Labcoat/6.jpg",
            "images/products/Labcoat/7.jpg",
            "images/products/Labcoat/8.jpg"

        ]
    },

    // 6. Polo Scrub
    "polo": {
        name: "Polo Scrub",
        price: "650",
        description: "Crafted from this old fashioned style and we put our unique touch on it.",
        colors: ["#000000", "#000080"],
        colorNames: ["Black", "Dark Blue"],
        images: [
            "images/products/polo/1.jpg",
            "images/products/polo/2.jpg",
            "images/products/polo/3.jpg"
        ]
    },

    // 7. Female Scrubs
    "female": {
        name: "Female Fit Scrub",
        price: "650",
        description: "To our ladies to have a unique style during her career we tailored this for you.",
        colors: ["#808080", "#F5F5DC", "#98FF98", "#800020", "#4B5320", "#808000", "#967444"],
        colorNames: ["Grey", "Beige", "Mint Green", "Burgundy", "Geishy", "Olive", "Camouni"],
        images: [
            "images/products/female/1.jpg",
            "images/products/female/2.jpg",
            "images/products/female/3.jpg",
            "images/products/female/4.jpg",
            "images/products/female/5.jpg",
            "images/products/female/6.jpg",
            "images/products/female/7.jpg",
            "images/products/female/8.jpg"

        ]
    },

    // 8. Round Scrubs
    "round": {
        name: "Round Scrub",
        price: "650",
        description: "It’s a realistic and fashionable style to have more confidence. Contains round neck and Rib on both hands.",
        colors: ["#000000", "#FFFFFF", "#4169E1", "#808080"],
        colorNames: ["Black", "White", "Blue", "Grey"],
        images: [
            "images/products/round/1.jpg",
            "images/products/round/2.jpg"
        ]
    }
};
// --- تهيئة المتغيرات ---
const phoneNumber = "201146336977"; 
let currentProduct = {};
let quantity = 1;

// --- عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
    loadProductData();
});

function loadProductData() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    currentProduct = productsDB[productId] || productsDB["classic"];

    // تعبئة البيانات النصية
    document.title = `HarMed | ${currentProduct.name}`;
    document.getElementById('product-name').innerText = currentProduct.name;
    document.querySelector('.product-price').innerText = `${currentProduct.price} ج.م`;
    document.querySelector('.description p').innerText = currentProduct.description;

    // --- تحديث السلايدر والنقاط (Dots) ديناميكياً ---
    const sliderContainer = document.getElementById('slider');
    const dotsContainer = document.getElementById('dots');
    
    // مسح المحتوى القديم
    sliderContainer.innerHTML = ''; 
    dotsContainer.innerHTML = '';

    currentProduct.images.forEach((imgSrc, index) => {
        // إنشاء الصورة
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');
        slideDiv.innerHTML = `<img src="${imgSrc}" alt="${currentProduct.name} view ${index + 1}">`;
        sliderContainer.appendChild(slideDiv);

        // إنشاء النقطة (Dot)
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active'); // تفعيل الأولى
        dotsContainer.appendChild(dot);
    });

    // إعادة تفعيل مستمع الأحداث للسلايدر الجديد
    setupSliderListener();

    // --- تحديث الألوان ---
    const colorsContainer = document.querySelector('.colors-container');
    colorsContainer.innerHTML = '';
    
    currentProduct.colors.forEach((colorCode, index) => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color-option');
        if (index === 0) {
            selectColor(colorDiv, currentProduct.colorNames[0], colorCode);
        }
        colorDiv.style.background = colorCode;
        if(colorCode === '#ffffff') colorDiv.style.border = '1px solid #ccc';
        
        colorDiv.onclick = function() {
            selectColor(this, currentProduct.colorNames[index], colorCode);
        };
        colorsContainer.appendChild(colorDiv);
    });
}

function setupSliderListener() {
    const slider = document.getElementById('slider');
    // نحدد النقاط الجديدة التي تم إنشاؤها
    const dots = document.querySelectorAll('.dot');
    
    slider.addEventListener('scroll', () => {
        const slideWidth = slider.clientWidth;
        let index = Math.round(Math.abs(slider.scrollLeft) / slideWidth); 
        
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[index]) dots[index].classList.add('active');
    });
}

// --- باقي الوظائف كما هي ---
function selectColor(element, colorName, colorCode) {
    document.querySelectorAll('.color-option').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('color-name').innerText = colorName;
    document.getElementById('color-name').style.color = colorCode === '#ffffff' ? '#000' : colorCode;
}

function selectSize(element) {
    document.querySelectorAll('.size-option').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function updateQty(change) {
    quantity += change;
    if (quantity < 1) quantity = 1;
    document.getElementById('qty').innerText = quantity;
}

function openModal() { document.getElementById('sizeModal').style.display = 'flex'; }
function closeModal() { document.getElementById('sizeModal').style.display = 'none'; }
window.onclick = function(event) { if (event.target == document.getElementById('sizeModal')) closeModal(); }

function buyViaWhatsapp() {
    const productName = currentProduct.name;
    const selectedColor = document.getElementById('color-name').innerText;
    
    const sizeElement = document.querySelector('.size-option.active');
    if (!sizeElement) {
        alert("يرجى اختيار المقاس أولاً");
        return;
    }
    const selectedSize = sizeElement.innerText;
    const qty = document.getElementById('qty').innerText;
    const priceTotal = parseInt(currentProduct.price) * parseInt(qty);

    let message = `مرحباً HarMed، أود طلب أوردر جديد:%0a%0a`;
    message += `*المنتج:* ${productName}%0a`;
    message += `*اللون:* ${selectedColor}%0a`;
    message += `*المقاس:* ${selectedSize}%0a`;
    message += `*الكمية:* ${qty}%0a`;
    message += `*السعر المتوقع:* ${priceTotal} ج.م%0a%0a`;
    message += `يرجى التواصل لتأكيد العنوان والشحن.`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}