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
