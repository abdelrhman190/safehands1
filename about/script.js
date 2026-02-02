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
                vision_title: "رؤيتنا",
                vision_description: "في مجتمع يحترم التقاليد، الروابط العائلية، والدعم المجتمعي، نسعى لسد الفجوة بين احتياجات الرعاية الحديثة والقيم الثقافية المتأصلة في رعاية آبائنا وأجدادنا. سواء كنت ترعى أحد أحبائك في المنزل أو تبحث عن خدمات موثوقة، موقعنا يقدم إرشادات موثوقة، موارد مفيدة، ومعلومات محدثة تتناسب مع أسلوب الحياة المصري.",
                mission_title: "مهمتنا",
                mission_description: "ما يميزنا هو التزامنا بالسلامة والثقة. كل مقال، اقتراح، وتوصية خدمة على منصتنا مصممة بأعلى معايير الرعاية والأمان في الاعتبار—لأن راحة البال لك ولأحبائك هي أولويتنا القصوى.",
                services_title: "خدماتنا",
                service_medical: "الاستشارات الطبية: الوصول إلى متخصصين موثوقين في الرعاية الطبية للمسنين.",
                service_home_care: "خدمات الرعاية المنزلية: توصيات لمقدمي رعاية منزلية موثوقين ومساعدة يومية.",
                service_emotional: "الدعم العاطفي والنفسي: نصائح وموارد لدعم الصحة النفسية للمسنين ومقدمي الرعاية على حد سواء.",
                service_educational: "المحتوى التعليمي: مقالات وأدلة عن تغذية المسنين، الحركة، الحالات المزمنة، وأكثر.",
                service_community: "دعم المجتمع: مساحة آمنة ومحترمة للتواصل مع الآخرين الذين يشاركون نفس رحلة الرعاية.",
                book_now: "احجز الآن",
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
                vision_title: "Our Vision",
                vision_description: "In a society that honors tradition, family bonds, and community support, we aim to bridge the gap between modern caregiving needs and the deeply rooted cultural values of caring for our parents and grandparents. Whether you're caring for a loved one at home or seeking trusted services, our website offers reliable guidance, helpful resources, and up-to-date information tailored to the Egyptian way of life.",
                mission_title: "Our Mission",
                mission_description: "What sets us apart is our commitment to safety and trust. Every article, suggestion, and service recommendation on our platform is designed with the highest standards of care and security in mind—because peace of mind for you and your loved ones is our top priority.",
                services_title: "Our Services",
                service_medical: "Medical Consultations: Access to trusted healthcare professionals specializing in geriatric care.",
                service_home_care: "Home Care Services: Recommendations for reliable in-home caregivers and daily assistance.",
                service_emotional: "Emotional & Psychological Support: Tips and resources to support the mental well-being of seniors and caregivers alike.",
                service_educational: "Educational Content: Articles and guides on elderly nutrition, mobility, chronic conditions, and more.",
                service_community: "Community Support: A safe, respectful space to connect with others who share similar caregiving journeys.",
                book_now: "Book Now",
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
            updateNavbar();
        }
function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const loginLink = document.getElementById('login-link'); // تعديل الـ ID
    const profileLink = document.getElementById('profile-link'); // تعديل الـ ID ليطابق HTML
    const logoutLink = document.getElementById('logout-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const userNameText = document.getElementById('user-name-text');

    // لوغ للتصحيح
    console.log('userData:', userData);

    if (userData.email) {
        loginLink.style.display = 'none';
        profileLink.style.display = 'block';
        logoutLink.style.display = 'block';
        userNameDisplay.style.display = 'inline-flex';
        userNameText.textContent = userData.name || 'مستخدم';
    } else {
        loginLink.style.display = 'block';
        profileLink.style.display = 'none';
        logoutLink.style.display = 'none';
        userNameDisplay.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('userData');
    updateNavbar();
    window.location.href = '../log/login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
    updateNavbar();
});