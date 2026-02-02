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

// تغيير اللغة
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.getElementById('htmlLang').setAttribute('lang', lang);
    document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('formLanguage').value = lang;

    document.getElementById('name').placeholder = lang === 'ar' ? 'أدخل اسمك' : 'Enter your name';
    document.getElementById('email').placeholder = lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email';
    document.getElementById('phone').placeholder = lang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number';
    document.getElementById('message').placeholder = lang === 'ar' ? 'اكتب رسالتك هنا' : 'Write your message here';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });

    localStorage.setItem('language', lang);
    updateNavbar();
    populateUserData();
}

// تحديث النافبار
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
        userNameText.textContent = userData.name || 'User';
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

function populateUserData() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.email) {
        document.getElementById('name').value = userData.name || '';
        document.getElementById('email').value = userData.email || '';
        document.getElementById('name').disabled = true;
        document.getElementById('email').disabled = true;
    } else {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('name').disabled = false;
        document.getElementById('email').disabled = false;
    }
}

let supabaseClient; // هنخليها جلوبال

window.onload = function() {
    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
    updateNavbar();
    populateUserData();

    // تهيئة EmailJS
    emailjs.init('vOU5RAqgHi0v0NJVa'); // استبدل بالـ Public Key بتاعك

    // تهيئة Supabase (غيرنا الاسم لـ supabaseClient)
    const supabaseUrl = 'https://ebzhfytrzcxsnepcudyl.supabase.co'; 
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'; // حط الـ anon key هنا
    supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
};

// معالجة الفورم
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = this;
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const button = form.querySelector('button');

    button.disabled = true;
    button.textContent = 'جارٍ الإرسال...';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const language = form.formLanguage.value;

    if (!name || !email || !phone || !message) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        button.disabled = false;
        button.textContent = translations[language].submit_button;
        setTimeout(() => errorMessage.style.display = 'none', 5000);
        return;
    }

    // إدخال البيانات في Supabase
    supabaseClient.from('contact_messages')
        .insert([{ name, email, phone, message, language }])
        .then(({ data, error }) => {
            if (error) throw error;

            // بعد الحفظ ابعت ايميل
            return emailjs.send('service_x5btrdq', 'template_e7jcew8', {
                name, email, phone, message, language
            });
        })
        .then(response => {
            console.log('Email sent:', response);
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset();
            setTimeout(() => successMessage.style.display = 'none', 5000);
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            setTimeout(() => errorMessage.style.display = 'none', 5000);
        })
        .finally(() => {
            button.disabled = false;
            button.textContent = translations[language].submit_button;
        });
});
