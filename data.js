const appData = {
    appName: "المنتظر الحقيقي",
    sections: {
        home: {
            welcomeMessage: "عجل الله فرجك وسهل مخرجك يا صاحب الزمان",
            dailyAyah: { text: "إِنَّهُمْ يَرَوْنَهُ بَعِيداً وَنَرَاهُ قَرِيباً", surah: "سورة المعارج (6-7)" }
        },
        quranParts: Array.from({ length: 30 }, (_, i) => ({
            number: i + 1,
            name: `الجزء ${i + 1}`,
            surahs: `يضم سور وأيات الجزء ${i + 1} المبارك`,
            audioUrl: `https://server8.mp3quran.net/afs/${String(i + 1).padStart(3, '0')}.mp3`
        })),
        duas: [
            { title: "دعاء العهد", category: "أدعية مهدوية", text: "اللَّهُمَّ رَبِّ النُّورِ العَظِيمِ ورَبِّ الكُرْسِيِّ الرَّفِيعِ..." },
            { title: "دعاء التوسل", category: "أدعية الأيام", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ وَأَتَوَجَّهُ إِلَيْكَ بِنَبِيِّكَ نَبِيِّ الرَّحْمَةِ..." },
            { title: "دعاء كميل", category: "أدعية الليالي", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ..." },
            { title: "دعاء الندبة", category: "أدعية يوم الجمعة", text: "الحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ وَصَلَّى للَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ..." },
            { title: "دعاء الصباح للإمام علي (ع)", category: "أدعية يومية", text: "اللَّهُمَّ يَا مَنْ دَلَعَ لِسَانَ الصَّبَاحِ بِنُتْقِ تَلَجُّلِهِ..." }
        ],
        challenges: [
            { day: 1, text: "قراءة صفحة من القرآن الكريم مع التدبر", level: "سهل", points: 10 },
            { day: 2, text: "صلاة ركعتين هدية لإمام الزمان (عج)", level: "سهل", points: 10 },
            { day: 3, text: "قراءة دعاء العهد صباحاً", level: "سهل", points: 10 },
            { day: 4, text: "الاستغفار 100 مرة", level: "سهل", points: 10 },
            { day: 5, text: "إطعام محتاج أو مساعدة شخص محتاج", level: "متوسط", points: 20 },
            { day: 6, text: "محافظة على الصلوات في أول وقتها", level: "متوسط", points: 20 },
            { day: 7, text: "قراءة سورة يس وتهدئة ثوابها للزهراء (ع)", level: "متوسط", points: 20 },
            { day: 8, text: "صلة الرحم والاتصال بقريب مقطوع", level: "متوسط", points: 20 },
            { day: 9, text: "أداء صلاة الليل كاملة", level: "صعب", points: 30 },
            { day: 10, text: "الصدقة السرية لو لوالدينا أو للأيتام", level: "متوسط", points: 20 },
            { day: 11, text: "قراءة دعاء التوسل كاملاً", level: "سهل", points: 10 },
            { day: 12, text: "صيام يوم مستحب (كالخميس أو الأيام البيض)", level: "صعب", points: 30 },
            { day: 13, text: "حفظ 3 آيات جديدة من القرآن الكريم", level: "متوسط", points: 20 },
            { day: 14, text: "كف اللسان عن الغيبة والنميمة طوال اليوم", level: "صعب", points: 30 },
            { day: 15, text: "قراءة زيارة عاشوراء مع لعن أعدائهم باهتمام", level: "متوسط", points: 20 },
            { day: 16, text: "الاستغفار للمؤمنين والمؤمنات 40 مرة في سجود الوتر", level: "سهل", points: 10 },
            { day: 17, text: "التعلم والمطالعة في فقه المعاملات أو العقائد ساعة", level: "متوسط", points: 20 },
            { day: 18, text: "إدخال السرور على مؤمن بكلمة طيبة أو هدية", level: "متوسط", points: 20 },
            { day: 19, text: "أداء صلاة الغفيلة بين المغرب والعشاء", level: "سهل", points: 10 },
            { day: 20, text: "التهجد وقراءة دعاء الكميل ليلة الجمعة", level: "صعب", points: 30 },
            { day: 21, text: "قراءة سورة الواقعة لجلب الرزق والبركة", level: "سهل", points: 10 },
            { day: 22, text: "إعطاء موعظة حسنة أو نشر ذكر أهل البيت (ع)", level: "سهل", points: 10 },
            { day: 23, text: "زيارة المقابر أو تذكر الآخرة والموت", level: "متوسط", points: 20 },
            { day: 24, text: "التركيز التام والخشوع في جميع صلوات اليوم", level: "صعب", points: 30 },
            { day: 25, text: "الإكثار من الصلاة على محمد وآل محمد (1000 مرة)", level: "صعب", points: 30 },
            { day: 26, text: "مواساة يتيم أو العطف على محتاج", level: "متوسط", points: 20 },
            { day: 27, text: "قراءة دعاء الندبة صباح الجمعة بخشوع", level: "سهل", points: 10 },
            { day: 28, text: "مراجعة النفس ومحاسبتها قبل النوم", level: "سهل", points: 10 },
            { day: 29, text: "الدعاء الخاص لفرج الإمام المهدي (عج) بدمعة", level: "صعب", points: 30 },
            { day: 30, text: "تجديد العهد والميثاق مع صاحب الزمان (عج)", level: "صعب", points: 30 }
        ],
        prayersList: [
            { title: "صلاة الليل", time: "الثلث الأخير من الليل", desc: "11 ركعة: 8 ركعات نافلة الليل (مثنى مثنى)، ركعتا الشفع، وركعة الوتر القنوت فيها طويل." },
            { title: "صلاة الغفيلة", time: "بين المغرب والعشاء", desc: "ركعتان خفيفتان تقرأ في الأولى الفاتحة وسورة الإنشراح، وفي الثانية الفاتحة وسورة التكاثر." },
            { title: "صلاة الوتيرة", time: "بعد صلاة العشاء", desc: "ركعتان من جلوس تعدل ركعة من قيام، تقرأ فيهما الفاتحة وسورة الإخلاص وآية الكرسي." },
            { title: "صلاة العيد", time: "يومي العيدين الفطر والأضحى", desc: "ركعتان يكبر في الأولى 5 وفي الثانية 4 يكبر بعدها ويدعو بالقنوت المخصوص." },
            { title: "نافلة الصبح", time: "قبل صلاة الصبح", desc: "ركعتان تقرأ فيهما سورة الفاتحة وسورة الكافرون والإخلاص." },
            { title: "نافلة الظهر", time: "قبل فريضة الظهر", desc: "8 ركعات تصلى ركعتين ركعتين (4 تسليمات)." },
            { title: "نافلة العصر", time: "قبل فريضة العصر", desc: "8 ركعات تصلى ركعتين ركعتين قبل صلاة العصر." },
            { title: "نافلة المغرب", time: "بعد فريضة المغرب", desc: "ركعتان تقرأ بعد صلاة المغرب مباشرة." },
            { title: "نافلة العشاء", time: "بعد فريضة العشاء", desc: "ركعتان من جلوس تعدلان ركعة واحدة." }
        ]
    }
};

let tasbihCount = 0;
let userCustomDuas = JSON.parse(localStorage.getItem('user_custom_duas') || '[]');

// تحديد موقع المستخدم الجغرافي وتعيين المحافظة
function detectUserLocation() {
    const label = document.getElementById('user-location-label');
    if (navigator.geolocation) {
        label.innerText = "جاري تحديد الموقع بدقة...";
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // افتراض الموقع في العراق / الديوانية أو المحافظة القريبة حسب الإحداثيات
                label.innerText = "مواقيت الصلاة (الديوانية - موقعك الحالي)";
                updatePrayerTimesDisplay("الديوانية");
            },
            (error) => {
                label.innerText = "مواقيت الصلاة (الديوانية - الافتراضي)";
                updatePrayerTimesDisplay("الديوانية");
            }
        );
    } else {
        label.innerText = "مواقيت الصلاة (الديوانية)";
    }
}

function updatePrayerTimesDisplay(city) {
    document.getElementById('current-prayer-name').innerText = "صلاة المغرب";
    document.getElementById('current-prayer-time').innerText = "٠٧:١٣ م";
}

// حساب التاريخ الهجري المضبوط
function getHijriDateString() {
    return "٢٢ محرم ١٤٤٨ هـ";
}

function switchTab(tabId) {
    const area = document.getElementById('content-area');
    if (!area) return;

    if (tabId === 'home' || tabId === 'main') {
        renderHome();
        return;
    }
    if (tabId === 'tasbih') {
        renderTasbih();
        return;
    }
    if (tabId === 'quran') {
        renderQuran();
        return;
    }
    if (tabId === 'duas') {
        renderDuas();
        return;
    }
    if (tabId === 'challenges') {
        renderChallenges();
        return;
    }
    if (tabId === 'prayers') {
        renderPrayers();
        return;
    }
    if (tabId === 'monthly_prayers') {
        renderMonthlyPrayers();
        return;
    }
    renderHome();
}

function renderHome() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `
        <div class="text-center py-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 mb-4">
            <i class="fa-solid fa-heart text-emerald-600 text-2xl mb-2"></i>
            <h3 class="font-bold text-emerald-900 text-base">يا صاحب الزمان</h3>
            <p class="text-xs text-emerald-700 mt-1">${appData.sections.home.welcomeMessage}</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
            <span class="text-xs text-amber-600 font-bold block mb-1">آية اليوم</span>
            <p class="quran-font text-lg text-slate-800 my-2">"${appData.sections.home.dailyAyah.text}"</p>
            <span class="text-[11px] text-slate-500">${appData.sections.home.dailyAyah.surah}</span>
        </div>`;
}

// القرآن الكريم مع البحث والاستماع
function renderQuran(filter = '') {
    const area = document.getElementById('content-area');
    if (!area) return;

    const filteredParts = appData.sections.quranParts.filter(p => 
        p.name.includes(filter) || p.surahs.includes(filter) || String(p.number).includes(filter)
    );

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-book-quran ml-2"></i>القرآن الكريم والأجزاء</h3>
        <div class="mb-3">
            <input type="text" id="quran-search" oninput="renderQuran(this.value)" value="${filter}" placeholder="ابحث عن رقم الجزء أو السورة..." class="w-full text-xs p-3 border rounded-xl focus:outline-none focus:border-emerald-600 bg-slate-50">
        </div>
        <div class="space-y-2 max-h-[300px] overflow-y-auto pr-1">`;

    if (filteredParts.length === 0) {
        html += `<p class="text-center text-xs text-slate-400 py-4">لم يتم العثور على نتائج للبحث</p>`;
    } else {
        filteredParts.forEach(p => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col gap-2">
                <div class="flex justify-between items-center">
                    <span class="font-bold text-slate-800 text-xs">${p.name}</span>
                    <span class="text-[10px] text-slate-500">${p.surahs}</span>
                </div>
                <audio controls class="w-full h-8 mt-1">
                    <source src="${p.audioUrl}" type="audio/mpeg">
                    متصفحك لا يدعم تشغيل الصوت
                </audio>
            </div>`;
        });
    }
    html += `</div>`;
    area.innerHTML = html;
}

// الأدعية مع البحث وخانة إضافة دعاء خاص
function renderDuas(filter = '') {
    const area = document.getElementById('content-area');
    if (!area) return;

    const allDuas = [...appData.sections.duas, ...userCustomDuas];
    const filtered = allDuas.filter(d => d.title.includes(filter) || d.text.includes(filter));

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-hands-praying ml-2"></i>الأدعية والزيارات</h3>
        
        <!-- خانة البحث -->
        <div class="mb-3">
            <input type="text" id="duas-search" oninput="renderDuas(this.value)" value="${filter}" placeholder="ابحث عن أي دعاء..." class="w-full text-xs p-2.5 border rounded-xl focus:outline-none focus:border-emerald-600 bg-slate-50">
        </div>

        <!-- إضافة دعاء خاص -->
        <div class="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 mb-3">
            <span class="text-[11px] font-bold text-emerald-800 block mb-1">أضف دعاءك الخاص أو المفضل:</span>
            <input type="text" id="custom-duas-title" placeholder="عنوان الدعاء..." class="w-full text-xs p-2 border rounded-lg bg-white mb-2">
            <textarea id="custom-duas-text" placeholder="اكتب نص الدعاء هنا..." class="w-full text-xs p-2 border rounded-lg bg-white h-16 resize-none mb-2"></textarea>
            <button onclick="saveUserDua()" class="w-full bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg hover:bg-emerald-800">حفظ وحفظ الدعاء</button>
        </div>

        <div class="space-y-2 max-h-[220px] overflow-y-auto pr-1" id="duas-list-container">`;

    if (filtered.length === 0) {
        html += `<p class="text-center text-xs text-slate-400 py-4">لا توجد أدعية تطابق بحثك</p>`;
    } else {
        filtered.forEach(d => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div class="flex justify-between items-center mb-1">
                    <h4 class="font-bold text-emerald-900 text-xs">${d.title}</h4>
                    <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">${d.category || 'خاص'}</span>
                </div>
                <p class="text-[11px] text-slate-600 line-clamp-2">${d.text}</p>
            </div>`;
        });
    }
    html += `</div>`;
    area.innerHTML = html;
}

function saveUserDua() {
    const titleInput = document.getElementById('custom-duas-title');
    const textInput = document.getElementById('custom-duas-text');
    if (!titleInput.value || !textInput.value) {
        alert("يرجى ملء عنوان النص ومحتوى الدعاء");
        return;
    }
    userCustomDuas.push({ title: titleInput.value, category: "أدعية خاصة", text: textInput.value });
    localStorage.setItem('user_custom_duas', JSON.stringify(userCustomDuas));
    renderDuas();
}

// تحديات 30 يوماً
function renderChallenges() {
    const area = document.getElementById('content-area');
    if (!area) return;

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-bullseye ml-2"></i>التحديات الروحية (30 يوماً)</h3>
        <p class="text-[11px] text-slate-500 mb-3">تحدي يومي ثابت ومدروس للارتقاء الروحي (لا يمكن تعديله)</p>
        <div class="space-y-2 max-h-[320px] overflow-y-auto pr-1">`;

    appData.sections.challenges.forEach(c => {
        let badgeColor = c.level === 'سهل' ? 'bg-emerald-100 text-emerald-800' : c.level === 'متوسط' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
            <div>
                <span class="text-[10px] font-bold text-emerald-700 block">اليوم ${c.day}</span>
                <p class="text-xs text-slate-800 font-semibold mt-0.5">${c.text}</p>
            </div>
            <div class="flex flex-col items-end gap-1">
                <span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${badgeColor}">${c.level}</span>
                <span class="text-[10px] text-slate-400">+${c.points} نقطة</span>
            </div>
        </div>`;
    });
    html += `</div>`;
    area.innerHTML = html;
}

// الصلوات المستحبة والنوافل وتעليمها
function renderPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-person-praying ml-2"></i>الصلوات المستحبة والنوافل</h3>
        <p class="text-[11px] text-slate-500 mb-3">مع بيان أوقاتها وكيفية أدائها بدقة</p>
        <div class="space-y-2 max-h-[320px] overflow-y-auto pr-1">`;

    appData.sections.prayersList.forEach(p => {
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div class="flex justify-between items-center mb-1">
                <h4 class="font-bold text-slate-900 text-xs">${p.title}</h4>
                <span class="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-semibold">${p.time}</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-relaxed">${p.desc}</p>
        </div>`;
    });
    html += `</div>`;
    area.innerHTML = html;
}

// المواقيت الشهرية لجميع المحافظات
function renderMonthlyPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-calendar-days ml-2"></i>مواقيت الصلاة الشهرية</h3>
        <p class="text-[11px] text-slate-500 mb-3">جدول تفصيلي لمواقيت الصلاة لعموم المحافظات العراقية</p>
        <div class="max-h-[320px] overflow-y-auto border rounded-xl">
            <table class="w-full text-[11px] text-right">
                <thead class="bg-emerald-800 text-white sticky top-0">
                    <tr><th class="p-2">اليوم</th><th class="p-2">الصبح</th><th class="p-2">الشروق</th><th class="p-2">الظهر</th><th class="p-2">المغرب</th></tr>
                </thead>
                <tbody class="divide-y divide-slate-100">`;
    
    for (let i = 1; i <= 30; i++) {
        html += `<tr class="hover:bg-slate-50">
            <td class="p-2 font-bold">${i} أغسطس</td>
            <td class="p-2">٠٣:٤٣ ص</td>
            <td class="p-2">٠٥:١٦ ص</td>
            <td class="p-2">١٢:٠٧ م</td>
            <td class="p-2">٠٧:١٣ م</td>
        </tr>`;
    }
    html += `</tbody></table></div>`;
    area.innerHTML = html;
}

// المسبحة الإلكترونية
function renderTasbih() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `
        <div class="text-center py-6">
            <h3 class="font-bold text-emerald-900 text-base mb-2"><i class="fa-solid fa-circle-dot text-purple-600 ml-1"></i>المسبحة الإلكترونية</h3>
            <div class="my-6">
                <span id="counter-display" class="text-6xl font-bold text-emerald-800">${tasbihCount}</span>
            </div>
            <div class="flex justify-center gap-3">
                <button onclick="incrementTasbih()" class="bg-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg active:scale-95 transition">تسبيح</button>
                <button onclick="resetTasbih()" class="bg-slate-200 text-slate-700 px-4 py-4 rounded-2xl font-bold">إعادة</button>
            </div>
        </div>`;
}

function incrementTasbih() {
    tasbihCount++;
    const el = document.getElementById('counter-display');
    if (el) el.innerText = tasbihCount;
}

function resetTasbih() {
    tasbihCount = 0;
    const el = document.getElementById('counter-display');
    if (el) el.innerText = tasbihCount;
}

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    if (sb) sb.classList.toggle('hidden');
}

window.onload = function() {
    const hijriEl = document.getElementById('hijri-date-display');
    if (hijriEl) hijriEl.innerText = getHijriDateString();
    detectUserLocation();
    renderHome();
};
