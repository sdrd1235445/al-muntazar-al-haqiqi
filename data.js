// ==========================================
// 1. إحداثيات المحافظات العراقية الـ 18 وسحابة الصلاة (Aladhan API)
// ==========================================
const iraqGovernorates = {
    "الديوانية": { lat: 31.9966, lon: 45.9189 },
    "البصرة": { lat: 30.5085, lon: 47.7835 },
    "بغداد": { lat: 33.3152, lon: 44.3661 },
    "النجف الأشرف": { lat: 32.0000, lon: 44.3333 },
    "كربلاء المقدسة": { lat: 32.6160, lon: 44.0240 },
    "بابل": { lat: 32.4727, lon: 44.4225 },
    "الأنبار": { lat: 33.4250, lon: 41.8460 },
    "ديالى": { lat: 33.7558, lon: 45.1556 },
    "صلاح الدين": { lat: 34.6000, lon: 43.6833 },
    "كركوك": { lat: 35.4681, lon: 44.3922 },
    "الموصل (نينوى)": { lat: 36.3400, lon: 43.1300 },
    "أربيل": { lat: 36.1901, lon: 44.0091 },
    "السليمانية": { lat: 35.5572, lon: 45.4363 },
    "دهوك": { lat: 36.8679, lon: 42.9885 },
    "العمارة (ميسان)": { lat: 31.8423, lon: 47.1444 },
    "الكوت (واسط)": { lat: 32.5029, lon: 45.8164 },
    "الناصرية (ذي قار)": { lat: 31.0583, lon: 46.2558 },
    "السماوة (المثنى)": { lat: 31.3275, lon: 45.2917 }
};

let tasbihCount = 0;
let currentSelectedGov = "الديوانية";
let todayTimings = null;

const appData = {
    appName: "المنتظر الحقيقي",
    sections: {
        home: {
            welcomeMessage: "عجل الله فرجك وسهل مخرجك يا صاحب الزمان",
            dailyAyah: { text: "إِنَّهُمْ يَرَوْنَهُ بَعِيداً وَنَرَاهُ قَرِيباً", surah: "سورة المعارج (6-7)" }
        },
        quranParts: Array.from({ length: 30 }, (_, i) => ({
            number: i + 1,
            name: `الجزء ${i + 1} المبارك`,
            surahs: `التلاوة الكاملة والآيات البينات للجزء ${i + 1}`,
            audioUrl: `https://server8.mp3quran.net/afs/${String(i + 1).padStart(3, '0')}.mp3`,
            juzNumber: i + 1
        })),
        duasCategories: {
            mainDuas: [
                { title: "دعاء كميل", category: "الأدعية والزيارات", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/001.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء العهد", category: "الأدعية والزيارات", text: "اللَّهُمَّ رَبِّ النُّورِ العَظِيمِ ورَبِّ الكُرْسِيِّ الرَّفِيعِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/002.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء الندبة", category: "الأدعية والزيارات", text: "الحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ وَصَلَّى للَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/003.mp3", reader: "القارئ أبا ذر الحلواجي" }
            ],
            imamsVisits: [
                { title: "زيارة النبي محمد (ص)", text: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ..." },
                { title: "زيارة الامام علي (ع)", text: "السَّلَامُ عَلَى أَمِينِ اللَّهِ فِي أَرْضِهِ وَحُجَّتِهِ عَلَى عِبَادِهِ..." }
            ],
            taqibat: [
                { title: "تعقيبات صلاة الصبح", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ..." }
            ],
            daysDuas: [
                { title: "دعاء يوم السبت وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الْأَوَّلِ قَبْلَ الإنْشَاءِ..." }
            ]
        },
        challenges: [
            { day: 1, text: "قراءة صفحة من القرآن الكريم مع التدبر", level: "سهل", points: 10 },
            { day: 2, text: "صلاة ركعتين هدية لإمام الزمان (عج)", level: "سهل", points: 10 }
        ],
        prayersList: [
            { title: "صلاة الليل (صلاة الرحمة)", time: "الثلث الأخير من الليل", desc: "11 ركعة: 8 ركعات نافلة الليل، ركعتا الشفع، وركعة الوتر." }
        ],
        nawafilList: [
            { title: "نافلة الصبح", time: "قبل صلاة الصبح", desc: "ركعتان." }
        ]
    }
};

// ==========================================
// 2. دوال التحكم والواجهة والتنقل (الجزء الأول)
// ==========================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    if (sidebar) sidebar.classList.toggle('hidden');
}

function switchTab(tabId) {
    if (tabId === 'home' || tabId === 'main') { renderHome(); return; }
    if (tabId === 'tasbih') { renderTasbih(); return; }
    if (tabId === 'quran') { renderQuran(); return; }
    if (tabId === 'duas') { renderDuas(); return; }
    if (tabId === 'challenges') { renderChallenges(); return; }
    if (tabId === 'prayers') { renderPrayers(); return; }
    if (tabId === 'monthly_prayers') { renderMonthlyPrayers(); return; }
    renderHome();
            }
// ==========================================
// 3. سحابة مواقيت الصلاة والتقويم الهجري
// ==========================================
async function fetchLivePrayerTimes(governorateName) {
    currentSelectedGov = governorateName;
    const coords = iraqGovernorates[governorateName] || iraqGovernorates["الديوانية"];
    const tbody = document.getElementById('monthly-prayer-tbody');
    const label = document.getElementById('user-location-label');
    
    if (label) label.innerText = `جارٍ جلب المواقيت المباشرة لـ (${governorateName})...`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-500">جاري الاتصال بالسحابة الفلكية...</td></tr>`;

    try {
        const dateObj = new Date();
        const response = await fetch(`https://api.aladhan.com/v1/calendar/${dateObj.getFullYear()}/${dateObj.getMonth() + 1}?latitude=${coords.lat}&longitude=${coords.lon}&method=4`);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            let html = '';
            const todayDayNum = dateObj.getDate();
            todayTimings = data.data[todayDayNum - 1]?.timings || data.data[0].timings;
            updateMainPrayerCard();

            data.data.forEach((dayData, index) => {
                const t = dayData.timings;
                html += `<tr class="hover:bg-slate-50 border-b">
                    <td class="p-3 font-bold text-sm">${index + 1} (${dayData.date.gregorian.date})</td>
                    <td class="p-3 text-sm font-semibold">${t.Fajr.split(' ')[0]}</td>
                    <td class="p-3 text-sm font-semibold">${t.Sunrise.split(' ')[0]}</td>
                    <td class="p-3 text-sm font-semibold">${t.Dhuhr.split(' ')[0]}</td>
                    <td class="p-3 text-sm font-semibold">${t.Maghrib.split(' ')[0]}</td>
                </tr>`;
            });
            if (tbody) tbody.innerHTML = html;
            if (label) label.innerText = `مواقيت الصلاة المباشرة - محافظة ${governorateName}`;
        }
    } catch (error) {
        if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-rose-500">تعذر الاتصال بالسحابة الفلكية</td></tr>`;
    }
}

function changeGovernorate(city) {
    fetchLivePrayerTimes(city);
}

function updateMainPrayerCard() {
    const cardTitle = document.getElementById('main-prayer-title');
    const cardTime = document.getElementById('main-prayer-time');
    const cardGovLabel = document.getElementById('main-prayer-gov-label');
    
    if (!cardTime || !todayTimings) return;
    if (cardGovLabel) cardGovLabel.innerText = `مواقيت الصلاة (${currentSelectedGov})`;

    const now = new Date();
    const currentTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const prayers = [
        { name: "صلاة الفجر", time: todayTimings.Fajr.split(' ')[0] },
        { name: "الشروق", time: todayTimings.Sunrise.split(' ')[0] },
        { name: "صلاة الظهر", time: todayTimings.Dhuhr.split(' ')[0] },
        { name: "صلاة العصر", time: todayTimings.Asr.split(' ')[0] },
        { name: "صلاة المغرب", time: todayTimings.Maghrib.split(' ')[0] },
        { name: "صلاة العشاء", time: todayTimings.Isha.split(' ')[0] }
    ];

    let activePrayer = prayers[prayers.length - 1];
    for (let i = 0; i < prayers.length; i++) {
        if (currentTimeStr < prayers[i].time) {
            activePrayer = i === 0 ? prayers[0] : prayers[i - 1];
            break;
        }
    }
    if (cardTitle) cardTitle.innerText = activePrayer.name;
    if (cardTime) cardTime.innerText = activePrayer.time;
}

async function fetchHijriDate() {
    const hijriEl = document.getElementById('hijri-date-display');
    if (!hijriEl) return;
    
    const manualDate = localStorage.getItem('manual_hijri_date');
    if (manualDate) {
        hijriEl.innerHTML = `${manualDate} <button onclick="editHijriManually()" class="text-[10px] text-amber-300 underline mr-1">(تعديل)</button>`;
        return;
    }

    try {
        const today = new Date();
        const res = await fetch(`https://api.aladhan.com/v1/gregorianToHijri?date=${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`);
        const data = await res.json();
        if (data.code === 200 && data.data) {
            const h = data.data.hijri;
            hijriEl.innerHTML = `${h.day} ${h.month.ar} ${h.year} هـ <button onclick="editHijriManually()" class="text-[10px] text-amber-300 underline mr-1">(تعديل)</button>`;
        }
    } catch (e) {
        hijriEl.innerHTML = `التاريخ الهجري غير متصل`;
    }
}

function editHijriManually() {
    const newDate = prompt("أدخل التاريخ الهجري الصحيح (مثال: 18 صفر 1448 هـ):");
    if (newDate) {
        localStorage.setItem('manual_hijri_date', newDate);
        fetchHijriDate();
    }
}

// ==========================================
// 4. سحابة القرآن الكريم واجهات العرض
// ==========================================
async function loadJuzTextFromCloud(juzNumber, title, audioUrl) {
    const area = document.getElementById('content-area');
    if (!area) return;

    area.innerHTML = `<div class="p-6 text-center text-slate-500">جارٍ جلب نص القرآن الكريم كاملاً من السحابة...</div>`;

    try {
        const res = await fetch(`https://api.alquran.cloud/v1/juz/${juzNumber}/quran-uthmani`);
        const data = await res.json();
        if (data.code === 200 && data.data && data.data.ayahs) {
            let fullAyahsText = "";
            data.data.ayahs.forEach(ayah => {
                fullAyahsText += ` ${ayah.text} (${ayah.numberInSurah}) `;
            });
            showDetailPage(title, fullAyahsText, audioUrl, "تلاوة الجزء من السحابة");
        }
    } catch (err) {
        showDetailPage(title, "تعذر تحميل النص من السحابة.", audioUrl, "تلاوة الجزء");
    }
}

function renderHome() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `
        <div class="text-center py-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100 mb-4">
            <h3 class="font-bold text-emerald-900 text-base">يا صاحب الزمان</h3>
            <p class="text-xs text-emerald-700 mt-1">${appData.sections.home.welcomeMessage}</p>
        </div>`;
    if (todayTimings) updateMainPrayerCard();
}

function renderQuran(filter = '') {
    const area = document.getElementById('content-area');
    if (!area) return;
    let html = `<h3 class="text-lg font-bold text-emerald-800 mb-3">القرآن الكريم والأجزاء</h3><div class="space-y-2">`;
    appData.sections.quranParts.forEach(p => {
        html += `<div class="bg-slate-50 p-3 rounded-xl border flex justify-between items-center">
            <span class="font-bold text-slate-800 text-xs">${p.name}</span>
            <button onclick="loadJuzTextFromCloud(${p.juzNumber}, '${p.name}', '${p.audioUrl}')" class="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-bold">عرض</button>
        </div>`;
    });
    html += `</div>`;
    area.innerHTML = html;
}

function renderDuas(filter = '', activeSubTab = 'main') {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `<h3 class="text-lg font-bold text-emerald-800 mb-2">الأدعية والزيارات</h3><p class="text-xs text-slate-500">قسم الأدعية والزيارات متاح للتصفح والتلاوة.</p>`;
}

function renderChallenges() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `<h3 class="text-lg font-bold text-emerald-800 mb-2">التحدي الروحي اليومي</h3>`;
}

function renderPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `<h3 class="text-lg font-bold text-emerald-800 mb-2">الصلوات المستحبة والنوافل</h3>`;
}

function renderMonthlyPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `<h3 class="text-lg font-bold text-emerald-800 mb-3">المواقيت الشهرية</h3><div id="user-location-label" class="text-xs text-emerald-700 mb-2">جاري التحميل...</div><table class="w-full text-right"><tbody id="monthly-prayer-tbody"></tbody></table>`;
    fetchLivePrayerTimes(currentSelectedGov);
}

function renderTasbih() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `<div class="text-center"><div id="tasbih-count" class="text-5xl font-bold text-emerald-800 mb-6">${tasbihCount}</div><button onclick="incrementTasbih()" class="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold">تسبيح</button></div>`;
}

function incrementTasbih() {
    tasbihCount++;
    const el = document.getElementById('tasbih-count');
    if (el) el.innerText = tasbihCount;
}

function showDetailPage(title, text, audioUrl, reader) {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `<div class="bg-slate-50 p-4 rounded-2xl border"><h3 class="font-bold text-emerald-900 mb-2">${title}</h3><p class="text-sm text-slate-800 leading-loose">${text}</p></div>`;
}

window.addEventListener('DOMContentLoaded', () => {
    fetchHijriDate();
    fetchLivePrayerTimes('الديوانية');
});
