// ==========================================
// 1. إعداد الاتصال بـ Supabase
// ==========================================
if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = window.supabase.createClient(
        'https://ebzhfytrzcxsnepcudyl.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc'
    );
}

// ==========================================
// 2. قاموس الترجمة الكامل (شامل كل الرسائل والخدمات)
// ==========================================
const translations = {
    ar: {
        site_title: "الأيدي الآمنة", nav_home: "الرئيسية", nav_services: "الخدمات", nav_about: "من نحن",
        nav_contact: "تواصل معنا", nav_find_babysitters: "ابحث عن جليسات أطفال", nav_book_now: "الحجز",
        nav_profile: "الملف الشخصي", nav_login_signup: "تسجيل الدخول / إنشاء حساب", nav_logout: "تسجيل الخروج",
        greeting: "مرحبًا، ", profile_title: "الملف الشخصي", label_email: "البريد الإلكتروني",
        label_name: "الاسم", label_created_at: "تاريخ الانضمام", label_password: "كلمة المرور الجديدة",
        btn_edit: "تعديل", btn_save: "حفظ", btn_cancel: "إلغاء", success_save: "تم حفظ التعديلات بنجاح!",
        bookings_title: "سجل حجوزاتك", loading: "جارٍ التحميل...", no_bookings: "لا توجد حجوزات.",
        form_title: "إنشاء حجز جديد", label_babysitter: "اختر جليسة الأطفال", label_date: "تاريخ ووقت الحجز",
        label_duration: "مدة الحجز (بالساعات)", label_service: "نوع الخدمة", label_total_price: "السعر الإجمالي",
        label_payment_method: "طريقة الدفع", select_babysitter: "اختر جليسة", select_service: "اختر الخدمة",
        select_payment: "اختر طريقة دفع", payment_credit_card: "بطاقة ائتمان", payment_wallet: "محفظة إلكترونية",
        payment_cash: "دفع عند الاستلام", service_childcare: "رعاية أطفال", service_education: "تعليم أطفال",
        service_nightcare: "رعاية ليلية", service_eldercare: "رعاية المسنين", service_special_needs: "رعاية ذوي الاحتياجات الخاصة",
        service_house_cleaning: "تنظيف المنزل", btn_book: "حجز", modal_title: "تأكيد الحجز",
        modal_confirm: "تأكيد", modal_cancel: "إلغاء", alert_login: "يرجى تسجيل الدخول أولاً",
        alert_fields: "يرجى ملء جميع الحقول", alert_fetch_error: "خطأ في جلب قائمة الجليسات",
        alert_booking_conflict: "جليسة الأطفال محجوزة في هذا الوقت، اختر وقتًا آخر",
        alert_booking_error: "حدث خطأ أثناء التحقق من الحجوزات", alert_create_error: "حدث خطأ أثناء الحجز: ",
        alert_success: "تم الحجز بنجاح! تم إشعار الجليسة ببريدك: ", alert_refund_policy: "سياسة الاسترداد: يتم خصم 20% إذا أُلغي الحجز قبل 24 ساعة",
        alert_cancel_success: "تم إلغاء الحجز بنجاح، تم استرداد ", alert_cancel_error: "خطأ أثناء إلغاء الحجز: ",
        alert_cancel_late: "لا يمكن إلغاء الحجز، أقل من 24 ساعة متبقية", filter_all: "الكل",
        status_pending: "قيد الانتظار", status_accepted: "مقبول", status_rejected: "مرفوض", status_canceled: "ملغي",
        booking_sitter: "الجليسة:", booking_date: "التاريخ:", booking_duration: "المدة:", booking_status: "الحالة:",
        action_cancel: "إلغاء الحجز", action_accept: "قبول", action_reject: "رفض", action_pending: "جاري المعالجة...",
        error_no_id: "خطأ: معرف المستخدم مفقود.", error_email_invalid: "البريد الإلكتروني غير صالح.",
        error_password_short: "كلمة المرور يجب أن تكون 8 رموز على الأقل.", error_save: "خطأ في الحفظ: ",
        footer_copyright: "© 2025 الأيدي الآمنة. جميع الحقوق محفوظة"
    },
    en: {
        site_title: "Safe Hands", nav_home: "Home", nav_services: "Services", nav_about: "About",
        nav_contact: "Contact", nav_find_babysitters: "Find Babysitters", nav_book_now: "Book Now",
        nav_profile: "My Profile", nav_login_signup: "Login/Sign Up", nav_logout: "Logout",
        greeting: "Hello, ", profile_title: "Profile", label_email: "Email", label_name: "Name",
        label_created_at: "Joined on", label_password: "New Password", btn_edit: "Edit", btn_save: "Save",
        btn_cancel: "Cancel", success_save: "Changes saved successfully!", bookings_title: "Your Bookings",
        loading: "Loading...", no_bookings: "No bookings found.", form_title: "Create New Booking",
        label_babysitter: "Select Babysitter", label_date: "Date & Time", label_duration: "Duration (hrs)",
        label_service: "Service Type", label_total_price: "Total Price", label_payment_method: "Payment Method",
        select_babysitter: "Select a Babysitter", select_service: "Select a Service", select_payment: "Select Payment",
        payment_credit_card: "Credit Card", payment_wallet: "Digital Wallet", payment_cash: "Cash on Delivery",
        service_childcare: "Childcare", service_education: "Education", service_nightcare: "Night Care",
        service_eldercare: "Elderly Care", service_special_needs: "Special Needs", service_house_cleaning: "Cleaning",
        btn_book: "Book", modal_title: "Confirm Booking", modal_confirm: "Confirm", modal_cancel: "Cancel",
        alert_login: "Please login first", alert_fields: "Please fill all fields", alert_fetch_error: "Error fetching sitters",
        alert_booking_conflict: "Sitter is busy at this time", alert_booking_error: "Error checking availability",
        alert_create_error: "Booking error: ", alert_success: "Booking successful! Notified: ",
        alert_refund_policy: "Refund Policy: 20% fee if canceled < 24h", alert_cancel_success: "Canceled! Refunded: ",
        alert_cancel_error: "Cancellation error: ", alert_cancel_late: "Cannot cancel < 24h",
        filter_all: "All", status_pending: "Pending", status_accepted: "Accepted", status_rejected: "Rejected",
        status_canceled: "Canceled", booking_sitter: "Sitter:", booking_date: "Date:",
        booking_duration: "Duration:", booking_status: "Status:", action_cancel: "Cancel",
        action_accept: "Accept", action_reject: "Reject", action_pending: "Processing...",
        error_no_id: "Error: User ID missing.", error_email_invalid: "Invalid email.",
        error_password_short: "Password must be 8+ chars.", error_save: "Save error: ",
        footer_copyright: "© 2025 SafeHands. All rights reserved"
    }
};

// ==========================================
// 3. إدارة الواجهة واللغة والناف بار
// ==========================================
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    localStorage.setItem('language', lang);
    updateNavbar();
}

function updateNavbar() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userEmail = userData.contact_info || userData.email;
    const loginLink = document.getElementById('login-signup-link') || document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const userNameText = document.getElementById('user-name-text');

    if (userEmail) {
        if (loginLink) loginLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
        if (userNameDisplay) {
            userNameDisplay.style.display = 'inline-flex';
            if (userNameText) userNameText.textContent = userData.name || "مستخدم";
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
        if (userNameDisplay) userNameDisplay.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('userData');
    window.location.href = '/log/login.html';
}

// ==========================================
// 4. إدارة بيانات الملف الشخصي (Profile & Sync)
// ==========================================
async function syncUserData(newEmail, newName, newPassword) {
    let userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const lang = document.getElementById('languageSelect').value;
    const msg = document.getElementById('message');

    if (newEmail || newName || newPassword) {
        if (!userData.id) {
            if(msg) { msg.textContent = translations[lang].error_no_id; msg.style.display = 'block'; }
            return;
        }

        try {
            const { data: oldUser } = await window.supabaseClient.from('users').select('email').eq('id', userData.id).single();
            const { error: updateErr } = await window.supabaseClient.from('users').update({
                email: newEmail || userData.email,
                name: newName || userData.name,
                password: newPassword || undefined
            }).eq('id', userData.id);

            if (updateErr) throw updateErr;

            if (newEmail && oldUser.email !== newEmail) {
                await window.supabaseClient.from('bookings').update({ user_email: newEmail }).eq('user_email', oldUser.email);
            }

            const { data: updated } = await window.supabaseClient.from('users').select('*').eq('id', userData.id).single();
            localStorage.setItem('userData', JSON.stringify(updated));
            if(msg) { msg.textContent = translations[lang].success_save; msg.className = 'success-message'; msg.style.display = 'block'; }
        } catch (e) {
            if(msg) { msg.textContent = translations[lang].error_save + e.message; msg.className = 'error-message'; msg.style.display = 'block'; }
        }
    }

    // تعبئة الحقول في الصفحة
    const emailField = document.getElementById('user-email');
    const nameField = document.getElementById('user-name');
    const greetingField = document.getElementById('user-greeting');
    const createdAtField = document.getElementById('user-created-at');

    if (emailField) emailField.value = userData.email || userData.contact_info || '';
    if (nameField) nameField.value = userData.name || '';
    if (greetingField) greetingField.textContent = translations[lang].greeting + (userData.name || 'مستخدم');
    if (createdAtField && userData.created_at) {
        createdAtField.value = new Date(userData.created_at).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US');
    }
    return userData;
}

function toggleEditMode() {
    const editBtn = document.querySelector('button[data-i18n="btn_edit"]');
    const saveSection = document.getElementById('save-section');
    const inputs = document.querySelectorAll('#user-email, #user-name, #user-password');
    inputs.forEach(input => input.readOnly = !input.readOnly);
    if(editBtn) editBtn.style.display = 'none';
    if(saveSection) saveSection.style.display = 'block';
}

async function saveProfile() {
    const newEmail = document.getElementById('user-email').value.trim();
    const newName = document.getElementById('user-name').value.trim();
    const newPassword = document.getElementById('user-password').value.trim();
    await syncUserData(newEmail, newName, newPassword);
    
    // إرجاع الوضع للقراءة فقط
    const inputs = document.querySelectorAll('#user-email, #user-name, #user-password');
    inputs.forEach(input => input.readOnly = true);
    document.querySelector('button[data-i18n="btn_edit"]').style.display = 'block';
    document.getElementById('save-section').style.display = 'none';
    updateNavbar();
}

// ==========================================
// 5. منطق الحجوزات الكامل (حساب، فحص، إنشاء، فلترة)
// ==========================================

// حساب السعر التلقائي
function calculatePrice() {
    const sitterSelect = document.getElementById('babysitter');
    const durationInput = document.getElementById('duration');
    const totalPriceInput = document.getElementById('total-price');

    if (sitterSelect && sitterSelect.value && durationInput && durationInput.value) {
        const sitter = JSON.parse(sitterSelect.value);
        const total = (sitter.rate || 0) * (parseInt(durationInput.value) || 0);
        totalPriceInput.value = `${total.toFixed(2)} جنيه`;
    }
}

// جلب الجليسات المتاحات
async function loadBabysitters() {
    try {
        const { data: sitters } = await window.supabaseClient.from('babysitters').select('*').eq('availability', true);
        const select = document.getElementById('babysitter');
        if (!select) return;
        const lang = localStorage.getItem('language') || 'ar';
        select.innerHTML = `<option value="">${translations[lang].select_babysitter}</option>`;
        sitters.forEach(s => {
            const opt = document.createElement('option');
            opt.value = JSON.stringify({ id: s.id, email: s.contact_info, rate: s.hourly_rate, name: s.name });
            opt.textContent = `${s.name} (${s.hourly_rate} جنيه/ساعة)`;
            select.appendChild(opt);
        });
    } catch (e) { console.error("Error loading sitters:", e); }
}

// إنشاء حجز جديد مع فحص التضارب
async function createBooking() {
    const lang = localStorage.getItem('language') || 'ar';
    const sitterData = document.getElementById('babysitter').value;
    const date = document.getElementById('booking-date').value;
    
    if(!sitterData || !date) return alert(translations[lang].alert_fields);
    
    const sitter = JSON.parse(sitterData);
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    const bookingPayload = {
        user_id: userData.id,
        user_email: userData.email || userData.contact_info,
        babysitter_id: sitter.id,
        sitter_email: sitter.email,
        booking_date: date,
        duration_hours: parseInt(document.getElementById('duration').value),
        service: document.getElementById('service').value,
        total_price: parseFloat(document.getElementById('total-price').value),
        payment_method: document.getElementById('payment-method').value,
        status: 'pending'
    };

    try {
        // فحص التضارب أولاً
        const { data: existing } = await window.supabaseClient
            .from('bookings')
            .select('*')
            .eq('babysitter_id', sitter.id)
            .eq('booking_date', date);

        if (existing && existing.length > 0) {
            return alert(translations[lang].alert_booking_conflict);
        }

        const { data: newBooking, error } = await window.supabaseClient.from('bookings').insert([bookingPayload]).select().single();
        if (error) throw error;

        // تسجيل الدفع
        await window.supabaseClient.from('payments').insert([{
            booking_id: newBooking.id,
            user_id: userData.id,
            amount: bookingPayload.total_price,
            payment_method: bookingPayload.payment_method,
            status: 'completed'
        }]);

        alert(translations[lang].alert_success + bookingPayload.user_email);
        window.location.href = 'profile.html';
    } catch (e) { alert(translations[lang].alert_create_error + e.message); }
}

// جلب حجوزات المستخدم لعرضها في البروفايل
async function fetchBookings(email) {
    const listContainer = document.getElementById('bookings-list');
    const lang = localStorage.getItem('language') || 'ar';
    if (!listContainer) return;

    listContainer.innerHTML = `<div id="loading">${translations[lang].loading}</div>`;
    try {
        const { data: bookings, error } = await window.supabaseClient
            .from('bookings')
            .select('*')
            .eq('user_email', email)
            .order('booking_date', { ascending: false });

        if (error) throw error;

        listContainer.innerHTML = `
            <h3 data-i18n="bookings_title">${translations[lang].bookings_title}</h3>
            <div class="filter-container">
                <select id="status-filter" onchange="filterBookings()">
                    <option value="all">${translations[lang].filter_all}</option>
                    <option value="pending">${translations[lang].status_pending}</option>
                    <option value="accepted">${translations[lang].status_accepted}</option>
                    <option value="canceled">${translations[lang].status_canceled}</option>
                </select>
            </div>
            <div id="booking-render-area"></div>`;
        
        window.allBookings = bookings; // تخزين البيانات للفلترة
        renderBookings(bookings);
    } catch (e) { listContainer.innerHTML = `<p class="error">${e.message}</p>`; }
}

function renderBookings(data) {
    const area = document.getElementById('booking-render-area');
    const lang = localStorage.getItem('language') || 'ar';
    if (!data || data.length === 0) {
        area.innerHTML = `<p>${translations[lang].no_bookings}</p>`;
        return;
    }

    let html = '<div class="bookings-grid">';
    data.forEach(b => {
        html += `
            <div class="booking-card ${b.status}" data-id="${b.id}">
                <p><strong>${translations[lang].booking_sitter}</strong> ${b.sitter_email || 'N/A'}</p>
                <p><strong>${translations[lang].booking_date}</strong> ${new Date(b.booking_date).toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}</p>
                <p><strong>${translations[lang].booking_status}</strong> <span class="badge">${translations[lang]['status_' + b.status]}</span></p>
                <div class="action-buttons">
                    ${b.status === 'pending' ? `<button class="cancel-btn" onclick="handleCancel('${b.id}', '${b.user_email}')">${translations[lang].action_cancel}</button>` : ''}
                </div>
            </div>`;
    });
    html += '</div>';
    area.innerHTML = html;
}

function filterBookings() {
    const filterValue = document.getElementById('status-filter').value;
    const filtered = filterValue === 'all' ? window.allBookings : window.allBookings.filter(b => b.status === filterValue);
    renderBookings(filtered);
}

async function handleCancel(id, email) {
    const lang = localStorage.getItem('language') || 'ar';
    if (!confirm(translations[lang].alert_refund_policy)) return;

    try {
        const { error } = await window.supabaseClient.from('bookings').update({ status: 'canceled' }).eq('id', id);
        if (error) throw error;
        fetchBookings(email);
    } catch (e) { alert(translations[lang].alert_cancel_error + e.message); }
}

// ==========================================
// 6. التشغيل النهائي والتحكم في الصفحات
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
    const savedLang = localStorage.getItem('language') || 'ar';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = savedLang;
    
    changeLanguage();
    updateNavbar();

    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const userEmail = userData.email || userData.contact_info;

    // فحص صلاحية الدخول للصفحات المحمية
    const isProfilePage = window.location.pathname.includes('profile');
    const isBookingPage = window.location.pathname.includes('book');

    if (userEmail) {
        // إعدادات صفحة البروفايل
        if (isProfilePage) {
            await syncUserData();
            await fetchBookings(userEmail);
        }
        // إعدادات صفحة الحجز
        if (isBookingPage) {
            const emailInput = document.getElementById('user-email');
            if(emailInput) emailInput.value = userEmail;
            await loadBabysitters();
            
            // إضافة مستمعي الأحداث للحساب التلقائي
            document.getElementById('babysitter')?.addEventListener('change', calculatePrice);
            document.getElementById('duration')?.addEventListener('input', calculatePrice);
        }
    } else if (isProfilePage || isBookingPage) {
        window.location.href = '/log/login.html';
    }
});