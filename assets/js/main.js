/* 
    ملف: assets/js/main.js
    الوصف: التحكم في التفاعلات الرئيسية للصفحة (التحميل، التمرير، النافبار، الأكورديون)
*/

// --- 1. التحكم في شاشة التحميل (Preloader) ---
window.addEventListener('load', () => {
    // تقليل وقت الانتظار إلى نصف ثانية فقط لتسريع تجربة المستخدم
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('loaded');
            document.body.classList.remove('loading');
        }
    }, 500); 
});

// --- 2. تفعيل زر النافبار يدوياً عند الضغط ---
function setActiveNav(element) {
    document.querySelectorAll('.mobile-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

// --- 3. التحكم في الأكورديون (فتح وإغلاق القوائم) ---
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.fa-chevron-down');
    
    // إغلاق أي أكورديون آخر مفتوح (لجعل واحد فقط مفتوحاً في نفس الوقت)
    document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
            c.classList.remove('open');
            c.style.maxHeight = null;
            // إعادة تدوير أيقونة الأكورديون المغلق
            const otherIcon = c.previousElementSibling.querySelector('.fa-chevron-down');
            if(otherIcon) otherIcon.style.transform = "rotate(0deg)";
        }
    });

    // التبديل بين الفتح والإغلاق
    content.classList.toggle('open');
    
    if (content.classList.contains('open')) {
        // تحديد الارتفاع ديناميكياً بناءً على المحتوى
        content.style.maxHeight = content.scrollHeight + "px";
        if(icon) icon.style.transform = "rotate(180deg)";
    } else {
        content.style.maxHeight = null;
        if(icon) icon.style.transform = "rotate(0deg)";
    }
}

// --- 4. تأثيرات الظهور عند التمرير (Scroll Reveal) ---
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowHeight = window.innerHeight;
    var elementVisible = 100; // المسافة قبل ظهور العنصر

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
// تشغيل الدالة مرة واحدة عند التحميل للتأكد من ظهور العناصر العلوية
reveal();

// --- 5. تفعيل النافبار تلقائياً عند التمرير (Scroll Spy) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.mobile-nav .nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // الرقم 180 هو هامش لضبط توقيت التفعيل قبل الوصول للقسم بقليل
        if (window.scrollY >= (sectionTop - 180)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        // إزالة التفعيل من الكل
        link.classList.remove('active');
        
        // التحقق من وجود ID ومطابقته للرابط
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});