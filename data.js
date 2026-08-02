// قاعدة بيانات منصة المنتظر الحقيقي الشاملة
const appData = {
    appName: "المنتظر الحقيقي",
    city: "الديوانية",
    
    sections: {
        home: {
            title: "الرئيسية",
            welcomeMessage: "عجل الله فرجك وسهل مخرجك يا صاحب الزمان",
            dailyAyah: {
                text: "إِنَّهُمْ يَرَوْنَهُ بَعِيداً وَنَرَاهُ قَرِيباً",
                surah: "المعارج (6-7)"
            }
        },
        
        // فهرس القرآن الكريم مقسماً حسب الأجزاء الـ 30
        quran: {
            title: "القرآن الكريم (الأجزاء)",
            parts: Array.from({ length: 30 }, (_, i) => ({
                partNumber: i + 1,
                name: `الجزء ${i + 1}`,
                desc: `يحتوي على الآيات والسور المباركة للجزْء ${i + 1}`
            }))
        },

        // الأدعية مقسمة حسب التصجيمات الظاهرة في الصور بدقة
        duasCategories: [
            {
                id: 'days',
                name: "أدعية الأيام",
                items: [
                    { title: "دعاء يوم السبت", desc: "أدعوية الأسبوع المباركة" },
                    { title: "دعاء يوم الأحد", desc: "أدعوية الأسبوع المباركة" },
                    { title: "دعاء يوم الإثنين", desc: "أدعوية الأسبوع المباركة" },
                    { title: "دعاء يوم الثلاثاء", desc: "أدعوية الأسبوع المباركة" },
                    { title: "دعاء يوم الأربعاء", desc: "أدعوية الأسبوع المباركة" },
                    { title: "دعاء يوم الخميس", desc: "أدعوية الأسبوع المباركة" },
                    { title: "دعاء يوم الجمعة", desc: "أدعوية الأسبوع المباركة" }
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
            },
            {
                id: 'hujaj_prayers',
                name: "الصلوات على الحجج الطاهرين",
                items: [
                    { title: "الصلاة على علي بن الحسين عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على محمد بن علي عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على جعفر بن محمد عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على موسى بن جعفر عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على علي بن موسى عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على محمد بن علي بن موسى عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على علي بن محمد عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على الحسن بن علي بن محمد عليه السلام", desc: "صلوات المعصومين" },
                    { title: "الصلاة على ولي الأمر المنتظر عجل الله فرجه الشريف", desc: "صلوات الإمام الحجة عج" }
                ]
            },
            {
                id: 'general_duas',
                name: "الأدعية العامة",
                items: [
                    { title: "دعاء كميل بن زياد", desc: "من أعم الأدعية وأعظمها" },
                    { title: "دعاء العشرات", desc: "دعاء مبارك مروي عن الأئمة" },
                    { title: "دعاء السمات", desc: "يقرأ في آخر ساعة من عصر الجمعة" },
                    { title: "دعاء المشلول", desc: "المستجاب دعاؤه" },
                    { title: "دعاء يستشير", desc: "دعاء عظيم الشأن" },
                    { title: "دعاء المجير", desc: "للحفظ من الآفة والبلاء" },
                    { title: "دعاء العديلة", desc: "لثبات الإيمان عند الاحتضار" },
                    { title: "دعاء الجوشن الكبير", desc: "مائة باب للرحمة والفرج" },
                    { title: "دعاء الجوشن الصغير", desc: "أدعية الحفظ والتحصين" },
                    { title: "دعاء القاموس", desc: "دعاء الحجب والمنعة" },
                    { title: "دعاء الحزين", desc: "يقرأ بعد صلاة الليل" }
                ]
            }
        ],

        prayers: {
            title: "الصلوات المستحبة",
            items: [
                { id: 'night', name: "صلاة الليل", time: "الثلث الأخير من الليل", desc: "إحدى عشرة ركعة تفتح أبواب الرحمة" },
                { id: 'ghufaylah', name: "صلاة الغفيلة", time: "بين المغرب والعشاء", desc: "ركعتان خفيفتان تقضيان الحوائج" },
                { id: 'watirah', name: "صلاة الوتيرة", time: "بعد العشاء", desc: "ركعتان من جلوس" },
                { id: 'hujjah', name: "صلاة الإمام الحجة", time: "في أي وقت", desc: "ركعتان توسلاً لإمام الزمان عج" },
                { id: 'fatimah', name: "صلاة السيدة فاطمة الزهراء", time: "بعد العصر أو مساءً", desc: "ركعتان لتفريج الكروب" },
                { id: 'nawafil', name: "النوافل اليومية", time: "تتبع الفرائض", desc: "34 ركعة موزعة" },
                { id: 'eid', name: "صلاة العيدين والمناسبات", time: "أوقات الأعياد", desc: "تكبيرات وسنن مباركة" }
            ]
        },

        challenges: {
            title: "التحديات الروحية اليومية",
            items: [
                { id: 1, task: "قراءة صفحة واحدة من القرآن الكريم مع التدبر", points: 10 },
                { id: 2, task: "إهداء ركعتين لصاحب الزمان عج", points: 15 },
                { id: 3, task: "الاستغفار 70 مرة بالتعقيبات", points: 10 },
                { id: 4, task: "الصدقة ولو بكلمة طيبة أو ابتسامة", points: 10 },
                { id: 5, task: "قراءة دعاء العهد صباحاً", points: 15 }
            ]
        }
    }
};

// وظائف التحكم الديناميكي في واجهة التبويبات
function switchTab(tabId) {
    const area = document.getElementById('content-area');
    
    if (tabId === 'home' || tabId === 'main') {
        renderHome();
        return;
    }

    if (tabId === 'quran') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-book-quran ml-2"></i>القرآن الكريم (الأجزاء الثلاثون)</h3><div class="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto p-1">`;
        appData.sections.quran.parts.forEach(p => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center hover:bg-emerald-50 transition cursor-pointer">
                <span class="font-bold text-slate-800 text-sm">${p.name}</span>
                <span class="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-lg font-semibold"><i class="fa-solid fa-book-open"></i></span>
            </div>`;
        });
        html += `</div>`;
        area.innerHTML = html;
        return;
    }

    if (tabId === 'duas') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-hands-praying ml-2"></i>الأدعية والزيارات</h3>`;
        
        // عرض التبويبات الفرعية للأدعية مطابقة للصور
        html += `<div class="flex gap-1 overflow-x-auto pb-2 mb-3 text-xs">`;
        appData.sections.duasCategories.forEach((cat, index) => {
            const activeClass = index === 0 ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200';
            html += `<button onclick="renderDuasCategory('${cat.id}')" class="px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition ${activeClass}" id="btn-${cat.id}">${cat.name}</button>`;
        });
        html += `</div>`;
        
        html += `<div id="duas-list-container" class="space-y-2 max-h-[350px] overflow-y-auto p-1">`;
        // عرض أدعية القسم الأول افتراضياً (أدعية الأيام)
        appData.sections.duasCategories[0].items.forEach(d => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition cursor-pointer">
                <h4 class="font-bold text-slate-800 text-sm">${d.title}</h4>
                <p class="text-[11px] text-slate-500 mt-0.5">${d.desc}</p>
            </div>`;
        });
        html += `</div>`;
        
        area.innerHTML = html;
        return;
    }

    if (tabId === 'prayers') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-person-praying ml-2"></i>الصلوات المستحبة</h3><div class="space-y-2 max-h-[400px] overflow-y-auto p-1">`;
        appData.sections.prayers.items.forEach(p => {
            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 hover:bg-amber-50 transition">
                <div class="flex justify-between items-start">
                    <h4 class="font-bold text-slate-800 text-sm">${p.name}</h4>
                    <span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">${p.time}</span>
                </div>
                <p class="text-xs text-slate-600 mt-1">${p.desc}</p>
            </div>`;
        });
        html += `</div>`;
        area.innerHTML = html;
        return;
    }

    if (tabId === 'challenges') {
        let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-bullseye ml-2"></i>التحديات الروحية اليومية</h3><div class="space-y-2 max-h-[400px] overflow-y-auto p-1">`;
        appData.sections.challenges.items.forEach(c => {
            html += `<label class="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-pointer hover:bg-purple-50 transition">
                <input type="checkbox" class="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-500">
                <div class="flex-1">
                    <span class="text-xs font-semibold text-slate-800 block">${c.task}</span>
                </div>
                <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-lg font-bold">+${c.points} نقطة</span>
            </label>`;
        });
        html += `</div>`;
        area.innerHTML = html;
        return;
    }
}

// دالة تبديل تصنيفات الأدعية حسب الأقسام في التطبيق
function renderDuasCategory(catId) {
    const container = document.getElementById('duas-list-container');
    const category = appData.sections.duasCategories.find(c => c.id === catId);
    
    // تحديث ألوان الأزرار النشطة
    appData.sections.duasCategories.forEach(c => {
        const btn = document.getElementById(`btn-${c.id}`);
        if (btn) {
            if (c.id === catId) {
                btn.className = "px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition bg-emerald-700 text-white";
            } else {
                btn.className = "px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition bg-slate-100 text-slate-700 hover:bg-slate-200";
            }
        }
    });

    if (!category) return;

    let html = ``;
    category.items.forEach(d => {
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 hover:bg-blue-50 transition cursor-pointer">
            <h4 class="font-bold text-slate-800 text-sm">${d.title}</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">${d.desc}</p>
        </div>`;
    });
    container.innerHTML = html;
}

function renderHome() {
    const area = document.getElementById('content-area');
    area.innerHTML = `
        <div class="text-center py-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 mb-4">
            <i class="fa-solid fa-heart text-emerald-600 text-2xl mb-2"></i>
            <h3 class="font-bold text-emerald-900 text-base">يا صاحب الزمان</h3>
            <p class="text-xs text-emerald-700 mt-1">${appData.sections.home.welcomeMessage}</p>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
            <span class="text-xs text-amber-600 font-bold block mb-1">آية اليوم</span>
            <p class="quran-font text-lg text-slate-800 my-2">"${appData.sections.home.dailyAyah.text}"</p>
            <span class="text-[11px] text-slate-500">سورة ${appData.sections.home.dailyAyah.surah}</span>
        </div>
    `;
}

function openCitySelector() {
    alert("المدينة الحالية مضبوطة تلقائياً على: " + appData.city);
}

window.onload = function() {
    document.getElementById('hijri-date').innerText = "٢١ محرم ١٤٤٨ هـ";
    renderHome();
    // مصفوفة مواقيت الصلاة الشهرية
const monthlyPrayersData = Array.from({ length: 30 }, (_, i) => ({
    day: `${i + 1} أغسـسطس`,
    fajr: "٠٣:٤٣ ص",
    sunrise: "٠٥:١٦ ص",
    dhuhr: "١٢:٠٧ م",
    asr: "٠٣:٤٧ م",
    maghrib: "٠٧:١٣ م"
}));

let tasbihCount = 0;

// دالة عرض المسبحة الإلكترونية
function renderTasbih() {
    document.getElementById('content-area').innerHTML = `
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
    document.getElementById('counter-display').innerText = tasbihCount;
}

function resetTasbih() {
    tasbihCount = 0;
    document.getElementById('counter-display').innerText = tasbihCount;
}

// دالة عرض جدول مواقيت الصلاة للشهر الكامل
function renderMonthlyPrayers() {
    let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-calendar-days ml-2"></i>مواقيت الصلاة الشهرية</h3>
    <div class="max-h-[380px] overflow-y-auto border rounded-xl"><table class="w-full text-xs text-right">
    <thead class="bg-emerald-800 text-white sticky top-0"><tr><th class="p-2">اليوم</th><th class="p-2">الصبح</th><th class="p-2">الشروق</th><th class="p-2">الظهر</th><th class="p-2">العصر</th><th class="p-2">المغرب</th></tr></thead>
    <tbody class="divide-y divide-slate-100">`;
    monthlyPrayersData.forEach(p => {
        html += `<tr class="hover:bg-slate-50"><td class="p-2 font-bold">${p.day}</td><td class="p-2">${p.fajr}</td><td class="p-2">${p.sunrise}</td><td class="p-2">${p.dhuhr}</td><td class="p-2">${p.asr}</td><td class="p-2">${p.maghrib}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    document.getElementById('content-area').innerHTML = html;
}

// دالة فتح القائمة الجانبية
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('hidden');
}
