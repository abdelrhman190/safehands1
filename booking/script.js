
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
                form_title: "إنشاء حجز جديد",
                label_email: "بريدك الإلكتروني",
                label_babysitter: "اختر جليسة الأطفال",
                label_date: "تاريخ ووقت الحجز",
                label_duration: "مدة الحجز (بالساعات)",
                label_service: "نوع الخدمة",
                label_total_price: "السعر الإجمالي",
                label_payment_method: "طريقة الدفع",
                select_babysitter: "اختر جليسة",
                select_service: "اختر الخدمة",
                select_payment: "اختر طريقة دفع",
                payment_credit_card: "بطاقة ائتمان",
                payment_wallet: "محفظة إلكترونية",
                payment_cash: "دفع عند الاستلام",
                select_service: "اختر الخدمة",
                service_childcare: "رعاية أطفال",
                service_education: "تعليم أطفال",
                service_nightcare: "رعاية ليلية",
                service_eldercare: "رعاية المسنين",
                service_special_needs: "رعاية ذوي الاحتياجات الخاصة",
                service_house_cleaning: "تنظيف المنزل",
                btn_book: "حجز",
                modal_title: "تأكيد الحجز",
                modal_confirm: "تأكيد",
                modal_cancel: "إلغاء",
                alert_login: "يرجى تسجيل الدخول أولاً",
                alert_fields: "يرجى ملء جميع الحقول",
                alert_fetch_error: "خطأ في جلب قائمة الجليسات",
                alert_booking_conflict: "جليسة الأطفال محجوزة في هذا الوقت، اختر وقتًا آخر",
                alert_booking_error: "حدث خطأ أثناء التحقق من الحجوزات",
                alert_create_error: "حدث خطأ أثناء الحجز: ",
                alert_success: "تم الحجز بنجاح! تم إشعار الجليسة ببريدك: ",
                alert_refund_policy: "سياسة الاسترداد: يتم خصم 20% إذا أُلغي الحجز قبل 24 ساعة",
                alert_cancel_success: "تم إلغاء الحجز بنجاح، تم استرداد ",
                alert_cancel_error: "خطأ أثناء إلغاء الحجز: ",
                alert_cancel_late: "لا يمكن إلغاء الحجز، أقل من 24 ساعة متبقية",
                footer_copyright: "© 2025 الأيدي الآمنة. جميع الحقوق محفوظة"
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
                form_title: "Create a New Booking",
                label_email: "Your Email",
                label_babysitter: "Select Babysitter",
                label_date: "Booking Date and Time",
                label_duration: "Duration (in hours)",
                label_service: "Service Type",
                label_total_price: "Total Price",
                label_payment_method: "Payment Method",
                select_babysitter: "Select a Babysitter",
                select_service: "Select a Service",
                select_payment: "Select Payment Method",
                payment_credit_card: "Credit Card",
                payment_wallet: "Digital Wallet",
                payment_cash: "Cash on Delivery",
                select_service: "Select a Service",
                service_childcare: "Childcare",
                service_education: "Child Education",
                service_nightcare: "Night Care",
                service_eldercare: "Elderly Care",
                service_special_needs: "Special Needs Care",
                service_house_cleaning: "House Cleaning",
                btn_book: "Book",
                modal_title: "Confirm Booking",
                modal_confirm: "Confirm",
                modal_cancel: "Cancel",
                alert_login: "Please login first",
                alert_fields: "Please fill in all fields",
                alert_fetch_error: "Error fetching babysitters list",
                alert_booking_conflict: "The babysitter is booked at this time, choose another time",
                alert_booking_error: "An error occurred while checking bookings",
                alert_create_error: "An error occurred during booking: ",
                alert_success: "Booking successful! The babysitter has been notified with your email: ",
                alert_refund_policy: "Refund Policy: 20% deduction if canceled within 24 hours",
                alert_cancel_success: "Booking canceled successfully, refunded amount: ",
                alert_cancel_error: "Error canceling booking: ",
                alert_cancel_late: "Cannot cancel booking, less than 24 hours remaining",
                footer_copyright: "© 2025 SafeHands. All rights reserved"
            }
        };

        function changeLanguage() {
            const lang = document.getElementById('languageSelect').value;
            document.getElementById('htmlLang').setAttribute('lang', lang);
            document.getElementById('htmlLang').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (key !== 'alert_message') {
                    element.textContent = translations[lang][key];
                }
            });

            localStorage.setItem('language', lang);
            updateNavbar();
        }

        function updateNavbar() {
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const loginSignupLink = document.getElementById('login-signup-link');
            const dashboardLink = document.getElementById('dashboard-link');
            const logoutLink = document.getElementById('logout-link');
            const userNameDisplay = document.getElementById('user-name-display');
            const userNameText = document.getElementById('user-name-text');

            console.log('userData from localStorage:', userData);

            if (userData.email && userData.id) {
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

        function setUserEmail() {
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const userEmailInput = document.getElementById('user-email');
            const alertMessage = document.getElementById('alertMessage');
            const lang = document.getElementById('languageSelect').value;

            if (userData.email) {
                userEmailInput.value = userData.email;
            } else {
                alertMessage.textContent = translations[lang].alert_login;
                alertMessage.style.display = 'block';
                setTimeout(() => window.location.href = '/log/login.html', 2000);
            }
        }

        const supabase = window.supabase.createClient('https://ebzhfytrzcxsnepcudyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViemhmeXRyemN4c25lcGN1ZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDMyNjcsImV4cCI6MjA2MTc3OTI2N30.8sJgkbHRYMddNadF9aPgeLmNRuo7XOa3iyrXjHkumTc');

        document.addEventListener('DOMContentLoaded', async () => {
            const savedLang = localStorage.getItem('language') || 'ar';
            document.getElementById('languageSelect').value = savedLang;
            changeLanguage();
            updateNavbar();
            setUserEmail();
            await loadBabysitters();
        });

        async function loadBabysitters() {
            try {
                const { data: sitterData, error: sitterError } = await supabase.from('babysitters').select('id, name, contact_info, hourly_rate, experience, availability');
                const { data: bookingData, error: bookingError } = await supabase.from('bookings').select('babysitter_id, booking_date, duration_hours');
                const alertMessage = document.getElementById('alertMessage');
                const lang = document.getElementById('languageSelect').value;

                console.log('Loaded Babysitters Data:', sitterData);

                if (sitterError || !sitterData) {
                    console.error('Error fetching babysitters:', sitterError);
                    alertMessage.textContent = translations[lang].alert_fetch_error + ': ' + (sitterError ? sitterError.message : 'بيانات غير متوفرة');
                    alertMessage.style.display = 'block';
                    return;
                }

                const today = new Date().toISOString().split('T')[0];
                const bookedToday = bookingData ? bookingData.filter(b => b.booking_date.startsWith(today)).map(b => b.babysitter_id) : [];
                const select = document.getElementById('babysitter');

                sitterData.forEach(sitter => {
                    if (sitter.availability && !bookedToday.includes(sitter.id)) {
                        const option = document.createElement('option');
                        option.value = JSON.stringify({ id: sitter.id, email: sitter.contact_info, rate: sitter.hourly_rate, name: sitter.name });
                        option.textContent = `${sitter.name} (${sitter.hourly_rate} جنيه/ساعة)`;
                        select.appendChild(option);
                    }
                });
            } catch (err) {
                console.error('Network Error:', err);
                const alertMessage = document.getElementById('alertMessage');
                const lang = document.getElementById('languageSelect').value;
                alertMessage.textContent = 'خطأ في الشبكة: ' + err.message;
                alertMessage.style.display = 'block';
            }
        }

        function calculatePrice() {
            const babysitterSelect = document.getElementById('babysitter');
            const durationInput = document.getElementById('duration');
            const totalPriceInput = document.getElementById('total-price');

            if (babysitterSelect.value && durationInput.value) {
                const babysitterData = JSON.parse(babysitterSelect.value);
                const rate = babysitterData.rate || 0;
                const duration = parseInt(durationInput.value) || 0;
                const total = rate * duration;
                totalPriceInput.value = `${total.toFixed(2)} جنيه`;
            } else {
                totalPriceInput.value = '0.00 جنيه';
            }
        }

        function showConfirmation(event) {
            event.preventDefault();
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const userId = userData.id;
            const babysitterSelect = document.getElementById('babysitter');
            const babysitterData = babysitterSelect.value ? JSON.parse(babysitterSelect.value) : {};
            const babysitterId = babysitterData.id;
            const sitterEmail = babysitterData.email;
            const bookingDate = document.getElementById('booking-date').value;
            const duration = parseInt(document.getElementById('duration').value) || 0;
            const service = document.getElementById('service').value;
            const paymentMethod = document.getElementById('payment-method').value;
            const totalPriceText = document.getElementById('total-price').value;
            const totalPrice = parseFloat(totalPriceText.replace(' جنيه', '')) || 0;
            const alertMessage = document.getElementById('alertMessage');
            const lang = document.getElementById('languageSelect').value || 'ar';

            console.log('Debug - Show Confirmation:', {
                userData,
                userId,
                babysitterId,
                babysitterData,
                bookingDate,
                duration,
                service,
                paymentMethod,
                totalPriceText,
                totalPrice
            });

            alertMessage.style.display = 'none';

            if (!userData.id || !userData.id.trim()) {
                alertMessage.textContent = `خطأ: userId غير موجود، يرجى تسجيل الدخول مرة أخرى.`;
                alertMessage.style.display = 'block';
                setTimeout(() => window.location.href = '/log/login.html', 2000);
                return;
            }
            if (!babysitterId) {
                alertMessage.textContent = `خطأ: اختر جليسة أطفال صالحة.`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }
            if (!bookingDate || !bookingDate.trim()) {
                alertMessage.textContent = `خطأ: اختر تاريخ ووقت الحجز.`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }
            if (duration <= 0) {
                alertMessage.textContent = `خطأ: مدة الحجز يجب أن تكون أكبر من 0.`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }
            if (!service || !service.trim()) {
                alertMessage.textContent = `خطأ: اختر نوع الخدمة.`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }
            if (!paymentMethod || !paymentMethod.trim()) {
                alertMessage.textContent = `خطأ: اختر طريقة الدفع.`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }
            if (totalPrice <= 0) {
                alertMessage.textContent = `خطأ: السعر الإجمالي يجب أن يكون أكبر من 0.`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }

            const confirmationDetails = document.getElementById('confirmationDetails');
            confirmationDetails.innerHTML = `
                ${translations[lang].label_babysitter || 'اختر جليسة الأطفال'}: ${babysitterData.name}<br>
                ${translations[lang].label_date || 'تاريخ ووقت الحجز'}: ${new Date(bookingDate).toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}<br>
                ${translations[lang].label_duration || 'مدة الحجز (بالساعات)'}: ${duration} ساعات<br>
                ${translations[lang].label_service || 'نوع الخدمة'}: ${translations[lang][`service_${service}`] || service}<br>
                ${translations[lang].label_total_price || 'السعر الإجمالي'}: ${totalPrice.toFixed(2)} جنيه<br>
                ${translations[lang].label_payment_method || 'طريقة الدفع'}: ${translations[lang][`payment_${paymentMethod}`] || paymentMethod}<br>
                ${translations[lang].alert_refund_policy || 'سياسة الاسترداد: يتم خصم 20% إذا أُلغي الحجز قبل 24 ساعة'}
            `;
            document.getElementById('confirmationModal').style.display = 'flex';
        }

        function hideConfirmation() {
            document.getElementById('confirmationModal').style.display = 'none';
        }

        async function createBooking(event) {
            event.preventDefault();
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            const userId = userData.id;
            const userEmail = userData.email;
            const babysitterData = JSON.parse(document.getElementById('babysitter').value || '{}');
            const babysitterId = babysitterData.id;
            const sitterEmail = babysitterData.email;
            const bookingDate = document.getElementById('booking-date').value;
            const duration = parseInt(document.getElementById('duration').value);
            const service = document.getElementById('service').value;
            const paymentMethod = document.getElementById('payment-method').value;
            const totalPrice = parseFloat(document.getElementById('total-price').value.replace(' جنيه', ''));
            const alertMessage = document.getElementById('alertMessage');
            const lang = document.getElementById('languageSelect').value || 'ar';

            console.log('Booking Data:', {
                user_id: userId,
                user_email: userEmail,
                babysitter_id: babysitterId,
                sitter_email: sitterEmail,
                booking_date: bookingDate,
                duration_hours: duration,
                status: 'pending',
                service: service,
                total_price: totalPrice,
                payment_method: paymentMethod
            });

            hideConfirmation();

            if (!userId || !userEmail || !babysitterId || !sitterEmail || !bookingDate || !duration || !service || !paymentMethod || !totalPrice) {
                alertMessage.textContent = translations[lang].alert_fields;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
                return;
            }

            try {
                const bookingStart = new Date(bookingDate);
                const bookingEnd = new Date(bookingStart.getTime() + duration * 60 * 60 * 1000);

                const { data: existingBookings, error: bookingError } = await supabase
                    .from('bookings')
                    .select('babysitter_id, booking_date, duration_hours')
                    .eq('babysitter_id', babysitterId);

                if (bookingError) {
                    console.error('Error checking bookings:', bookingError);
                    alertMessage.textContent = translations[lang].alert_booking_error + ': ' + JSON.stringify(bookingError);
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                const hasConflict = existingBookings.some(booking => {
                    const existingStart = new Date(booking.booking_date);
                    const existingEnd = new Date(existingStart.getTime() + booking.duration_hours * 60 * 60 * 1000);
                    return (
                        (bookingStart >= existingStart && bookingStart < existingEnd) ||
                        (bookingEnd > existingStart && bookingEnd <= existingEnd) ||
                        (bookingStart <= existingStart && bookingEnd >= existingEnd)
                    );
                });

                if (hasConflict) {
                    alertMessage.textContent = translations[lang].alert_booking_conflict;
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                const { data: bookingData, error: bookingInsertError } = await supabase.from('bookings').insert({
                    user_id: userId,
                    user_email: userEmail,
                    babysitter_id: babysitterId,
                    sitter_email: sitterEmail,
                    booking_date: bookingDate,
                    duration_hours: duration,
                    status: 'pending',
                    service: service,
                    total_price: totalPrice,
                    payment_method: paymentMethod
                }).select('id').single();

                if (bookingInsertError) {
                    console.error('Error creating booking:', bookingInsertError);
                    alertMessage.textContent = translations[lang].alert_create_error + ': ' + JSON.stringify(bookingInsertError);
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                const bookingId = bookingData.id;
                const { error: paymentError } = await supabase.from('payments').insert({
                    booking_id: bookingId,
                    user_email: userEmail,
                    amount: totalPrice,
                    payment_method: paymentMethod,
                    status: 'completed',
                    transaction_date: new Date().toISOString(),
                    user_id: userId,
                    amount_refunded: 0.00
                });

                if (paymentError) {
                    console.error('Error recording payment:', paymentError);
                    alertMessage.textContent = translations[lang].alert_create_error + ': ' + JSON.stringify(paymentError);
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    await supabase.from('bookings').delete().eq('id', bookingId); // Rollback booking if payment fails
                    return;
                }

                alertMessage.className = 'alert success';
                alertMessage.textContent = translations[lang].alert_success + userEmail;
                alertMessage.style.display = 'block';

                // احتفظ باللغة المختارة قبل إعادة التعيين
                const currentLang = document.getElementById('languageSelect').value;

                // إعادة تعيين الحقول باستثناء user-email و languageSelect
                document.querySelectorAll('input, select').forEach(input => {
                    if (input.id !== 'user-email' && input.id !== 'languageSelect') {
                        input.value = '';
                    }
                });

                // استعادة اللغة وتحديث النصوص
                document.getElementById('languageSelect').value = currentLang;
                changeLanguage();

                setTimeout(() => alertMessage.style.display = 'none', 5000);
            } catch (err) {
                console.error('Network or Unexpected Error:', err);
                alertMessage.textContent = 'خطأ في الشبكة أو غير متوقع: ' + err.message;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
            }
        }

        async function cancelBooking(bookingId) {
            try {
                const lang = document.getElementById('languageSelect').value || 'ar';
                const alertMessage = document.getElementById('alertMessage');

                const { data: booking, error: fetchError } = await supabase
                    .from('bookings')
                    .select('booking_date, total_price')
                    .eq('id', bookingId)
                    .single();

                if (fetchError) {
                    console.error('Error fetching booking:', fetchError);
                    alertMessage.textContent = translations[lang].alert_cancel_error + ': ' + JSON.stringify(fetchError);
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                const currentTime = new Date();
                const bookingTime = new Date(booking.booking_date);
                const timeDiff = (bookingTime - currentTime) / (1000 * 60 * 60);

                if (timeDiff <= 24) {
                    alertMessage.textContent = translations[lang].alert_cancel_late;
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                const refundAmount = booking.total_price * 0.8;

                const { error: paymentError } = await supabase
                    .from('payments')
                    .update({
                        status: 'refunded',
                        amount_refunded: refundAmount
                    })
                    .eq('booking_id', bookingId);

                if (paymentError) {
                    console.error('Error updating payment:', paymentError);
                    alertMessage.textContent = translations[lang].alert_cancel_error + ': ' + JSON.stringify(paymentError);
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                const { error: bookingError } = await supabase
                    .from('bookings')
                    .update({ status: 'canceled' })
                    .eq('id', bookingId);

                if (bookingError) {
                    console.error('Error canceling booking:', bookingError);
                    alertMessage.textContent = translations[lang].alert_cancel_error + ': ' + JSON.stringify(bookingError);
                    alertMessage.style.display = 'block';
                    setTimeout(() => alertMessage.style.display = 'none', 5000);
                    return;
                }

                alertMessage.className = 'alert success';
                alertMessage.textContent = translations[lang].alert_cancel_success + `${refundAmount.toFixed(2)} جنيه`;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
            } catch (err) {
                console.error('Error during cancellation:', err);
                const lang = document.getElementById('languageSelect').value || 'ar';
                alertMessage.textContent = 'خطأ في الشبكة أو غير متوقع: ' + err.message;
                alertMessage.style.display = 'block';
                setTimeout(() => alertMessage.style.display = 'none', 5000);
            }
        }
    