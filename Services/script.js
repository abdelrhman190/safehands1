
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
        services_title: "خدمات جليسات الأطفال",
        service_daily_care_title: "رعاية الأطفال اليومية",
        service_daily_care_description: "توفر جليسة الأطفال رعاية يومية في المنزل، بما في ذلك اللعب والتغذية والمساعدة في الروتين اليومي.",
        service_outings_title: "مرافقة الأطفال في النزهات",
        service_outings_description: "مرافقة الأطفال إلى الأنشطة الخارجية مثل الحدائق، النوادي، أو الفعاليات الترفيهية بأمان.",
        service_educational_support_title: "دعم تعليمي وترفيهي",
        service_educational_support_description: "مساعدة الأطفال في الواجبات المدرسية أو تقديم أنشطة تعليمية ممتعة لتنمية مهاراتهم.",
        service_hygiene_title: "مساعدة في النظافة الشخصية",
        service_hygiene_description: "دعم الأطفال في الأنشطة اليومية مثل غسل الأيدي، تغيير الملابس، أو الاستحمام بطريقة آمنة.",
        service_overnight_title: "رعاية ليلية للأطفال",
        service_overnight_description: "رعاية الأطفال خلال الليل أو فترات الإقامة القصيرة لتوفير الراحة للآباء.",
        service_event_companion_title: "مرافقة الأطفال في المناسبات",
        service_event_companion_description: "مرافقة الأطفال في الحفلات العائلية أو المناسبات الخاصة لضمان استمتاعهم وسلامتهم.",
        why_us_title: "لماذا تختار جليساتنا؟",
        why_us_background_check: "فحص خلفية شامل لكل جليسة أطفال",
        why_us_scheduling: "جدولة مرنة تناسب احتياجات عائلتك",
        why_us_reviews: "تقييمات موثوقة من أولياء الأمور",
        why_us_support: "دعم متاح على مدار الساعة",
        why_us_care_plans: "خطط رعاية مخصصة لكل طفل",
        why_us_pricing: "أسعار شفافة ومناسبة للجميع",
        why_us_multilingual: "جليسات متعددات اللغات لتلبية احتياجاتك",
        book_now: "احجز جليسة الآن",
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
        nav_dashboard: "My Profile",
        nav_login_signup: "Login/Sign Up",
        nav_logout: "Logout",
        services_title: "Babysitting Services",
        service_daily_care_title: "Daily Childcare",
        service_daily_care_description: "A babysitter provides daily care at home, including playtime, feeding, and assisting with daily routines.",
        service_doctor_visits_title: "Accompanying Children on Outings",
        service_doctor_visits_description: "Safely accompanying children to outdoor activities like parks, clubs, or recreational events.",
        service_medication_title: "Educational and Recreational Support",
        service_medication_description: "Helping children with homework or providing engaging educational activities to develop their skills.",
        service_hygiene_title: "Personal Hygiene Assistance",
        service_hygiene_description: "Supporting children with daily activities like handwashing, changing clothes, or bathing safely.",
        service_overnight_title: "Overnight Childcare",
        service_overnight_description: "Caring for children during the night or short-term stays to give parents peace of mind.",
        service_companion_title: "Child Companion for Events",
        service_companion_description: "Accompanying children at family gatherings or special events to ensure their safety and enjoyment.",
        why_us_title: "Why Choose Our Babysitters?",
        why_us_background_check: "Comprehensive background check for every babysitter",
        why_us_scheduling: "Flexible scheduling tailored to your family's needs",
        why_us_reviews: "Trusted reviews from parents",
        why_us_support: "24/7 Support",
        why_us_care_plans: "Personalized care plans for each child",
        why_us_pricing: "Transparent and affordable pricing",
        why_us_multilingual: "Multilingual babysitters available on request",
        book_now: "Book a Babysitter Now",
        footer_company_title: "Safe Hands",
        footer_company_description: "Book reliable, vetted babysitters for your children with ease and confidence.",
        footer_links_title: "Links",
        footer_contact_title: "Contact Us",
        footer_contact_email: "Email: Safehands.com",
        footer_contact_phone: "Phone: 01279581077",
        footer_contact_address: "Address: 202 Bakos Street, Alexandria, Egypt",
        footer_copyright: "All rights reserved. 2025 Safe Hands."
    }
};
        function changeLanguage() {
            const lang = document.getElementById('languageSelect').value;
            document.getElementById('htmlLang').setAttribute('lang', lang);
            document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = translations[lang][key];
            });

            localStorage.setItem('language', lang);
            updateNavbar();
        }
// تم توحيد الاسم إلى updateNavbar ليتناسب مع بقية ملفاتك
// دالة تحديث شريط التنقل (النافبار) بناءً على حالة تسجيل الدخول
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
}

function logout() {
    localStorage.removeItem('userData'); 
    updateNavbar(); 
    window.location.href = '/log/login.html'; 
}

// استدعاء واحد فقط عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
    }
    
    // ترتيب الاستدعاء مهم
    changeLanguage(); 
    updateNavbar();
});