// 1. تعريف الكلاينت باسم supabaseClient
const supabaseClient = window.supabase.createClient(
  'https://ebzhfytrzcxsnepcudyl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'
);

// 2. تعريف عناصر الواجهة
const container = document.querySelector(".container");
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const status_el = document.querySelector("#status");

// 3. دالة تحديث الحالة (عشان تظهر الرسائل بشكل موحد)
function updateStatus(message, type = 'info') {
  if (!status_el) return;
  const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');
  const color = type === 'success' ? '#2ecc71' : (type === 'error' ? '#e74c3c' : '#38432b');
  
  status_el.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  status_el.style.color = color;
}

// 4. لوجيك التبديل بين الشاشات (الأنيماشين)
if (sign_up_btn && sign_in_btn) {
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    updateStatus("جاهز لإنشاء حساب جديد...");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    updateStatus("جاهز لتسجيل الدخول...");
  });
}

// 5. التحقق من مكتبة bcryptjs عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.bcryptLib = window.bcrypt || null;
    if (!window.bcryptLib) {
        console.error('Bcrypt library is missing!');
        updateStatus("خطأ: مكتبة التشفير غير موجودة", "error");
    } else {
        console.log('✅ Bcrypt loaded');
    }
});

// 2. كائن الترجمة (نسختك الكاملة)
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
        form_title: "تسجيل الدخول",
        form_title_signup: "إنشاء حساب",
        signup_span: "أو استخدم بريدك الإلكتروني للتسجيل",
        signin_span: "أو استخدم بريدك الإلكتروني وكلمة المرور",
        label_name: "أدخل اسمك",
        label_email: "أدخل بريدك الإلكتروني",
        label_password: "أدخل كلمة المرور",
        forgot_password: "نسيت كلمة المرور؟",
        btn_signin: "تسجيل الدخول",
        btn_signup: "إنشاء حساب",
        btn_back: "رجوع",
        welcome_back: "مرحبًا بعودتك!",
        welcome_back_text: "أدخل بياناتك الشخصية لاستخدام جميع ميزات الموقع",
        hello_friend: "مرحبًا، صديق!",
        hello_friend_text: "سجل ببياناتك الشخصية لاستخدام جميع ميزات الموقع",
        msg_ready_signup: "جاهز لإنشاء الحساب...",
        msg_ready_signin: "جاهز لتسجيل الدخول...",
        msg_validation_failed: "جميع الحقول مطلوبة.",
        msg_invalid_email: "تنسيق البريد الإلكتروني غير صحيح.",
        msg_short_password: "يجب أن تكون كلمة المرور 8 أحرف على الأقل.",
        msg_checking_email: "جاري التحقق من البريد الإلكتروني...",
        msg_email_exists: "البريد الإلكتروني مستخدم بالفعل.",
        msg_email_not_found: "البريد الإلكتروني غير موجود.",
        msg_sending_data: "جاري إرسال البيانات...",
        msg_signup_success: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.",
        msg_signin_success: "تم تسجيل الدخول بنجاح!",
        msg_incorrect_password: "كلمة المرور غير صحيحة.",
        msg_network_error: "خطأ في الشبكة. يرجى المحاولة مرة أخرى لاحقًا.",
        msg_server_error: "خطأ في الخادوم: "
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
        form_title: "Sign In",
        form_title_signup: "Sign Up",
        signup_span: "or use your email for registration",
        signin_span: "or use your email password",
        label_name: "Enter your name",
        label_email: "Enter your email",
        label_password: "Enter your password",
        forgot_password: "Forget Your Password?",
        btn_signin: "Sign In",
        btn_signup: "Sign Up",
        btn_back: "Back",
        welcome_back: "Welcome Back!",
        welcome_back_text: "Enter your personal details to use all of site features",
        hello_friend: "Hello, Friend!",
        hello_friend_text: "Register with your personal details to use all of site features",
        msg_ready_signup: "Ready to create an account...",
        msg_ready_signin: "Ready to sign in...",
        msg_validation_failed: "Please fill in all fields.",
        msg_invalid_email: "Invalid email format.",
        msg_short_password: "Password must be at least 8 characters.",
        msg_checking_email: "Checking email...",
        msg_email_exists: "Email already in use.",
        msg_email_not_found: "Email not found.",
        msg_sending_data: "Sending data...",
        msg_signup_success: "Account created successfully! Please sign in.",
        msg_signin_success: "Sign in successful!",
        msg_incorrect_password: "Incorrect password.",
        msg_network_error: "Network error. Please try again later.",
        msg_server_error: "Server error: "
    }
};

// 2. دوال التحديث والواجهة
function updateStatus(message, type = 'info') {
    const status = document.getElementById('status');
    if (!status) return;
    
    // تحديد الألوان بناءً على النوع
    if (type === 'success') {
        status.style.color = "#2ecc71";
        status.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    } else if (type === 'error') {
        status.style.color = "#e74c3c";
        status.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    } else {
        status.style.color = "#3498db";
        status.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    }
    status.style.opacity = '1';
}

function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const loginSignupLink = document.getElementById('login-signup-link');
    const dashboardLink = document.getElementById('dashboard-link');
    const logoutLink = document.getElementById('logout-link');

    if (userData.id || userData.contact_info) {
        if(loginSignupLink) loginSignupLink.style.display = 'none';
        if(dashboardLink) dashboardLink.style.display = 'block';
        if(logoutLink) logoutLink.style.display = 'block';
    } else {
        if(loginSignupLink) loginSignupLink.style.display = 'block';
        if(dashboardLink) dashboardLink.style.display = 'none';
        if(logoutLink) logoutLink.style.display = 'none';
    }
}

// 3. المنطق الرئيسي
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const signUpBtn = document.getElementById('sign-up-btn'); // مطابق للـ HTML الخاص بك
    const signInBtn = document.getElementById('sign-in-btn'); // مطابق للـ HTML الخاص بك
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    // أنيميشن التبديل
    signUpBtn?.addEventListener('click', () => {
        container.classList.add("sign-up-mode");
        updateStatus(translations[localStorage.getItem('language') || 'ar'].msg_ready_signup, 'info');
    });

    signInBtn?.addEventListener('click', () => {
        container.classList.remove("sign-up-mode");
        updateStatus(translations[localStorage.getItem('language') || 'ar'].msg_ready_signin, 'info');
    });

    // --- إنشاء حساب (إدخال مباشر للداتا بيز) ---
    signupForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        // const phone = document.getElementById('signup-phone').value.trim();
        const lang = document.getElementById('languageSelect')?.value || 'ar';

        updateStatus(translations[lang].msg_sending_data, 'info');

        try {
            const randomId = crypto.randomUUID(); 
            const { error } = await supabaseClient
                .from('users')
                .insert([{
                    id: randomId,
                    name: name,
                    contact_info: email,
                    pass: password,
                    // phone: phone
                }]);

            if (error) {
                if (error.code === '23505') throw new Error(translations[lang].msg_email_exists);
                throw error;
            }

            updateStatus(translations[lang].msg_signup_success, 'success');
            signupForm.reset();
            setTimeout(() => container.classList.remove("sign-up-mode"), 2000);

        } catch (err) {
            updateStatus(err.message, 'error');
        }
    });

   signinForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('signin-email').value.trim();
    const passwordInput = document.getElementById('signin-password').value.trim();
    const lang = document.getElementById('languageSelect')?.value || 'ar';

    updateStatus(translations[lang].msg_checking_email, 'info');

    try {
        // البحث عن المستخدم
        const { data: user, error } = await supabaseClient
            .from('users')
            .select('*')
            .eq('contact_info', emailInput)
            .maybeSingle(); // استخدام maybeSingle أفضل لتجنب أخطاء الاستعلام

        if (error) throw error;

        if (!user) {
            // لو اليوزر مش موجود
            updateStatus(translations[lang].msg_email_not_found, 'error');
            console.log("المستخدم غير موجود بالإيميل:", emailInput);
            return;
        }

        // التحقق من الباسورد
        if (user.pass === passwordInput) {
            updateStatus(translations[lang].msg_signin_success, 'success');
            localStorage.setItem('userData', JSON.stringify(user));
            
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 1500);
        } else {
            updateStatus(translations[lang].msg_incorrect_password, 'error');
        }

    } catch (err) {
        console.error("Login Error Details:", err);
        updateStatus("حدث خطأ في الاتصال بالقاعدة", 'error');
    }
});

    updateNavbar();
});