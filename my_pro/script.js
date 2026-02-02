
        const translations = {
            ar: {
                site_title: "الأيدي الآمنة",
                nav_home: "الرئيسية",
                nav_services: "الخدمات",
                nav_about: "من نحن",
                nav_contact: "تواصل معنا",
                nav_find_babysitters: "ابحث عن جليسات أطفال",
                nav_book_now: "الحجز",

                nav_login_signup: "تسجيل الدخول / إنشاء حساب",
                nav_logout: "تسجيل الخروج",
                profile_title: "الملف الشخصي",
                label_email: "البريد الإلكتروني",
                label_name: "الاسم",
                label_password: "كلمة المرور",
                label_created_at: "تاريخ إنشاء الحساب",
                greeting: "مرحبًا ",
                bookings_title: "حجوزاتك",
                booking_sitter: "جليس:",
                booking_date: "تاريخ:",
                booking_duration: "مدة:",
                booking_status: "حالة:",
                status_pending: "معلقة",
                status_accepted: "مقبول",
                status_rejected: "مرفوض",
                status_canceled: "ملغى",
                action_accept: "قبول",
                action_reject: "رفض",
                action_cancel: "إلغاء",
                action_pending: "الإجراء معلق...",
                filter_all: "الكل",
                error_fetch: "خطأ في جلب الحجوزات: ",
                error_cancel: "خطأ في إلغاء الحجز: ",
                no_bookings: "لا توجد حجوزات حاليًا.",
                error_update: "خطأ في تحديث حالة الحجز: ",
                loading: "جارٍ التحميل...",
                btn_edit: "تعديل",
                btn_save: "حفظ",
                btn_cancel: "إلغاء",
                success_save: "تم حفظ التغييرات بنجاح!",
                error_save: "حدث خطأ أثناء الحفظ: ",
                error_email_invalid: "البريد الإلكتروني غير صالح",
                error_password_short: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                error_no_id: "معرف المستخدم غير موجود، يرجى تسجيل الدخول مرة أخرى",
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
                label_email: "Email",
                label_name: "Name",
                label_password: "Password",
                label_created_at: "Account Creation Date",
                greeting: "Hello ",
                bookings_title: "Your Bookings",
                booking_sitter: "Babysitter:",
                booking_date: "Date:",
                booking_duration: "Duration:",
                booking_status: "Status:",
                status_pending: "Pending",
                status_accepted: "Accepted",
                status_rejected: "Rejected",
                status_canceled: "Canceled",
                action_accept: "Accept",
                action_reject: "Reject",
                action_cancel: "Cancel",
                action_pending: "Action pending...",
                filter_all: "All",
                error_fetch: "Error fetching bookings: ",
                error_cancel: "Error canceling booking: ",
                no_bookings: "No bookings available.",
                error_update: "Error updating booking status: ",
                loading: "Loading...",
                btn_edit: "Edit",
                btn_save: "Save",
                btn_cancel: "Cancel",
                success_save: "Changes saved successfully!",
                error_save: "Error saving changes: ",
                error_email_invalid: "Invalid email address",
                error_password_short: "Password must be at least 8 characters long",
                error_no_id: "User ID not found, please log in again",
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

            syncUserData();
            filterBookings();
            updateNavbar();

            localStorage.setItem('language', lang);
        }

        function updateNavbar() {
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const loginLink = document.getElementById('login-link');
            const profileLink = document.getElementById('profile-link');
            const logoutLink = document.getElementById('logout-link');
            const userNameDisplay = document.getElementById('user-name-display');
            const userNameText = document.getElementById('user-name-text');

            if (userData.id && userData.email) {
                loginLink.style.display = 'none';
                profileLink.style.display = 'block';
                logoutLink.style.display = 'block';
                userNameDisplay.style.display = 'inline-flex';
                userNameText.textContent = userData.name || 'User';
            } else {
                loginLink.style.display = 'block';
                profileLink.style.display = 'none';
                logoutLink.style.display = 'none';
                userNameDisplay.style.display = 'none';
                setTimeout(() => window.location.href = '/log/login.html', 100);
            }
        }

        function logout() {
            localStorage.removeItem('userData');
            updateNavbar();
            window.location.href = '/log/login.html';
        }

        const supabase = window.supabase.createClient('https://ebzhfytrzcxsnepcudyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc');

        async function syncUserData(newEmail, newName, newPassword) {
            let userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const lang = document.getElementById('languageSelect').value;

            // If new data is provided (e.g., during save), update it
            if (newEmail || newName || newPassword) {
                if (!userData.id) {
                    document.getElementById('message').textContent = translations[lang].error_no_id;
                    document.getElementById('message').className = 'error-message';
                    document.getElementById('message').style.display = 'block';
                    setTimeout(() => window.location.href = '/log/login.html', 2000);
                    return;
                }

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (newEmail && !emailRegex.test(newEmail)) {
                    document.getElementById('message').textContent = translations[lang].error_email_invalid;
                    document.getElementById('message').className = 'error-message';
                    document.getElementById('message').style.display = 'block';
                    return;
                }

                if (newName && !newName.trim()) {
                    document.getElementById('message').textContent = translations[lang].error_save + translations[lang].label_name + ' مطلوب';
                    document.getElementById('message').className = 'error-message';
                    document.getElementById('message').style.display = 'block';
                    return;
                }

                if (newPassword && newPassword.length < 8) {
                    document.getElementById('message').textContent = translations[lang].error_password_short;
                    document.getElementById('message').className = 'error-message';
                    document.getElementById('message').style.display = 'block';
                    return;
                }

                try {
                    const { data: oldUserData, error: fetchOldError } = await supabase
                        .from('users')
                        .select('email')
                        .eq('id', userData.id)
                        .single();

                    if (fetchOldError) throw fetchOldError;

                    const oldEmail = oldUserData.email;

                    const { error: updateUserError } = await supabase
                        .from('users')
                        .update({
                            email: newEmail || userData.email,
                            name: newName || userData.name,
                            password: newPassword ? newPassword : undefined
                        })
                        .eq('id', userData.id);

                    if (updateUserError) throw updateUserError;

                    if (newEmail && oldEmail !== newEmail) {
                        const { error: updateBookingsError } = await supabase
                            .from('bookings')
                            .update({ user_email: newEmail })
                            .eq('user_email', oldEmail);

                        if (updateBookingsError) throw updateBookingsError;
                    }

                    const { data: updatedUser, error: fetchError } = await supabase
                        .from('users')
                        .select('id, email, name, created_at')
                        .eq('id', userData.id)
                        .single();

                    if (fetchError) throw fetchError;

                    userData = {
                        id: updatedUser.id,
                        email: updatedUser.email,
                        name: updatedUser.name
                    };
                    localStorage.setItem('userData', JSON.stringify(userData));

                    document.getElementById('message').textContent = translations[lang].success_save;
                    document.getElementById('message').className = 'success-message';
                    document.getElementById('message').style.display = 'block';
                } catch (error) {
                    document.getElementById('message').textContent = `${translations[lang].error_save}${error.message}`;
                    document.getElementById('message').className = 'error-message';
                    document.getElementById('message').style.display = 'block';
                    return;
                }
            } else {
                // Sync from Supabase if localStorage is empty or incomplete
                if (!userData.id || !userData.email) {
                    try {
                        const { data: user, error } = await supabase
                            .from('users')
                            .select('id, email, name, created_at')
                            .eq('email', userData.email || '')
                            .single();

                        if (error) throw error;

                        userData = {
                            id: user.id,
                            email: user.email,
                            name: user.name
                        };
                        localStorage.setItem('userData', JSON.stringify(userData));
                    } catch (error) {
                        console.error('Error syncing user data:', error.message);
                        window.location.href = '/log/login.html';
                        return;
                    }
                }
            }

            // Update UI with the latest data
            document.getElementById('user-email').value = userData.email || '';
            document.getElementById('user-name').value = userData.name || '';
            document.getElementById('user-password').value = '';
            document.getElementById('user-greeting').textContent = `${translations[lang].greeting}${userData.name?.split(' ')[0] || 'مستخدم'}`;
            const createdAt = new Date(userData.created_at || new Date()).toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
            document.getElementById('user-created-at').value = createdAt;

            return userData;
        }

        function toggleEditMode() {
            const editBtn = document.querySelector('button[data-i18n="btn_edit"]');
            const saveSection = document.getElementById('save-section');
            const inputs = document.querySelectorAll('#user-email, #user-name, #user-password');

            if (editBtn.textContent === translations[document.getElementById('languageSelect').value].btn_edit) {
                inputs.forEach(input => input.removeAttribute('readonly'));
                editBtn.style.display = 'none';
                saveSection.style.display = 'block';
            }
        }

        async function saveProfile() {
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const newEmail = document.getElementById('user-email').value.trim();
            const newName = document.getElementById('user-name').value.trim();
            const newPassword = document.getElementById('user-password').value.trim();

            await syncUserData(newEmail, newName, newPassword);
            toggleEditMode();
            updateNavbar();
            fetchBookings(newEmail || userData.email);
        }

        function cancelEdit() {
            syncUserData();
            document.querySelector('button[data-i18n="btn_edit"]').style.display = 'block';
            document.getElementById('save-section').style.display = 'none';
            document.getElementById('message').style.display = 'none';
        }

        async function fetchBookings(email) {
            const loading = document.getElementById('loading');
            const errorDiv = document.getElementById('booking-error');
            const bookingsList = document.getElementById('bookings-list');
            const lang = document.getElementById('languageSelect').value;

            loading.style.display = 'block';
            errorDiv.style.display = 'none';
            bookingsList.querySelector('.bookings-grid')?.remove();

            try {
                const { data: bookings, error: bookingsError } = await supabase
                    .from('bookings')
                    .select('*')
                    .eq('user_email', email);

                if (bookingsError) throw bookingsError;

                bookingsList.innerHTML = `<h3 data-i18n="bookings_title">${translations[lang].bookings_title}</h3><div class="filter-container"><select id="status-filter" onchange="filterBookings()"><option value="all" data-i18n="filter_all">${translations[lang].filter_all}</option><option value="pending" data-i18n="status_pending">${translations[lang].status_pending}</option><option value="accepted" data-i18n="status_accepted">${translations[lang].status_accepted}</option><option value="rejected" data-i18n="status_rejected">${translations[lang].status_rejected}</option><option value="canceled" data-i18n="status_canceled">${translations[lang].status_canceled}</option></select></div><div id="booking-error" class="error-message"></div><div id="loading" style="display: none; text-align: center; color: #0078D7;">${translations[lang].loading}</div>`;
                filterBookings(bookings);
            } catch (error) {
                errorDiv.textContent = `${translations[lang].error_fetch}${error.message}`;
                errorDiv.style.display = 'block';
            } finally {
                loading.style.display = 'none';
            }
        }

        function filterBookings(bookingsData) {
            const filter = document.getElementById('status-filter').value;
            const email = JSON.parse(localStorage.getItem('userData') || '{}').email;
            const bookingsList = document.getElementById('bookings-list');
            const lang = document.getElementById('languageSelect').value;

            if (!bookingsData) {
                fetchBookings(email);
                return;
            }

            const filteredBookings = filter === 'all' ? bookingsData : bookingsData.filter(b => b.status === filter);
            bookingsList.querySelector('.bookings-grid')?.remove();

            if (filteredBookings.length > 0) {
                const grid = document.createElement('div');
                grid.className = 'bookings-grid';
                const isAdmin = email === "admin@example.com";
                filteredBookings.forEach(b => {
                    const card = document.createElement('div');
                    card.className = `booking-card ${isAdmin ? 'admin' : ''}`;
                    card.setAttribute('data-id', b.id);
                    card.innerHTML = `
                        <p><strong data-i18n="booking_sitter">${translations[lang].booking_sitter}</strong> ${b.sitter_email}</p>
                        <p><strong data-i18n="booking_date">${translations[lang].booking_date}</strong> ${new Date(b.booking_date).toLocaleString()}</p>
                        <p><strong data-i18n="booking_duration">${translations[lang].booking_duration}</strong> ${b.duration_hours} ${lang === 'ar' ? 'ساعة' : 'hours'}</p>
                        <p><strong data-i18n="booking_status">${translations[lang].booking_status}</strong> ${b.status === 'pending' ? translations[lang].status_pending : b.status === 'accepted' ? translations[lang].status_accepted : b.status === 'rejected' ? translations[lang].status_rejected : translations[lang].status_canceled}</p>
                        <div class="action-buttons" style="display: ${b.status === 'pending' || b.status === 'accepted' ? 'flex' : 'none'};">
                            <button class="action-btn cancel-btn" onclick="cancelBooking('${b.id}', '${email}')">${translations[lang].action_cancel}</button>
                            ${b.status === 'pending' && isAdmin ? `
                            <button class="action-btn accept-btn" onclick="updateBookingStatus('${b.id}', 'accepted', '${email}')">${translations[lang].action_accept}</button>
                            <button class="action-btn reject-btn" onclick="updateBookingStatus('${b.id}', 'rejected', '${email}')">${translations[lang].action_reject}</button>` : ''}
                        </div>
                    `;
                    grid.appendChild(card);
                });
                bookingsList.appendChild(grid);
            } else {
                bookingsList.innerHTML += `<p>${translations[lang].no_bookings}</p>`;
            }
        }

        window.updateBookingStatus = async (bookingId, newStatus, userEmail) => {
            const errorDiv = document.getElementById('booking-error');
            try {
                const { error } = await supabase
                    .from('bookings')
                    .update({ status: newStatus })
                    .eq('id', bookingId);

                if (error) throw error;

                fetchBookings(userEmail);
            } catch (error) {
                errorDiv.textContent = `${translations[document.getElementById('languageSelect').value].error_update}${error.message}`;
                errorDiv.style.display = 'block';
            }
        };

        window.cancelBooking = async (bookingId, userEmail) => {
            const bookingCard = document.querySelector(`.booking-card[data-id="${bookingId}"]`);
            const cancelBtn = bookingCard.querySelector('.cancel-btn');
            const lang = document.getElementById('languageSelect').value;
            const errorDiv = document.getElementById('booking-error');

            // Show pending state
            cancelBtn.disabled = true;
            const overlay = document.createElement('div');
            overlay.className = 'pending-overlay';
            overlay.textContent = translations[lang].action_pending;
            bookingCard.appendChild(overlay);

            try {
                const { error } = await supabase
                    .from('bookings')
                    .update({ status: 'canceled' })
                    .eq('id', bookingId);

                if (error) throw error;

                fetchBookings(userEmail);
            } catch (error) {
                errorDiv.textContent = `${translations[lang].error_cancel}${error.message}`;
                errorDiv.style.display = 'block';
                cancelBtn.disabled = false;
                overlay.remove();
            }
        };

        document.addEventListener('DOMContentLoaded', () => {
            const savedLang = localStorage.getItem('language') || 'ar';
            document.getElementById('languageSelect').value = savedLang;
            changeLanguage();
            updateNavbar();
            const userData = syncUserData();
            if (userData && userData.email) fetchBookings(userData.email);
        });
    