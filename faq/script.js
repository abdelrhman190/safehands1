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
        hero_title: "كيف يمكننا مساعدتك؟",
        hero_description: "ابحث عن نصائح وإجابات من فريق الدعم لدينا بسرعة أو تواصل معنا",
        search_placeholder: "ابحث عن إجابات...",
        send_button: "إرسال",
        allergy_title: "أنواع الحساسية الشائعة",
        allergy_general: "هل تعاني من أي حساسية؟",
        allergy_milk: "هل تعاني من حساسية الحليب؟",
        allergy_egg: "هل تعاني من حساسية البيض؟",
        allergy_peanut: "هل تعاني من حساسية الفول السوداني؟ (مثل اللوز)",
        allergy_seafood: "هل تعاني من حساسية المأكولات البحرية؟ (الأسماك أو الجمبري)",
        allergy_meat: "هل تعاني من حساسية اللحوم؟",
        allergy_pet: "هل تعاني من حساسية الحيوانات الأليفة؟ (القطط أو الكلاب)",
        allergy_wheat: "هل تعاني من حساسية القمح؟",
        allergy_other: "إذا كنت تعاني من أي حساسيات أخرى، من فضلك أخبرنا",
        allergy_placeholder: "اكتب ملاحظاتك هنا...",
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
        hero_title: "How Can We Help?",
        hero_description: "Find advice and answers from our support team fast or get in touch",
        search_placeholder: "Search for answers...",
        send_button: "Send",
        allergy_title: "Common Allergy Types",
        allergy_general: "Do you have an allergy?",
        allergy_milk: "Do you have a milk allergy?",
        allergy_egg: "Do you have an egg allergy?",
        allergy_peanut: "Do you have a peanut allergy? (like almonds)",
        allergy_seafood: "Do you have a seafood allergy? (fish or shrimp)",
        allergy_meat: "Do you have a meat allergy?",
        allergy_pet: "Do you have a pet allergy? (cats or dogs)",
        allergy_wheat: "Are you allergic to wheat?",
        allergy_other: "If you have any other allergies, please let us know",
        allergy_placeholder: "Type your notes here...",
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

// --- دالة تغيير اللغة ---
function changeLanguage() {
    const langSelect = document.getElementById('languageSelect');
    if (!langSelect) return;

    const lang = langSelect.value;
    const htmlElement = document.documentElement; // استهداف الـ HTML مباشرة

    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    localStorage.setItem('language', lang);
}

// --- دالة تحديث الناف بار حسب حالة المستخدم ---
function updateNavigation() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const userNameText = document.getElementById('user-name-text');

    const userEmail = userData.contact_info || userData.email;
    const userName = userData.name;

    if (userEmail) {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (userNameDisplay) {
            userNameDisplay.style.display = 'inline-flex';
            if (userNameText) userNameText.textContent = userName || "مستخدم";
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (userNameDisplay) userNameDisplay.style.display = 'none';
    }
}

// --- دالة تسجيل الخروج ---
function logout() {
    localStorage.removeItem('userData'); 
    updateNavigation(); 
    window.location.href = '/log/login.html'; 
}

// --- دالة البحث عن الحساسية ---
function performSearch() {
    const searchInput = document.getElementById('search');
    const resultsDiv = document.getElementById('search-results');
    if (!searchInput || !resultsDiv) return;

    const query = searchInput.value.toLowerCase().trim();
    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'none';

    if (!query) return;

    const allLabels = document.querySelectorAll('.allergy-label');
    let hasResults = false;

    allLabels.forEach(label => {
        if (label.textContent.toLowerCase().includes(query)) {
            hasResults = true;
            const result = document.createElement('p');
            const sectionId = label.closest('.faq-section')?.id;
            const sectionName = document.querySelector(`.tab-link[data-section="${sectionId}"]`)?.textContent || 'سيكشن';
            
            result.textContent = `${label.textContent} - في: ${sectionName}`;
            result.onclick = () => {
                document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
                document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');
                
                document.querySelectorAll('.faq-section').forEach(s => s.classList.remove('active-section'));
                document.getElementById(sectionId)?.classList.add('active-section');
                
                const card = label.closest('.allergy-card');
                if (card) {
                    document.querySelectorAll('.allergy-card').forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };
            resultsDiv.appendChild(result);
        }
    });

    if (hasResults) resultsDiv.style.display = 'block';
}

// --- دالة إرسال الإيميل ---
async function sendEmail() {
    const additionalInput = document.getElementById('additional');
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (!userData.email) {
        alert('يرجى تسجيل الدخول أولاً');
        return;
    }

    const additional = additionalInput?.value.trim() || "";

    if (typeof emailjs === 'undefined') {
        alert('EmailJS غير محمل');
        return;
    }

    try {
        await emailjs.send('service_x5btrdq', 'template_f9cl6g6', {
            message: additional,
            user_email: userData.email, // تأكد إن الـ Key ده مطابق للـ Template في EmailJS
            to_email: 'abdelrhmanebrahiim@gmail.com'
        }, 'vOU5RAqgHi0v0NJVa');
        
        alert('تم الإرسال بنجاح!');
        if (additionalInput) additionalInput.value = '';
    } catch (error) {
        alert('فشل الإرسال: ' + error.text);
    }
}

// --- تشغيل كل شيء عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. ضبط اللغة المحفوظة
    const savedLang = localStorage.getItem('language') || 'ar';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
        changeLanguage();
    }

    // 2. تحديث الناف بار
    updateNavigation();

    // 3. مستمعي أحداث بطاقات الحساسية
    document.querySelectorAll('.allergy-label').forEach(label => {
        label.addEventListener('click', () => {
            const card = label.closest('.allergy-card');
            if (card) {
                const isActive = card.classList.contains('active');
                document.querySelectorAll('.allergy-card').forEach(el => el.classList.remove('active'));
                if (!isActive) card.classList.add('active');
            }
        });
    });

    // 4. مستمعي أحداث التبويبات (Tabs)
    document.querySelectorAll('.tab-link').forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.getAttribute('data-section');
            document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            document.querySelectorAll('.faq-section').forEach(s => s.classList.remove('active-section'));
            document.getElementById(sectionId)?.classList.add('active-section');
        });
    });

    // 5. ربط البحث والارسال
    document.getElementById('search')?.addEventListener('input', performSearch);
    document.getElementById('send-button')?.addEventListener('click', sendEmail);
});