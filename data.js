const appData = {
    appName: "المنتظر الحقيقي",
    city: "الديوانية",
    sections: {
        home: {
            title: "الرئيسية",
            welcomeMessage: "عجل الله فرجك وسهل مخرجك يا صاحب الزمان",
            dailyAyah: {
                text: "إِنَّهُمْ يَرَوْنَهُ بَعِيداً وَنَرَاهُ قَرِيباً",
                surah: "سورة المعارج (6-7)"
            }
        },
        quran: {
            title: "القرآن الكريم (الأجزاء الثلاثون)",
            parts: Array.from({ length: 30 }, (_, i) => ({
                partNumber: i + 1,
                name: `الجزء ${i + 1}`,
                desc: `الجزء ${i + 1} يحتوي على الآيات والسور المباركة للجزء.`
            }))
        },
        duasCategories: [
            {
                id: 'days',
                name: "أدعية الأيام",
                items: [
                    { title: "دعاء يوم السبت", desc: "دعاء يوم السبت المبارك" },
                    { title: "دعاء يوم الأحد", desc: "دعاء يوم الأحد المبارك" },
                    { title: "دعاء يوم الاثنين", desc: "دعاء يوم الاثنين المبارك" },
                    { title: "دعاء يوم الثلاثاء", desc: "دعاء يوم الثلاثاء المبارك" },
                    { title: "دعاء يوم الأربعاء", desc: "دعاء يوم الأربعاء المبارك" },
                    { title: "دعاء يوم الخميس", desc: "دعاء يوم الخميس المبارك" },
                    { title: "دعاء يوم الجمعة", desc: "دعاء يوم الجمعة المبارك" }
                ]
            },
            {
                id: 'prayers_after',
                name: "تعقيبات الصلاة",
                items: [
                    { title: "تعقيب صلاة الصبح", desc: "ما يقال بعد الفريضة المباركة" },
                    { title: "تعقيب صلاة الظهر", desc: "ما يقال بعد الفريضة المباركة" },
                    { title: "تعقيب صلاة العصر", desc: "ما يقال بعد الفريضة المباركة" },
                    { title: "تعقيب صلاة المغرب", desc: "ما يقال بعد الفريضة المباركة" },
                    { title: "تعقيب صلاة العشاء", desc: "ما يقال بعد الفريضة المباركة" }
                ]
            }
        ],
        prayers: {
            title: "الصلوات المستحبة",
            items: [
                { title: "صلاة الليل", time: "الثلث الأخير من الليل", desc: "إحدى عشرة ركعة تفتح أبواب الرحمة" },
                { title: "صلاة الغفيلة", time: "بين المغرب والعشاء", desc: "ركعتان خفيفتان لقضيان الحوائج" },
                { title: "صلاة الوليدة", time: "بعد العشاء", desc: "ركعتان من جلوس" },
                { title: "صلاة الإمام الحجة", time: "في أي وقت", desc: "ركعتان توسلاً للإمام الزمان عج" }
            ]
        }
    }
};

let tasbihCount = 0;

const monthlyPrayersData = Array.from({ length: 30 }, (_, i) => ({
    day: `${i + 1} أغسطس`,
    fajr: "٠٣:٤٣ ص",
    sunrise: "٠٥:١٦ ص",
    dhuhr: "١٢:٠٧ م",
    asr: "٠٣:٤٧ م",
    maghrib: "٠٧:١٣ م"
}));

// نظام تبديل الأقسام الرئيسي
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
    if (tabId === 'monthly_prayers') {
        renderMonthlyPrayers();
        return;
    }
    if (tabId === 'quran') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-book-quran ml-2"></i>القرآن الكريم</h3><div class="space-y-2 max-h-[380px] overflow-y-auto">`;
        appData.sections.quran.parts.forEach(p => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                <span class="font-bold text-slate-800 text-sm">${p.name}</span>
                <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-lg font-semibold">تصفح</span>
            </div>`;
        });
        html += `</div>`;
        area.innerHTML = html;
        return;
    }
    if (tabId === 'duas') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-hands-praying ml-2"></i>الأدعية والزيارات</h3>
        <div class="flex gap-2 overflow-x-auto pb-2 mb-3 text-xs">
            <button onclick="renderDuasCategory('days')" class="px-3 py-1.5 rounded-lg bg-emerald-700 text-white font-semibold whitespace-nowrap">أدعية الأيام</button>
            <button onclick="renderDuasCategory('prayers_after')" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold whitespace-nowrap">تعقيبات الصلاة</button>
        </div>
        <div id="duas-list-container" class="space-y-2 max-h-[330px] overflow-y-auto">`;
        
        appData.sections.duasCategories[0].items.forEach(item => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <h4 class="font-bold text-slate-800 text-xs">${item.title}</h4>
                <p class="text-[11px] text-slate-500 mt-0.5">${item.desc}</p>
            </div>`;
        });
        html += `</div>`;
        area.innerHTML = html;
        return;
    }
    if (tabId === 'prayers') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-person-praying ml-2"></i>المستحبات</h3><div class="space-y-2 max-h-[380px] overflow-y-auto">`;
        appData.sections.prayers.items.forEach(p => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div class="flex justify-between items-start">
                    <h4 class="font-bold text-slate-800 text-xs">${p.title}</h4>
                    <span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-semibold">${p.time}</span>
                </div>
                <p class="text-xs text-slate-600 mt-1">${p.desc}</p>
            </div>`;
        });
        html += `</div>`;
        area.innerHTML = html;
        return;
    }
    renderHome();
}

function renderDuasCategory(catId) {
    const container = document.getElementById('duas-list-container');
    const category = appData.sections.duasCategories.find(c => c.id === catId);
    if (!container || !category) return;

    let html = '';
    category.items.forEach(d => {
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2">
            <h4 class="font-bold text-slate-800 text-xs">${d.title}</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">${d.desc}</p>
        </div>`;
    });
    container.innerHTML = html;
}

function renderHome() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `
        <div class="text-center py-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 mb-4">
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

function renderMonthlyPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;
    let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-calendar-days ml-2"></i>مواقيت الصلاة الشهرية</h3>
    <div class="max-h-[380px] overflow-y-auto border rounded-xl"><table class="w-full text-xs text-right">
    <thead class="bg-emerald-800 text-white sticky top-0"><tr><th class="p-2">اليوم</th><th class="p-2">الصبح</th><th class="p-2">الشروق</th><th class="p-2">الظهر</th><th class="p-2">العصر</th><th class="p-2">المغرب</th></tr></thead>
    <tbody class="divide-y divide-slate-100">`;
    monthlyPrayersData.forEach(p => {
        html += `<tr class="hover:bg-slate-50"><td class="p-2 font-bold">${p.day}</td><td class="p-2">${p.fajr}</td><td class="p-2">${p.sunrise}</td><td class="p-2">${p.dhuhr}</td><td class="p-2">${p.asr}</td><td class="p-2">${p.maghrib}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    area.innerHTML = html;
}

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    if (sb) sb.classList.toggle('hidden');
}

function openCitySelector() {
    alert("المدينة الحالية مضبوطة تلقائياً على: " + appData.city);
}

window.onload = function() {
    const dateEl = document.getElementById('hiiri-date');
    if (dateEl) dateEl.innerText = "٢٢ محرم ١٤٤٨ هـ";
    renderHome();
};
