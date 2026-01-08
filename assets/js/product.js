
        // --- تهيئة المتغيرات ---
        const phoneNumber = "201146336977"; 

        const slider = document.getElementById('slider');
        const dots = document.querySelectorAll('.dot');
        let quantity = 1;

        // --- Slider Logic ---
        slider.addEventListener('scroll', () => {
            const slideWidth = slider.clientWidth;
            let index = Math.round(Math.abs(slider.scrollLeft) / slideWidth); 
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');
        });

        // --- التحديد (اللون والمقاس) ---
        function selectColor(element, colorName) {
            document.querySelectorAll('.color-option').forEach(el => el.classList.remove('active'));
            element.classList.add('active');
            document.getElementById('color-name').innerText = colorName;
        }

        function selectSize(element) {
            document.querySelectorAll('.size-option').forEach(el => el.classList.remove('active'));
            element.classList.add('active');
        }

        // --- الكمية ---
        function updateQty(change) {
            quantity += change;
            if (quantity < 1) quantity = 1;
            document.getElementById('qty').innerText = quantity;
        }

        // --- المودال ---
        function openModal() { document.getElementById('sizeModal').style.display = 'flex'; }
        function closeModal() { document.getElementById('sizeModal').style.display = 'none'; }
        window.onclick = function(event) { if (event.target == document.getElementById('sizeModal')) closeModal(); }

        // --- دالة الشراء عبر واتساب (الجديدة) ---
        function buyViaWhatsapp() {
            // 1. جمع البيانات من الصفحة
            const productName = document.getElementById('product-name').innerText;
            const selectedColor = document.getElementById('color-name').innerText;
            
            // التأكد من اختيار مقاس
            const sizeElement = document.querySelector('.size-option.active');
            const selectedSize = sizeElement ? sizeElement.innerText : 'غير محدد';

            const qty = document.getElementById('qty').innerText;

            // 2. تجهيز نص الرسالة (استخدمنا * لعمل Bold في واتساب)
            // %0a تعني سطر جديد في الروابط
            let message = `مرحباً HarMed، أود طلب المنتج التالي:%0a%0a`;
            message += `*المنتج:* ${productName}%0a`;
            message += `*اللون:* ${selectedColor}%0a`;
            message += `*المقاس:* ${selectedSize}%0a`;
            message += `*الكمية:* ${qty}%0a%0a`;
            message += `يرجى تأكيد الطلب وتفاصيل الشحن.`;

            // 3. فتح رابط واتساب
            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            
            // فتح في نافذة جديدة
            window.open(url, '_blank');
        }
