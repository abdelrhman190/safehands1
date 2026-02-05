// 1. إعداد Supabase وتوحيد الاسم
if (typeof supabaseClient === 'undefined') {
    window.supabaseClient = window.supabase.createClient(
        'https://ebzhfytrzcxsnepcudyl.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'
    );
}

const translations = {
    ar: {
        site_title: "الأيدي الآمنة",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        nav_find_babysitters: "ابحث عن جليسات أطفال",
        nav_book_now: "الحجز",
        nav_profile: "الملف الشخصي",
        nav_login_signup: "تسجيل الدخول / إنشاء حساب",
        nav_logout: "تسجيل الخروج",
        filter_all: "الكل",
        filter_0_2: "0-2 سنوات",
        filter_3_5: "3-5 سنوات",
        filter_6_plus: "6+ سنوات",
        available: "متاح",
        unavailable: "غير متاح",
        experience_label: "خبرة: ",
        rate_label: "جنيه/ساعة",
        booked_dates_label: "محجوزة في: ",
        specialties_none: "لا تخصصات",
        footer_copyright: "© 2025 الأيدي الآمنة. جميع الحقوق محفوظة."
    },
    en: {
        site_title: "Safe Hands",
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        nav_find_babysitters: "Find Babysitters",
        nav_book_now: "Book Now",
        nav_profile: "My Profile",
        nav_login_signup: "Login/Sign Up",
        nav_logout: "Logout",
        filter_all: "All",
        filter_0_2: "0-2 years",
        filter_3_5: "3-5 years",
        filter_6_plus: "6+ years",
        available: "Available",
        unavailable: "Unavailable",
        experience_label: "Experience: ",
        rate_label: "EGP/hour",
        booked_dates_label: "Booked on: ",
        specialties_none: "No specialties",
        footer_copyright: "© 2025 SafeHands. All rights reserved."
    }
};

// تم تغيير الاسم ليتطابق مع الاستدعاءات
function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    // التعديل هنا: استخدام الـ ID الصحيح الموجود في الـ HTML الخاص بك
    const loginLink = document.getElementById('login-signup-link'); 
    const logoutLink = document.getElementById('logout-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const userNameText = document.getElementById('user-name-text');

    const userEmail = userData.contact_info || userData.email;
    const userName = userData.name;

    if (userEmail) {
        // إذا كان مسجل دخول
        if (loginLink) loginLink.style.display = 'none'; // سيختفي الآن
        if (logoutLink) logoutLink.style.display = 'block';
        if (userNameDisplay) {
            userNameDisplay.style.display = 'inline-flex';
            if (userNameText) userNameText.textContent = userName || "مستخدم";
        }
    } else {
        // إذا كان غير مسجل
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (userNameDisplay) userNameDisplay.style.display = 'none';
    }
}
function changeLanguage() {
    const langSelect = document.getElementById('languageSelect');
    if (!langSelect) return;
    
    const lang = langSelect.value;
    document.getElementById('htmlLang').setAttribute('lang', lang);
    document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);
    // التأكد من وجود الدالة قبل استدعائها
    if (typeof filterBabysitters === "function") filterBabysitters();
    updateNavbar();
}

function logout() {
    localStorage.removeItem('userData'); 
    updateNavbar(); 
    window.location.href = '/log/login.html'; 
}

let babysitters = [];

document.addEventListener('DOMContentLoaded', async () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = savedLang;
    
    changeLanguage();
    updateNavbar();
    await loadBabysitters();
});

async function loadBabysitters() {
    const listContainer = document.getElementById('babysitters-list');
    
    const { data: sitterData, error: sitterError } = await window.supabaseClient.from('babysitters').select('*');
    if (sitterError || !sitterData) {
        if (listContainer) listContainer.innerHTML = '<p style="color: red;">خطأ في جلب البيانات</p>';
        return;
    }

    const { data: bookingData, error: bookingError } = await window.supabaseClient.from('bookings').select('babysitter_id, booking_date');
    
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');

    const bookedToday = bookingData ? bookingData.filter(b => {
        const d = new Date(b.booking_date);
        const dayStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
        return dayStr === todayStr;
    }).map(b => b.babysitter_id) : [];

    babysitters = sitterData.map(sitter => {
        return {
            ...sitter,
            isAvailable: !bookedToday.includes(sitter.id),
            bookedDates: [] // يمكن توسيعها لاحقاً
        };
    });

    filterBabysitters();
}

function filterBabysitters() {
    const list = document.getElementById('babysitters-list');
    if (!list) return;
    
    const filterSelect = document.getElementById('filterExperience');
    const filter = filterSelect ? filterSelect.value : 'all';
    const lang = document.getElementById('languageSelect').value;
    
    list.innerHTML = '';

    const filtered = babysitters.filter(sitter => {
        if (filter === 'all') return true;
        const exp = sitter.experience;
        if (filter === '0-2') return exp >= 0 && exp <= 2;
        if (filter === '3-5') return exp >= 3 && exp <= 5;
        if (filter === '6+') return exp >= 6;
        return true;
    });

    filtered.forEach(sitter => {
        const card = document.createElement('div');
        card.className = 'babysitter-card ' + (sitter.isAvailable ? '' : 'unavailable');
        card.innerHTML = `
            <img src="${sitter.profile_image || 'https://via.placeholder.com/150'}" alt="${sitter.name}" class="profile-image">
            <h3>${sitter.name}</h3>
            <p>${translations[lang].experience_label}${sitter.experience} ${lang==='ar'?'سنوات':'years'}</p>
            <p>${sitter.isAvailable ? translations[lang].available : translations[lang].unavailable}</p>
            <a href="babysitter.html?id=${sitter.id}" class="profile-link">عرض البروفايل</a>
        `;
        list.appendChild(card);
    });
}