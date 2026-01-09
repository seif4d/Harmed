            window.addEventListener('load', () => {
        // تأخير بسيط لإعطاء فرصة للعين لرؤية الانيميشن (1.5 ثانية)
        setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            preloader.classList.add('loaded');
            document.body.classList.remove('loading');
        }, 1500); 
    });

        // تفعيل نافبار الموبايل
        function setActiveNav(element) {
            document.querySelectorAll('.mobile-nav .nav-item').forEach(item => {
                item.classList.remove('active');
            });
            element.classList.add('active');
        }

        // الأكورديون (فتح وإغلاق)
        function toggleAccordion(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.fa-chevron-down');
            
            // إغلاق أي أكورديون مفتوح آخر (اختياري)
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

        // تأثير الظهور عند التمرير (Scroll Reveal)
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
        // تشغيل الدالة مرة واحدة عند التحميل
        reveal();
// --- تفعيل النافبار تلقائياً عند التمرير (Auto Active on Scroll) ---

// 1. تحديد جميع الأقسام وروابط النافبار
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.mobile-nav .nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // الرقم 150 هو "هامش" لكي يتم تفعيل الزر قبل وصول القسم لأعلى الشاشة بقليل
        // هذا يعطي شعوراً أسرع وأفضل للمستخدم
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        // إزالة التفعيل من الكل
        link.classList.remove('active');
        
        // إضافة التفعيل للزر المطابق للقسم الحالي
        // نتأكد أن current له قيمة عشان ما يحصلش خطأ لو احنا في الفوتر مثلاً
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});