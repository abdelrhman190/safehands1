// الترجمة
const translations = {
    ar: {
        site_title: "الأيدي الآمنة",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        nav_find_babysitters: "ابحث عن جليسات أطفال",
        nav_book_now: "احجز الآن",
        nav_dashboard: "الصفحة الشخصية",
        nav_login_signup: "تسجيل الدخول / إنشاء حساب",
        nav_logout: "تسجيل الخروج",
        contact_title: "تواصل معنا",
        contact_description: "يسعدنا سماع رأيك! املأ النموذج أدناه وسنرد عليك في أقرب وقت.",
        name_label: "الاسم",
        email_label: "البريد الإلكتروني",
        phone_label: "رقم الهاتف",
        message_label: "رسالتك",
        submit_button: "إرسال",
        success_message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
        error_message: "حدث خطأ، حاول مرة أخرى.",
        footer_company_title: "الأيدي الآمنة",
        footer_company_description: "احجز جليسات أطفال موثوقة ومُتحقق منها بسهولة وثقة.",
        footer_links_title: "الروابط",
        footer_contact_title: "تواصل معنا",
        footer_contact_email: "البريد الإلكتروني: Safehands.com",
        footer_contact_phone: "رقم الهاتف: 01279581077",
        footer_contact_address: "العنوان: 202 شارع باكوس، الإسكندرية، مصر",
        footer_copyright: "جميع الحقوق محفوظة. 2025 الأيدي الآمنة."
    },
    en: {
        site_title: "Safe Hands",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        nav_find_babysitters: "Find Babysitters",
        nav_book_now: "Book Now",
        nav_dashboard: "My profile",
        nav_login_signup: "Login/Sign Up",
        nav_logout: "Logout",
        contact_title: "Contact Us",
        contact_description: "We'd love to hear from you! Fill out the form below and we'll get back to you soon.",
        name_label: "Name",
        email_label: "Email",
        phone_label: "Phone Number",
        message_label: "Your Message",
        submit_button: "Send",
        success_message: "Your message has been sent successfully! We'll contact you soon.",
        error_message: "An error occurred. Please try again.",
        footer_company_title: "Safe Hands",
        footer_company_description: "Trusted Babysitting, Book reliable, vetted babysitters for your children with ease and confidence.",
        footer_links_title: "Links",
        footer_contact_title: "Contact Us",
        footer_contact_email: "Email: Safehands.com",
        footer_contact_phone: "Phone: 01279581077",
        footer_contact_address: "Address: 202 Bakos Street, Alexandria, Egypt",
        footer_copyright: "All rights reserved. 2025 Safe Hands."
    }
};

// ==================== 3. تغيير اللغة ====================
function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const isLoggedIn = !!(userData.contact_info || userData.email || userData.id);

    // جلب العناصر بأمان (لو مش موجودة → null)
    const loginItem     = document.getElementById('login-item') || document.getElementById('login-signup-link');
    const logoutItem    = document.getElementById('logout-item');
    const userDisplay   = document.getElementById('user-name-display');
    const userName      = document.getElementById('user-name-text');
    const userAvatar    = document.getElementById('user-avatar-img');

    if (isLoggedIn) {
        // مسجل دخول → إخفاء تسجيل الدخول، إظهار الكبسولة + الخروج
        if (loginItem)      loginItem.style.display = 'none';
        if (logoutItem)     logoutItem.style.display = 'block';
        if (userDisplay)    userDisplay.style.display = 'inline-flex'; // أو 'flex' لو عايز
        if (userName)       userName.textContent = userData.name || 'مستخدم';
        if (userAvatar) {
            userAvatar.src = userData.image_url || userData.profile_pic || '/img/default-avatar.png';
            userAvatar.alt = userData.name || 'صورة المستخدم';
        }
    } else {
        // زائر → إظهار تسجيل الدخول، إخفاء الباقي
        if (loginItem)      loginItem.style.display = 'block';
        if (logoutItem)     logoutItem.style.display = 'none';
        if (userDisplay)    userDisplay.style.display = 'none';
        if (userAvatar)     userAvatar.src = '/img/default-avatar.png';
    }
}

// ────────────────────────────────────────────────
// ضبط صورة الـ avatar + معالجة الخطأ (يشتغل بعد تحميل الصفحة)
function setupAvatarFallback() {
    const avatarImg = document.getElementById('user-avatar-img');
    if (!avatarImg) return;

    // ضبط الصورة الأولية من localStorage (إذا كان مسجل دخول)
    const user = JSON.parse(localStorage.getItem('userData') || '{}');
    if (user && (user.image_url || user.profile_pic)) {
        avatarImg.src = user.image_url || user.profile_pic;
    } else {
        avatarImg.src = "/img/default-avatar.png";
    }

    // fallback لو الصورة ما اتحملتش (404 أو خطأ شبكة)
    avatarImg.onerror = () => {
        avatarImg.src = "/img/default-avatar.png";
        avatarImg.onerror = null; // نمنع loop لا نهائي
    };
}

// ────────────────────────────────────────────────
// استدعاء واحد مركزي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // 1. تحديث النافبار فوراً
    updateNavbar();

    // 2. ضبط صورة الـ avatar + معالجة الأخطاء
    setupAvatarFallback();

    // 3. (اختياري) إعادة تحديث النافبار كل ما يتغير localStorage
    // مفيد لو فيه تبويبات متعددة
    window.addEventListener('storage', (e) => {
        if (e.key === 'userData') {
            updateNavbar();
            setupAvatarFallback();
        }
    });
});
function changeLanguage() {
    const langSelect = document.getElementById('languageSelect');
    if (!langSelect) return;
    
    const lang = langSelect.value;
    const htmlLang = document.getElementById('htmlLang');
    if (htmlLang) {
        htmlLang.setAttribute('lang', lang);
        htmlLang.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);
    updateNavbar(); // تحديث الناف بار بعد تغيير اللغة
    populateUserData();
}

function logout() {
    localStorage.removeItem('userData'); 
    updateNavbar(); 
    window.location.href = '/log/login.html'; 
}

// ==================== 4. تعبئة بيانات المستخدم المسجل تلقائياً ====================
function populateUserData() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userEmail = userData.contact_info || userData.email;
    
    if (userEmail) {
        document.getElementById('name').value = userData.name || '';
        document.getElementById('email').value = userEmail || '';
        // نترك الحقول قابلة للتعديل أو نغلقها حسب رغبتك
        // document.getElementById('name').readOnly = true; 
    }
}

// ==================== 5. التحميل عند البدء ====================
window.onload = function() {
    const savedLang = localStorage.getItem('language') || 'ar';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = savedLang;

    // تهيئة Supabase
    const supabaseUrl = 'https://ebzhfytrzcxsnepcudyl.supabase.co'; 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc';
    supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

    // تهيئة EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init('vOU5RAqgHi0v0NJVa');
    }

    changeLanguage();
};

// ==================== 6. معالجة النموذج (Form Submit) ====================
document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const form = this;
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    const btn = form.querySelector('button');
    const lang = document.getElementById('languageSelect').value;

    btn.disabled = true;
    btn.textContent = lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...';

    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
        language: lang
    };

    try {
        // أ. الحفظ في Supabase
        const { error: dbError } = await supabaseClient
            .from('contact_messages')
            .insert([formData]);

        if (dbError) throw dbError;

        // ب. الإرسال عبر EmailJS
        await emailjs.send('service_x5btrdq', 'template_e7jcew8', formData);

        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        form.reset();
        populateUserData(); // لإعادة وضع بيانات المستخدم بعد المسح
    } catch (err) {
        console.error(err);
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
    } finally {
        btn.disabled = false;
        btn.textContent = translations[lang].submit_button;
        setTimeout(() => {
            successMsg.style.display = 'none';
            errorMsg.style.display = 'none';
        }, 5000);
    }
});