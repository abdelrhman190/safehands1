// تهيئة Supabase Client
const supabase = window.supabase.createClient('https://ebzhfytrzcxsnepcudyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc');

// التحقق من تحميل مكتبة bcryptjs
document.addEventListener('DOMContentLoaded', () => {
    const lib = window.bcrypt || null;
    if (!lib) {
        const statusEl = document.getElementById('status');
        if (statusEl) statusEl.innerHTML = `<i class="fas fa-exclamation-circle"></i> Error: bcryptjs library is missing.`;
        console.error('bcryptjs not found on window.bcrypt');
        return;
    }
    window.bcryptLib = lib;
    console.log('✅ bcryptjs loaded:', !!window.bcryptLib);
});
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signin_form = document.querySelector("#signin-form");
const signup_form = document.querySelector("#signup-form");
const status = document.querySelector("#status");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  status.innerHTML = '<i class="fas fa-info-circle"></i> جاهز لإنشاء حساب...';
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  status.innerHTML = '<i class="fas fa-info-circle"></i> جاهز لتسجيل الدخول...';
});

// Basic form validation for sign-in
signin_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#signin-email").value;
  const password = document.querySelector("#signin-password").value;

  if (!email || !password) {
    status.innerHTML = '<i class="fas fa-exclamation-circle"></i> من فضلك، أدخل البريد الإلكتروني وكلمة المرور';
    return;
  }

  status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الدخول...';
  // هنا المفروض يكون فيه كود الـ backend (مثل Supabase) لتسجيل الدخول
  setTimeout(() => {
    status.innerHTML = '<i class="fas fa-check-circle"></i> تم تسجيل الدخول بنجاح!';
  }, 1000);
});

// Basic form validation for sign-up
signup_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const profilePic = document.querySelector("#signup-profile-pic").value;
  const name = document.querySelector("#signup-name").value;
  const phone = document.querySelector("#signup-phone").value;
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;
  const verificationCode = document.querySelector("#signup-verification-code").value;

  if (!profilePic || !name || !phone || !email || !password || !verificationCode) {
    status.innerHTML = '<i class="fas fa-exclamation-circle"></i> من فضلك، أدخل جميع الحقول';
    return;
  }

  status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إنشاء الحساب...';
  // هنا المفروض يكون فيه كود الـ backend (مثل Supabase) لإنشاء الحساب
  setTimeout(() => {
    status.innerHTML = '<i class="fas fa-check-circle"></i> تم إنشاء الحساب بنجاح!';
  }, 1000);
});

// Placeholder for loginWithGoogle
function loginWithGoogle() {
  status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الدخول بجوجل...';
  // هنا المفروض يكون فيه كود الـ Google OAuth
  setTimeout(() => {
    status.innerHTML = '<i class="fas fa-check-circle"></i> تم تسجيل الدخول بجوجل بنجاح!';
  }, 1000);
}

// Placeholder for loginWithFacebook
function loginWithFacebook() {
  status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الدخول بفيسبوك...';
  // هنا المفروض يكون فيه كود الـ Facebook OAuth
  setTimeout(() => {
    status.innerHTML = '<i class="fas fa-check-circle"></i> تم تسجيل الدخول بفيسبوك بنجاح!';
  }, 1000);
}



// Placeholder for logout
function logout() {
  status.innerHTML = '<i class="fas fa-sign-out-alt"></i> جاري تسجيل الخروج...';
  // هنا المفروض يكون فيه كود الـ backend لتسجيل الخروج
  setTimeout(() => {
    status.innerHTML = '<i class="fas fa-check-circle"></i> تم تسجيل الخروج بنجاح!';
    document.querySelector("#dashboard-link").style.display = "none";
    document.querySelector("#logout-link").style.display = "none";
    document.querySelector("#login-signup-link").style.display = "block";
  }, 1000);
}
// كائن الترجمة
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
        label_phone: "أدخل رقم هاتفك",
        label_password: "أدخل كلمة المرور",
        label_verification_code: "أدخل رمز التأكيد",
        label_profile_pic: "رفع صورة الملف الشخصي",
        forgot_password: "نسيت كلمة المرور؟",
        btn_signin: "تسجيل الدخول",
        btn_signup: "إنشاء حساب",
        btn_anonymous_signin: "تسجيل الدخول كمجهول",
        btn_back: "رجوع",
        welcome_back: "مرحبًا بعودتك!",
        welcome_back_text: "أدخل بياناتك الشخصية لاستخدام جميع ميزات الموقع",
        hello_friend: "مرحبًا، صديق!",
        hello_friend_text: "سجل ببياناتك الشخصية لاستخدام جميع ميزات الموقع",
        msg_ready_signup: "جاهز لإنشاء الحساب...",
        msg_ready_signin: "جاهز لتسجيل الدخول...",
        msg_validation_failed: "جميع الحقول مطلوبة.",
        msg_invalid_email: "تنسيق البريد الإلكتروني غير صحيح.",
        msg_invalid_phone: "رقم الهاتف غير صحيح.",
        msg_short_password: "يجب أن تكون كلمة المرور 8 أحرف على الأقل.",
        msg_checking_email: "جاري التحقق من البريد الإلكتروني...",
        msg_email_exists: "البريد الإلكتروني مستخدم بالفعل.",
        msg_email_not_found: "البريد الإلكتروني غير موجود.",
        msg_sending_data: "جاري إرسال البيانات...",
        msg_signup_success: "تم إرسال رمز التحقق إلى بريدك الإلكتروني!",
        msg_signin_success: "تم تسجيل الدخول بنجاح!",
        msg_incorrect_password: "كلمة المرور غير صحيحة.",
        msg_network_error: "خطأ في الشبكة. يرجى المحاولة مرة أخرى لاحقًا.",
        msg_server_error: "خطأ في الخادوم: ",
        msg_name_too_long: "الاسم يجب أن يكون أقل من 50 حرفًا.",
        msg_bcrypt_missing: "خطأ: مكتبة bcryptjs غير موجودة.",
        msg_image_upload_failed: "فشل رفع الصورة.",
        msg_otp_verified: "تم التحقق من البريد الإلكتروني بنجاح!",
        msg_invalid_code: "رمز التحقق غير صحيح.",
        msg_google_signin_failed: "فشل تسجيل الدخول عبر Google.",
        msg_facebook_signin_failed: "فشل تسجيل الدخول عبر Facebook."
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
        label_phone: "Enter your phone",
        label_password: "Enter your password",
        label_verification_code: "Enter verification code",
        label_profile_pic: "Upload profile picture",
        forgot_password: "Forget Your Password?",
        btn_signin: "Sign In",
        btn_signup: "Sign Up",
        btn_anonymous_signin: "Sign in as Anonymous",
        btn_back: "Back",
        welcome_back: "Welcome Back!",
        welcome_back_text: "Enter your personal details to use all of site features",
        hello_friend: "Hello, Friend!",
        hello_friend_text: "Register with your personal details to use all of site features",
        msg_ready_signup: "Ready to create an account...",
        msg_ready_signin: "Ready to sign in...",
        msg_validation_failed: "Please fill in all fields.",
        msg_invalid_email: "Invalid email format.",
        msg_invalid_phone: "Invalid phone format.",
        msg_short_password: "Password must be at least 8 characters.",
        msg_checking_email: "Checking email...",
        msg_email_exists: "Email already in use.",
        msg_email_not_found: "Email not found.",
        msg_sending_data: "Sending data...",
        msg_signup_success: "Verification code sent to your email!",
        msg_signin_success: "Sign in successful!",
        msg_incorrect_password: "Incorrect password.",
        msg_network_error: "Network error. Please try again later.",
        msg_server_error: "Server error: ",
        msg_name_too_long: "Name must be less than 50 characters.",
        msg_bcrypt_missing: "Error: bcryptjs library is missing.",
        msg_image_upload_failed: "Failed to upload profile picture.",
        msg_otp_verified: "Email verified successfully!",
        msg_invalid_code: "Invalid verification code.",
        msg_google_signin_failed: "Failed to sign in with Google.",
        msg_facebook_signin_failed: "Failed to sign in with Facebook."
    }
};

// دالة تغيير اللغة
function changeLanguage() {
    const lang = document.getElementById('languageSelect')?.value || 'ar';
    const html = document.getElementById('htmlLang');
    if (html) {
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key] || element.textContent;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[lang][key] || element.placeholder;
    });

    const status = document.getElementById('status');
    if (status) {
        status.innerHTML = `<i class="fas fa-info-circle"></i> ${translations[lang].msg_ready_signin}`;
    }

    localStorage.setItem('language', lang);
    updateNavbar();
}

// دالة تحديث شريط التنقل
function updateNavbar() {
    const loginSignupLink = document.getElementById('login-signup-link');
    const dashboardLink = document.getElementById('dashboard-link');
    const logoutLink = document.getElementById('logout-link');

    if (!loginSignupLink || !dashboardLink || !logoutLink) {
        console.error('Navbar elements not found');
        return;
    }

    let userData;
    try {
        userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (!userData || typeof userData !== 'object') {
            localStorage.removeItem('userData');
            userData = {};
        }
    } catch (error) {
        console.error('Error parsing userData:', error);
        localStorage.removeItem('userData');
        userData = {};
    }

    if (userData.email || userData.id) {
        loginSignupLink.style.display = 'none';
        dashboardLink.style.display = 'block';
        logoutLink.style.display = 'block';
    } else {
        loginSignupLink.style.display = 'block';
        dashboardLink.style.display = 'none';
        logoutLink.style.display = 'none';
    }
}

// دالة تسجيل الخروج
function logout() {
    localStorage.removeItem('userData');
    supabase.auth.signOut();
    updateNavbar();
    window.location.href = '/log/login.html';
}

// دالة تأخير
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// دالة تحديث رسالة الحالة
function updateStatus(message, isSuccess = false) {
    const status = document.getElementById('status');
    if (!status) return;

    status.classList.remove('success');
    if (isSuccess) {
        status.classList.add('success');
        status.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    } else {
        status.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    }
    status.style.display = 'flex';
    status.style.visibility = 'visible';
    status.style.opacity = '1';

    setTimeout(() => {
        status.style.opacity = '0';
        status.style.visibility = 'hidden';
    }, 3000);
}

// دالة تسجيل الدخول المجهول
async function loginAnonymously() {
    const lang = document.getElementById('languageSelect').value;
    try {
        const { data, error } = await supabase.auth.signInAnonymously();
        if (error) {
            console.error('Anonymous Sign-In Error:', error);
            updateStatus(translations[lang].msg_server_error + error.message);
            return;
        }

        const user = data.user;

        const { error: insertError } = await supabase
            .from('users')
            .insert([{
                id: user.id,
                name: 'Anonymous',
                contact_info: null,
                phone: '',
                profile_pic: null,
                pass: null,
                is_anonymous: true
            }]);

        if (insertError) {
            console.error('Insert Error:', insertError);
            updateStatus(translations[lang].msg_server_error + insertError.message);
            return;
        }

        const userData = { id: user.id, name: 'Anonymous', email: null, phone: null, profile_pic: null };
        localStorage.setItem('userData', JSON.stringify(userData));
        updateStatus(translations[lang].msg_signin_success, true);
        updateNavbar();
        await delay(2000);
        window.location.href = '/index.html';
    } catch (error) {
        console.error('Anonymous Sign-In error:', error);
        updateStatus(translations[lang].msg_network_error + ' ' + error.message);
    }
}

// دالة تسجيل الدخول عبر Google
async function loginWithGoogle() {
    const lang = document.getElementById('languageSelect').value;
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/log/login.html`
            }
        });

        if (error) {
            console.error('Google Sign-In Error:', error);
            updateStatus(translations[lang].msg_google_signin_failed + ' ' + error.message);
            return;
        }
    } catch (error) {
        console.error('Google Sign-In error:', error);
        updateStatus(translations[lang].msg_network_error + ' ' + error.message);
    }
}

// دالة تسجيل الدخول عبر Facebook
async function loginWithFacebook() {
    const lang = document.getElementById('languageSelect').value;
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'facebook',
            options: {
                redirectTo: `${window.location.origin}/log/login.html`
            }
        });

        if (error) {
            console.error('Facebook Sign-In Error:', error);
            updateStatus(translations[lang].msg_facebook_signin_failed + ' ' + error.message);
            return;
        }
    } catch (error) {
        console.error('Facebook Sign-In error:', error);
        updateStatus(translations[lang].msg_network_error + ' ' + error.message);
    }
}

// إعداد تحميل الصفحة
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');
    const status = document.getElementById('status');

    if (!container || !registerBtn || !loginBtn || !signupForm || !signinForm || !status) {
        console.error('One or more elements not found:', { container, registerBtn, loginBtn, signupForm, signinForm, status });
        return;
    }

    const savedLang = localStorage.getItem('language') || 'ar';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage();
    updateNavbar();

    status.style.display = 'flex';
    status.style.visibility = 'visible';
    status.style.opacity = '1';
    status.innerHTML = `<i class="fas fa-info-circle"></i> ${translations[savedLang].msg_ready_signin}`;

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
        updateStatus(translations[savedLang].msg_ready_signup);
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
        updateStatus(translations[savedLang].msg_ready_signin);
    });

    // التحقق من جلسة OAuth بعد إعادة التوجيه
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
        console.error('Session Error:', sessionError);
    } else if (session) {
        const user = session.user;
        console.log('OAuth Session User:', user);

        // التحقق من وجود المستخدم في جدول users بناءً على contact_info
        const { data: existingUser, error: fetchError } = await supabase
            .from('users')
            .select('*')
            .eq('contact_info', user.email)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            console.error('Fetch User Error:', fetchError);
            updateStatus(translations[savedLang].msg_server_error + fetchError.message);
            return;
        }

        if (existingUser) {
            // المستخدم موجود بالفعل
            const userData = {
                id: existingUser.id,
                name: existingUser.name,
                email: existingUser.contact_info,
                phone: existingUser.phone || '',
                profile_pic: existingUser.profile_pic || user.user_metadata.avatar_url || null
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            updateStatus(translations[savedLang].msg_signin_success, true);
            updateNavbar();
            await delay(2000);
            window.location.href = '/index.html';
        } else {
            // إدراج مستخدم جديد
            const { error: insertError } = await supabase
                .from('users')
                .insert([{
                    id: user.id,
                    name: user.user_metadata.full_name || user.email.split('@')[0],
                    contact_info: user.email,
                    phone: '',
                    profile_pic: user.user_metadata.avatar_url || null,
                    pass: null,
                    is_anonymous: false
                }]);

            if (insertError) {
                console.error('Insert Error:', insertError);
                if (insertError.code === '23505') { // duplicate key error
                    updateStatus(translations[savedLang].msg_email_exists);
                } else {
                    updateStatus(translations[savedLang].msg_server_error + insertError.message);
                }
                return;
            }

            const userData = {
                id: user.id,
                name: user.user_metadata.full_name || user.email.split('@')[0],
                email: user.email,
                phone: '',
                profile_pic: user.user_metadata.avatar_url || null
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            updateStatus(translations[savedLang].msg_signin_success, true);
            updateNavbar();
            await delay(2000);
            window.location.href = '/index.html';
        }
    }
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name')?.value?.trim() || '';
    const email = document.getElementById('signup-email')?.value?.trim() || '';
    const phone = document.getElementById('signup-phone')?.value?.trim() || '';
    const profilePic = document.getElementById('signup-profile-pic')?.files[0];
    const password = document.getElementById('signup-password')?.value?.trim() || '';
    const verificationCode = document.getElementById('signup-verification-code')?.value?.trim() || '';
    const lang = document.getElementById('languageSelect')?.value || 'ar';

    updateStatus('');

    // التحقق من صحة المدخلات
    if (!name || !email || !phone || !password) {
        updateStatus(translations[lang].msg_validation_failed);
        return;
    }
    if (name.length > 50) {
        updateStatus(translations[lang].msg_name_too_long);
        return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        updateStatus(translations[lang].msg_invalid_email);
        return;
    }
    if (!phone.match(/^\+?[1-9]\d{1,14}$/)) {
        updateStatus(translations[lang].msg_invalid_phone);
        return;
    }
    if (password.length < 8) {
        updateStatus(translations[lang].msg_short_password);
        return;
    }
    if (!window.bcryptLib) {
        updateStatus(translations[lang].msg_bcrypt_missing);
        console.error('bcryptLib is not loaded');
        return;
    }

    try {
        if (!navigator.onLine) {
            updateStatus(translations[lang].msg_network_error);
            return;
        }

        // التحقق من وجود البريد الإلكتروني
        updateStatus(`<i class="fas fa-spinner fa-spin"></i> ${translations[lang].msg_checking_email}`);
        const { data: existingUser, error: fetchError } = await supabase
            .from('users')
            .select('contact_info')
            .eq('contact_info', email)
            .single();

        if (existingUser) {
            updateStatus(translations[lang].msg_email_exists);
            return;
        }
        if (fetchError && fetchError.code !== 'PGRST116') {
            console.error('Fetch Email Error:', fetchError);
            updateStatus(translations[lang].msg_server_error + fetchError.message);
            return;
        }

        if (verificationCode) {
            // التحقق من OTP
            updateStatus(`<i class="fas fa-spinner fa-spin"></i> ${translations[lang].msg_checking_email}`);
            console.log('Verify OTP Inputs:', { email, token: verificationCode, type: 'signup' });
            if (typeof email !== 'string' || typeof verificationCode !== 'string') {
                console.error('Invalid OTP inputs:', { email, token: verificationCode });
                updateStatus(translations[lang].msg_network_error + ' Invalid OTP inputs');
                return;
            }
            const { data, error } = await supabase.auth.verifyOtp({
                email: email,
                token: verificationCode,
                type: 'signup'
            });

            if (error) {
                console.error('Verify OTP Error:', error);
                updateStatus(translations[lang].msg_invalid_code + ' ' + error.message);
                return;
            }

            const { data: userData, error: userError } = await supabase.auth.getUser();
            if (userError) {
                console.error('Get User Error:', userError);
                updateStatus(translations[lang].msg_server_error + userError.message);
                return;
            }

            const user = userData.user;
            console.log('User after OTP verification:', user);

            // رفع الصورة
            let profilePicUrl = null;
            if (profilePic) {
                const fileExt = profilePic.name.split('.').pop();
                const fileName = `${user.id}.${fileExt}`;
                console.log('Uploading profile picture:', fileName);
                const { error: uploadError } = await supabase.storage
                    .from('profile-pics')
                    .upload(fileName, profilePic, {
                        cacheControl: '3600',
                        upsert: true
                    });
                if (uploadError) {
                    console.error('Upload Error:', uploadError);
                    updateStatus(translations[lang].msg_image_upload_failed + ' ' + uploadError.message);
                    return;
                }
                const { data: urlData } = supabase.storage
                    .from('profile-pics')
                    .getPublicUrl(fileName);
                profilePicUrl = urlData.publicUrl;
                console.log('Profile picture URL:', profilePicUrl);
            } else {
                console.warn('No profile picture provided');
            }

            // تشفير كلمة المرور
            console.log('Encrypting password:', password);
            if (typeof password !== 'string' || !password) {
                console.error('Invalid password for hashing:', password);
                updateStatus(translations[lang].msg_network_error + ' Invalid password for hashing');
                return;
            }
            let hashedPassword;
            try {
                const salt = window.bcryptLib.genSaltSync(10);
                hashedPassword = window.bcryptLib.hashSync(password, salt);
                console.log('Hashed password:', hashedPassword);
                if (!hashedPassword || typeof hashedPassword !== 'string') {
                    console.error('Password hashing failed:', hashedPassword);
                    updateStatus(translations[lang].msg_server_error + ' Password hashing failed');
                    return;
                }
            } catch (hashError) {
                console.error('Hashing Error:', hashError);
                updateStatus(translations[lang].msg_server_error + ' Password hashing error: ' + hashError.message);
                return;
            }

            // إدراج المستخدم في جدول users
            const userDataToInsert = {
                id: user.id,
                name,
                contact_info: email,
                phone,
                profile_pic: profilePicUrl,
                pass: hashedPassword,
                is_anonymous: false
            };
            console.log('Inserting user into users table:', userDataToInsert);
            const { error: insertError } = await supabase
                .from('users')
                .insert([userDataToInsert]);

            if (insertError) {
                console.error('Insert Error:', insertError);
                if (insertError.code === '23505') {
                    updateStatus(translations[lang].msg_email_exists);
                } else if (insertError.code === '23502') {
                    console.error('Not-null constraint violation:', insertError);
                    updateStatus(translations[lang].msg_server_error + ' Missing required field: pass');
                } else {
                    updateStatus(translations[lang].msg_server_error + insertError.message);
                }
                return;
            }

            // التحقق من الإدراج
            const { data: insertedUser, error: selectError } = await supabase
                .from('users')
                .select('id, name, contact_info, phone, profile_pic, pass, is_anonymous')
                .eq('id', user.id)
                .single();
            if (selectError || !insertedUser) {
                console.error('Select Inserted User Error:', selectError);
                updateStatus(translations[lang].msg_server_error + ' Failed to verify inserted user');
                return;
            }
            console.log('Inserted user:', insertedUser);
            if (!insertedUser.pass) {
                console.error('Password not saved in database:', insertedUser);
                updateStatus(translations[lang].msg_server_error + ' Password not saved');
                return;
            }

            const userDataObj = { id: user.id, name, email, phone, profile_pic: profilePicUrl };
            localStorage.setItem('userData', JSON.stringify(userDataObj));
            updateStatus(translations[lang].msg_otp_verified, true);
            signupForm.reset();
            await delay(2000);
            container.classList.remove("active");
            updateStatus(translations[lang].msg_ready_signin);
        } else {
            // إرسال طلب التسجيل مع OTP
            updateStatus(`<i class="fas fa-spinner fa-spin"></i> ${translations[lang].msg_sending_data}`);
            console.log('Sign Up Inputs:', {
                email,
                password,
                options: { data: { full_name: name, phone }, emailRedirectTo: 'https://safehandscare.netlify.app/log/login.html' }
            });
            if (typeof email !== 'string' || typeof password !== 'string') {
                console.error('Invalid sign-up inputs:', { email, password });
                updateStatus(translations[lang].msg_network_error + ' Invalid sign-up inputs');
                return;
            }
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: { full_name: name, phone: phone },
                    emailRedirectTo: 'https://safehandscare.netlify.app/log/login.html'
                }
            });

            if (error) {
                console.error('Sign Up Error:', error);
                if (error.code === 'user_already_exists') {
                    updateStatus(translations[lang].msg_email_exists);
                } else {
                    updateStatus(translations[lang].msg_server_error + error.message);
                }
                return;
            }

            updateStatus(translations[lang].msg_signup_success, true);
        }
    } catch (error) {
        console.error('Sign Up error:', error);
        updateStatus(translations[lang].msg_network_error + ' ' + error.message);
    }
});
    // إرسال نموذج تسجيل الدخول
signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email')?.value?.trim() || '';
    const password = document.getElementById('signin-password')?.value?.trim() || '';
    const lang = document.getElementById('languageSelect')?.value || 'ar';

    updateStatus('');

    // التحقق من صحة المدخلات
    if (!email || !password) {
        updateStatus(translations[lang].msg_validation_failed);
        return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        updateStatus(translations[lang].msg_invalid_email);
        return;
    }
    if (password.length < 8) {
        updateStatus(translations[lang].msg_short_password);
        return;
    }
    if (!window.bcryptLib) {
        updateStatus(translations[lang].msg_bcrypt_missing);
        console.error('bcryptLib is not loaded');
        return;
    }

    try {
        if (!navigator.onLine) {
            updateStatus(translations[lang].msg_network_error);
            return;
        }

        updateStatus(`<i class="fas fa-spinner fa-spin"></i> ${translations[lang].msg_checking_email}`);
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('contact_info', email)
            .single();

        if (error || !data) {
            console.error('Fetch User Error:', error);
            updateStatus(translations[lang].msg_email_not_found);
            return;
        }

        const user = data;
        console.log('Fetched user:', user);

        // التحقق من أن user.pass موجود وهو سلسلة نصية
        if (!user.pass || typeof user.pass !== 'string') {
            console.error('Invalid user.pass:', user.pass);
            updateStatus(translations[lang].msg_incorrect_password + ' (No password stored, please reset your password)');
            return;
        }

        // التحقق من أن password سلسلة نصية
        if (typeof password !== 'string') {
            console.error('Invalid password input:', password);
            updateStatus(translations[lang].msg_network_error + ' Invalid password input');
            return;
        }

        // مقارنة كلمة المرور
        console.log('Comparing passwords:', { input: password, stored: user.pass });
        let isMatch;
        try {
            isMatch = window.bcryptLib.compareSync(password, user.pass);
        } catch (compareError) {
            console.error('Password comparison error:', compareError);
            updateStatus(translations[lang].msg_server_error + ' Password comparison failed');
            return;
        }
        if (!isMatch) {
            updateStatus(translations[lang].msg_incorrect_password);
            return;
        }

        // تسجيل الدخول باستخدام Supabase Auth
        console.log('Attempting Supabase Auth sign-in:', { email });
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (signInError) {
            console.error('Sign In Error:', signInError);
            updateStatus(translations[lang].msg_server_error + signInError.message);
            return;
        }

        const userData = { id: user.id, name: user.name, email: user.contact_info, phone: user.phone, profile_pic: user.profile_pic };
        localStorage.setItem('userData', JSON.stringify(userData));
        updateStatus(translations[lang].msg_signin_success, true);
        updateNavbar();
        await delay(2000);
        window.location.href = '/index.html';
    } catch (error) {
        console.error('Sign In error:', error);
        updateStatus(translations[lang].msg_network_error + ' ' + error.message);
    }
});
    // التحقق من البريد الإلكتروني في الوقت الفعلي
    document.getElementById('signup-email')?.addEventListener('input', async (e) => {
        const lang = document.getElementById('languageSelect').value;
        const email = e.target.value.trim();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            updateStatus(translations[lang].msg_invalid_email);
            return;
        }

        try {
            const { data, error } = await supabase
                .from('users')
                .select('contact_info')
                .eq('contact_info', email)
                .single();

            if (data) {
                updateStatus(translations[lang].msg_email_exists);
            } else if (error && error.code !== 'PGRST116') {
                console.error('Email Check Error:', error);
                updateStatus(translations[lang].msg_server_error + error.message);
            } else {
                updateStatus('');
            }
        } catch (error) {
            console.error('Email Check error:', error);
            updateStatus(translations[lang].msg_network_error + ' ' + error.message);
        }
    });

    document.getElementById('signin-email')?.addEventListener('input', (e) => {
        const lang = document.getElementById('languageSelect').value;
        if (!e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            updateStatus(translations[lang].msg_invalid_email);
        } else {
            updateStatus('');
        }
    });

    // إضافة مستمع لتسجيل الدخول المجهول
    document.getElementById('anonymous-signin')?.addEventListener('click', loginAnonymously);
});