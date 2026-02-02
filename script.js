const translations = {
    ar: {
        site_title: "الأيدي الآمنة",
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        nav_find_babysitters: "ابحث عن جليسات أطفال",

        nav_login_signup: "تسجيل الدخول / إنشاء حساب",
        hero_title: "الأيدي الآمنة: جليسات أطفال موثوقة",
        hero_description: "احجز جليسات أطفال موثوقة ومُتحقق منها بسهولة وثقة.",
        hero_button: " البحث عن جليسات اطفال",
        services_title: "خدماتنا",
        service1_title: "رعاية الأطفال وكبار السن",
        service1_description: "احجز مقدمي رعاية موثوقين للأطفال وكبار السن — سواء للدعم الطبي أو جليسة أطفال أو الرفقة.",
        service2_title: "جدولة مرنة",
        service2_description: "حدد مواعيد الرعاية حسب الطلب أو مقدمًا بمرونة كاملة — سواء لبضع ساعات أو دعم مستمر.",
        service3_title: "مقدمو رعاية مُتحقق منهم",
        service3_description: "جميع مقدمي الرعاية تم التحقق من خلفياتهم، وتدريبهم، وتقييمهم من قبل العائلات لضمان خدمة آمنة وموثوقة.",
        faq_link: "الأسئلة الشائعة",
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

        nav_login_signup: "Login/Sign Up",
        hero_title: "Safe Hands: Trusted Babysitting",
        hero_description: "Book reliable, vetted babysitters for your children with ease and confidence.",
        hero_button: "Find Babysitters",
        services_title: "Our Services",
        service1_title: "Care for Kids & Seniors",
        service1_description: "Book trusted caregivers for both children and elderly — whether for medical support, babysitting, or companionship.",
        service2_title: "Flexible Scheduling",
        service2_description: "Schedule care visits on-demand or in advance with full flexibility — whether for a few hours or ongoing support.",
        service3_title: "Verified Caregivers",
        service3_description: "All caregivers are background-checked, trained, and rated by families to ensure safe and reliable service.",
        faq_link: "FAQ",
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

function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.getElementById('htmlLang').setAttribute('lang', lang);
    document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });

    localStorage.setItem('language', lang);
}

window.onload = function() {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
};

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    <a href="/baby/index.html?email=${urlParams.get('email') || ''}">عرض البيبي سيتر</a>

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');
const profileLink = document.getElementById('profile-link');
if (profileLink && userId) {
    profileLink.href = `/my_pro/profile.html?user_id=${userId}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const loginLink = document.getElementById('login-link');
    const profileLink = document.getElementById('profile-link');

    if (loginLink && profileLink) {
        if (userData && userData.email) {
            loginLink.style.display = 'none';
            profileLink.style.display = 'block';
        } else {
            loginLink.style.display = 'block';
            profileLink.style.display = 'none';
        }
    }
});
