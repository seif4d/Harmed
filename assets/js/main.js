// --- 1. منطق شاشة التحميل (سريع وآمن) ---
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    // نتأكد أن العنصر موجود ولم يتم إخفاؤه مسبقاً
    if (preloader && !preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
        document.body.classList.remove('loading');
    }
}

// أ. الوضع الطبيعي: يختفي بعد تحميل الصفحة بـ نصف ثانية (لحركة ناعمة)
window.addEventListener('load', () => {
    setTimeout(hidePreloader, 500);
});

// ب. وضع الأمان: إجبار الاختفاء بعد 3 ثوانٍ كحد أقصى (لضمان دخول العميل حتى لو النت بطيء)
setTimeout(hidePreloader, 3000);


// --- 2. تفعيل النافبار تلقائياً عند التمرير (Scroll Spy) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.mobile-nav .nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // الرقم 180 هو هامش لضبط توقيت التفعيل
        if (window.scrollY >= (sectionTop - 180)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // التأكد من وجود current لتجنب الأخطاء
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- 3. تفعيل نافبار الموبايل عند الضغط ---
function setActiveNav(element) {
    navLinks.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// --- 4. وظيفة الأكورديون (للأسئلة والدليل) ---
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.fa-chevron-down');
    
    // إغلاق أي أكورديون آخر مفتوح (اختياري)
    document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
            c.classList.remove('open');
            c.style.maxHeight = null;
        }
    });

    content.classList.toggle('open');
    if (content.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + "px";
        if(icon) icon.style.transform = "rotate(180deg)";
    } else {
        content.style.maxHeight = null;
        if(icon) icon.style.transform = "rotate(0deg)";
    }
}

// --- 5. تأثير الظهور عند التمرير (Scroll Reveal) ---
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
// تشغيل الدالة مرة واحدة عند التحميل لإظهار العناصر الأولى
reveal();