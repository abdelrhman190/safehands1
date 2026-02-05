// 1. إعداد Supabase وتوحيد الاسم لمنع خطأ (supabase.from is not a function)
if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = window.supabase.createClient(
        'https://ebzhfytrzcxsnepcudyl.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'
    );
}

const translations = {
    ar: {
        site_title: "الأيدي الآمنة",
        nav_home: "الرئيسية", nav_services: "الخدمات", nav_about: "من نحن",
        nav_contact: "تواصل معنا", nav_find_babysitters: "ابحث عن جليسات أطفال",
        nav_book_now: "الحجز", nav_profile: "الملف الشخصي",
        nav_login_signup: "تسجيل الدخول / إنشاء حساب", nav_logout: "تسجيل الخروج",
        form_title: "إنشاء حجز جديد",
        label_email: "بريدك الإلكتروني", label_babysitter: "اختر جليسة الأطفال",
        label_date: "تاريخ ووقت الحجز", label_duration: "مدة الحجز (بالساعات)",
        label_service: "نوع الخدمة", label_total_price: "السعر الإجمالي",
        label_payment_method: "طريقة الدفع",
        select_babysitter: "اختر جليسة", select_service: "اختر الخدمة", select_payment: "اختر طريقة دفع",
        payment_credit_card: "بطاقة ائتمان", payment_wallet: "محفظة إلكترونية", payment_cash: "دفع عند الاستلام",
        service_childcare: "رعاية أطفال", service_education: "تعليم أطفال", service_nightcare: "رعاية ليلية",
        service_eldercare: "رعاية المسنين", service_special_needs: "رعاية ذوي الاحتياجات الخاصة",
        service_house_cleaning: "تنظيف المنزل",
        btn_book: "حجز", modal_title: "تأكيد الحجز", modal_confirm: "تأكيد", modal_cancel: "إلغاء",
        alert_login: "يرجى تسجيل الدخول أولاً", alert_fields: "يرجى ملء جميع الحقول",
        alert_fetch_error: "خطأ في جلب قائمة الجليسات",
        alert_booking_conflict: "جليسة الأطفال محجوزة في هذا الوقت، اختر وقتًا آخر",
        alert_booking_error: "حدث خطأ أثناء التحقق من الحجوزات",
        alert_create_error: "حدث خطأ أثناء الحجز: ",
        alert_success: "تم الحجز بنجاح! تم إشعار الجليسة ببريدك: ",
        alert_refund_policy: "سياسة الاسترداد: يتم خصم 20% إذا أُلغي الحجز قبل 24 ساعة",
        alert_cancel_success: "تم إلغاء الحجز بنجاح، تم استرداد ",
        alert_cancel_error: "خطأ أثناء إلغاء الحجز: ",
        alert_cancel_late: "لا يمكن إلغاء الحجز، أقل من 24 ساعة متبقية",
        footer_copyright: "© 2025 الأيدي الآمنة. جميع الحقوق محفوظة"
    },
    en: {
        site_title: "Safe Hands",
        nav_home: "Home", nav_services: "Services", nav_about: "About",
        nav_contact: "Contact", nav_find_babysitters: "Find Babysitters",
        nav_book_now: "Book Now", nav_profile: "My Profile",
        nav_login_signup: "Login/Sign Up", nav_logout: "Logout",
        form_title: "Create a New Booking",
        label_email: "Your Email", label_babysitter: "Select Babysitter",
        label_date: "Booking Date and Time", label_duration: "Duration (in hours)",
        label_service: "Service Type", label_total_price: "Total Price",
        label_payment_method: "Payment Method",
        select_babysitter: "Select a Babysitter", select_service: "Select a Service", select_payment: "Select Payment Method",
        payment_credit_card: "Credit Card", payment_wallet: "Digital Wallet", payment_cash: "Cash on Delivery",
        service_childcare: "Childcare", service_education: "Child Education", service_nightcare: "Night Care",
        service_eldercare: "Elderly Care", service_special_needs: "Special Needs Care",
        service_house_cleaning: "House Cleaning",
        btn_book: "Book", modal_title: "Confirm Booking", modal_confirm: "Confirm", modal_cancel: "Cancel",
        alert_login: "Please login first", alert_fields: "Please fill in all fields",
        alert_fetch_error: "Error fetching babysitters list",
        alert_booking_conflict: "The babysitter is booked at this time, choose another time",
        alert_booking_error: "An error occurred while checking bookings",
        alert_create_error: "An error occurred during booking: ",
        alert_success: "Booking successful! The babysitter has been notified: ",
        alert_refund_policy: "Refund Policy: 20% deduction if canceled within 24 hours",
        alert_cancel_success: "Booking canceled successfully, refunded amount: ",
        alert_cancel_error: "Error canceling booking: ",
        alert_cancel_late: "Cannot cancel booking, less than 24 hours remaining",
        footer_copyright: "© 2025 SafeHands. All rights reserved"
    }
};

// 2. إدارة الواجهة واللغة
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.getElementById('htmlLang').setAttribute('lang', lang);
    document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
    updateNavbar();
}

function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userEmail = userData.contact_info || userData.email;
    const loginLink = document.getElementById('login-signup-link') || document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const userNameText = document.getElementById('user-name-text');

    if (userEmail) {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (userNameDisplay) {
            userNameDisplay.style.display = 'inline-flex';
            userNameText.textContent = userData.name || "مستخدم";
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (userNameDisplay) userNameDisplay.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('userData');
    window.location.href = '/log/login.html';
}

// 3. منطق الحجز والتعامل مع البيانات
async function loadBabysitters() {
    try {
        const { data: sitterData, error: sitterError } = await window.supabaseClient.from('babysitters').select('*');
        const { data: bookingData } = await window.supabaseClient.from('bookings').select('babysitter_id, booking_date, duration_hours');
        
        const alertMessage = document.getElementById('alertMessage');
        const lang = document.getElementById('languageSelect').value;

        if (sitterError) throw sitterError;

        const select = document.getElementById('babysitter');
        select.innerHTML = `<option value="" data-i18n="select_babysitter">${translations[lang].select_babysitter}</option>`;

        const today = new Date().toISOString().split('T')[0];
        const bookedToday = bookingData ? bookingData.filter(b => b.booking_date.startsWith(today)).map(b => b.babysitter_id) : [];

        sitterData.forEach(sitter => {
            if (sitter.availability && !bookedToday.includes(sitter.id)) {
                const option = document.createElement('option');
                option.value = JSON.stringify({ id: sitter.id, email: sitter.contact_info, rate: sitter.hourly_rate, name: sitter.name });
                option.textContent = `${sitter.name} (${sitter.hourly_rate} جنيه/ساعة)`;
                select.appendChild(option);
            }
        });
    } catch (err) {
        console.error('Fetch Error:', err);
    }
}

function calculatePrice() {
    const sitterSelect = document.getElementById('babysitter');
    const durationInput = document.getElementById('duration');
    const totalPriceInput = document.getElementById('total-price');

    if (sitterSelect.value && durationInput.value) {
        const sitter = JSON.parse(sitterSelect.value);
        const total = (sitter.rate || 0) * (parseInt(durationInput.value) || 0);
        totalPriceInput.value = `${total.toFixed(2)} جنيه`;
    } else {
        totalPriceInput.value = '0.00 جنيه';
    }
}

// 4. تأكيد وإنشاء الحجز
function showConfirmation(event) {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const babysitterSelect = document.getElementById('babysitter');
    if (!babysitterSelect.value) return alert("يرجى اختيار جليسة");

    const sitter = JSON.parse(babysitterSelect.value);
    const date = document.getElementById('booking-date').value;
    const duration = document.getElementById('duration').value;
    const service = document.getElementById('service').value;
    const payment = document.getElementById('payment-method').value;
    const price = document.getElementById('total-price').value;
    const lang = document.getElementById('languageSelect').value;

    const details = document.getElementById('confirmationDetails');
    details.innerHTML = `
        <b>${translations[lang].label_babysitter}:</b> ${sitter.name}<br>
        <b>${translations[lang].label_date}:</b> ${date}<br>
        <b>${translations[lang].label_duration}:</b> ${duration}<br>
        <b>${translations[lang].label_total_price}:</b> ${price}
    `;
    document.getElementById('confirmationModal').style.display = 'flex';
}

function hideConfirmation() {
    document.getElementById('confirmationModal').style.display = 'none';
}

async function createBooking() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const sitter = JSON.parse(document.getElementById('babysitter').value);
    const lang = document.getElementById('languageSelect').value;
    const alertMsg = document.getElementById('alertMessage');

    const bookingPayload = {
        user_id: userData.id,
        user_email: userData.email || userData.contact_info,
        babysitter_id: sitter.id,
        sitter_email: sitter.email,
        booking_date: document.getElementById('booking-date').value,
        duration_hours: parseInt(document.getElementById('duration').value),
        service: document.getElementById('service').value,
        total_price: parseFloat(document.getElementById('total-price').value),
        payment_method: document.getElementById('payment-method').value,
        status: 'pending'
    };

    try {
        const { data, error } = await window.supabaseClient.from('bookings').insert(bookingPayload).select().single();
        if (error) throw error;

        // سجل الدفع تلقائياً
        await window.supabaseClient.from('payments').insert({
            booking_id: data.id,
            user_id: userData.id,
            amount: bookingPayload.total_price,
            payment_method: bookingPayload.payment_method,
            status: 'completed'
        });

        alertMsg.className = "alert success";
        alertMsg.textContent = translations[lang].alert_success + bookingPayload.user_email;
        alertMsg.style.display = 'block';
        hideConfirmation();
        setTimeout(() => location.reload(), 3000);
    } catch (err) {
        alertMsg.textContent = translations[lang].alert_create_error + err.message;
        alertMsg.style.display = 'block';
    }
}

// 5. التشغيل عند التحميل (تم دمج كل الوظائف هنا لمنع التضارب)
document.addEventListener('DOMContentLoaded', async () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    
    // تحديث الواجهة
    changeLanguage(); 
    
    // التحقق من تسجيل الدخول
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userEmail = userData.email || userData.contact_info;
    
    if (userEmail) {
        document.getElementById('user-email').value = userEmail;
        await loadBabysitters();
    } else {
        // إذا لم يجد بيانات المستخدم يحوله لصفحة الدخول
        window.location.href = '/log/login.html';
    }
});