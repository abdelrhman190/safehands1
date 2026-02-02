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

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.getElementById('htmlLang').setAttribute('lang', lang);
    document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });

    localStorage.setItem('language', lang);
    filterBabysitters();
    updateNavbar();
}

function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const loginSignupLink = document.getElementById('login-signup-link');
    const dashboardLink = document.getElementById('dashboard-link');
    const logoutLink = document.getElementById('logout-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const userNameText = document.getElementById('user-name-text');

    if (userData.email) {
        loginSignupLink.style.display = 'none';
        dashboardLink.style.display = 'block';
        logoutLink.style.display = 'block';
        userNameDisplay.style.display = 'inline-flex';
        userNameText.textContent = userData.name || 'مستخدم';
    } else {
        loginSignupLink.style.display = 'block';
        dashboardLink.style.display = 'none';
        logoutLink.style.display = 'none';
        userNameDisplay.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('userData');
    updateNavbar();
    window.location.href = '/log/login.html';
}

const supabase = window.supabase.createClient('https://ebzhfytrzcxsnepcudyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc');

let babysitters = [];

document.addEventListener('DOMContentLoaded', async () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
    updateNavbar();
    await loadBabysitters();
});

async function loadBabysitters() {
    const { data: sitterData, error: sitterError } = await supabase.from('babysitters').select('*');
    if (sitterError || !sitterData) {
        console.error("Error fetching babysitters:", sitterError);
        document.getElementById('babysitters-list').innerHTML = '<p style="color: red;" data-i18n="error_fetching">خطأ في جلب بيانات الجليسات: ' + (sitterError ? sitterError.message : "بيانات غير متوفرة") + '</p>';
        changeLanguage();
        return;
    }

    const { data: bookingData, error: bookingError } = await supabase.from('bookings').select('babysitter_id, booking_date');
    if (bookingError) console.error("Error fetching bookings:", bookingError);

    const today = new Date();
    const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');

    const bookedToday = bookingData ? bookingData.filter(b => {
        const d = new Date(b.booking_date);
        const dayStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
        return dayStr === todayStr;
    }).map(b => b.babysitter_id) : [];

    const futureBookings = bookingData ? bookingData.filter(b => new Date(b.booking_date) >= today) : [];

    babysitters = sitterData.map(sitter => {
        const sitterBookings = futureBookings.filter(b => b.babysitter_id === sitter.id);
        const bookedDates = sitterBookings.map(b => {
            const d = new Date(b.booking_date);
            return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
        });
        return {
            ...sitter,
            isAvailable: !bookedToday.includes(sitter.id),
            bookedDates: [...new Set(bookedDates)]
        };
    });

    filterBabysitters();
}

function filterBabysitters() {
    const filter = document.getElementById('filterExperience').value;
    const lang = document.getElementById('languageSelect').value;
    const list = document.getElementById('babysitters-list');
    list.innerHTML = '';

    const filtered = filter === 'all' ? babysitters : babysitters.filter(sitter => {
        const exp = sitter.experience;
        if (filter === '0-2') return exp >= 0 && exp <= 2;
        if (filter === '3-5') return exp >= 3 && exp <= 5;
        if (filter === '6+') return exp >= 6;
        return true;
    });

    filtered.forEach(sitter => {
        const card = document.createElement('div');
        card.className = 'babysitter-card ' + (sitter.isAvailable ? '' : 'unavailable');
        if (!sitter.isAvailable) card.classList.add('booked-today');

        card.innerHTML = `
            <img src="${sitter.profile_image || 'https://via.placeholder.com/150'}" alt="${sitter.name}" class="profile-image">
            <h3><i class="fas fa-user"></i> ${sitter.name}</h3>
            <p><i class="fas fa-envelope"></i> ${sitter.contact_info}</p>
            <p><i class="fas fa-graduation-cap"></i> ${translations[lang].experience_label}${sitter.experience} ${lang==='ar'?'سنوات':'years'}</p>
            <p><i class="fas fa-calendar-check"></i> ${sitter.isAvailable ? translations[lang].available : translations[lang].unavailable}</p>
            <p><i class="fas fa-money-bill-wave"></i> ${sitter.hourly_rate} ${translations[lang].rate_label}</p>
            <p><i class="fas fa-star"></i> ${sitter.specialties || translations[lang].specialties_none}</p>
            ${sitter.bookedDates.length>0 ? `<div class="booked-dates"><i class="fas fa-calendar-times"></i> ${translations[lang].booked_dates_label} ${sitter.bookedDates.join(', ')}</div>` : ''}
            <a href="babysitter.html?id=${sitter.id}" class="profile-link">عرض البروفايل</a>
        `;
        list.appendChild(card);
    });
}
