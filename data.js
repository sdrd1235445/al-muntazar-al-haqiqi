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
            surahs: i === 0 ? "من سورة الفاتحة إلى آية 141 من سورة البقرة" : 
                    i === 1 ? "من آية 142 من سورة البقرة إلى آية 252 من سورة البقرة" :
                    `تفاصيل سور وآيات الجزء ${i + 1} الكاملة`,
            audioUrl: `https://server8.mp3quran.net/afs/${String(i + 1).padStart(3, '0')}.mp3`,
            text: `النص الكامل لآيات وسور الجزء ${i + 1} المبارك... [بسم الله الرحمن الرحيم...]`
        })),
        duasCategories: { 
            mainDuas: [
                { title: "دعاء كميل", category: "الأدعية والزيارات", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/001.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء العهد", category: "الأدعية والزيارات", text: "اللَّهُمَّ رَبِّ النُّورِ العَظِيمِ ورَبِّ الكُرْسِيِّ الرَّفِيعِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/002.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء الندبة", category: "الأدعية والزيارات", text: "الحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ وَصَلَّى للَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/003.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "حديث الكساء", category: "الأدعية والزيارات", text: "رُوِيَ عَنْ فَاطِمَةَ الزَّهْرَاءِ بِنْتِ رَسُولِ اللَّهِ (ص) قَالَتْ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/004.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء التوسل", category: "الأدعية والزيارات", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ وَأَتَوَسَّلُ إِلَيْكَ بِنَبِيِّكَ نَبِيِّ الرَّحْمَةِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/005.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء البهاء", category: "الأدعية والزيارات", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ بَهَائِكَ بِأَبْهَاهُ وَكُلُّ بَهَائِكَ بَهِيٌّ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/006.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء المجير", category: "الأدعية والزيارات", text: "سُبْحَانَكَ يَا اللَّهُ، تَعَالَيْتَ يَا رَحْمَنُ، أَجِرْنَا مِنَ النَّارِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/007.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "زيارة الأربعين", category: "الأدعية والزيارات", text: "اَسْلَامُ عَلَى وَلِيِّ اللَّهِ وَحَبِيبِهِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/008.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "زيارة وارث", category: "الأدعية والزيارات", text: "اَسْلَامُ عَلَيْكَ يَا وَارِثَ آدَمَ صَفْوَةِ اللَّهِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/009.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "زيارة آل ياسين", category: "الأدعية والزيارات", text: "سَلَامٌ عَلَى آلِ يَاسِسُنَ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/010.mp3", reader: "القارئ أبا ذر الحلواجي" }
            ],
            imamsVisits: [
                { title: "زيارة النبي محمد (ص)", text: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ..." },
                { title: "زيارة الامام علي (ع)", text: "السَّلَامُ عَلَى أَمِينِ اللَّهِ فِي أَرْضِهِ..." },
                { title: "زيارة السيدة فاطمة الزهراء (ع)", text: "السَّلَامُ عَلَيْكِ يَا مُمْتَحَنَةُ امْتَحَنَكِ الَّذِي خَلَقَكِ..." },
                { title: "زيارة الامام الحسن (ع)", text: "السَّلَامُ عَلَيْكَ يَا ابْنَ رَسُولِ رَبِّ الْعَالَمِينَ..." },
                { title: "زيارة الامام الحسين (ع)", text: "السَّلَامُ عَلَيْكَ يَا أَبَا عَبْدِ اللَّهِ وَعَلَى الأَرْوَاَحِ الَّتِي حَلَّتْ بِفِنائِكَ..." },
                { title: "زيارة الامام علي بن الحسين السجاد (ع)", text: "السَّلَامُ عَلَيْكَ يَا زَيْنَ الْعَابِدِينَ..." },
                { title: "زيارة الامام محمد الباقر (ع)", text: "السَّلَامُ عَلَيْكَ أَيُّهَا البَاقِرُ لِلْعِلْمِ..." },
                { title: "زيارة الامام جعفر بن محمد الصادق (ع)", text: "السَّلَامُ عَلَيْكَ أَيُّهَا الصَّادِقُ البَارُّ..." },
                { title: "زيارة الامام موسى بن جعفر الكاظم (ع)", text: "السَّلَامُ عَلَيْكَ يَا كَاظِمَ الْغَيْظِ..." },
                { title: "زيارة علي بن موسى الرضا (ع)", text: "السَّلَامُ عَلَيْكَ يَا ثُلْثَ الرَّحْمَةِ..." },
                { title: "زيارة محمد بن علي الجواد (ع)", text: "السَّلَامُ عَلَيْكَ يَا أَبَا جَعْفَرٍ مُحَمَّدَ بْنَ عَلِيٍّ الْجَوَادَ..." },
                { title: "زيارة علي بن محمد الهادي (ع)", text: "السَّلَامُ عَلَيْكَ يَا أَبَا الْحَسَنِ عَلِيَّ بْنَ مُحَمَّدٍ النَّقِيَّ..." },
                { title: "زيارة الحسن بن علي العسكري (ع)", text: "السَّلَامُ عَلَيْكَ يَا مَوْلَايَ يَا أَبَا مُحَمَّدٍ الْحَسَنَ بْنَ عَلِيِّ..." },
                { title: "زيارة صاحب الزمان (عج)", text: "السَّلَامُ عَلَيْكَ يَا حُجَّةَ اللَّهِ فِي أَرْضِهِ..." }
            ],
            taqibat: [
                { title: "تعقيبات الصبح", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ أَسْتَغْفِرُ اللَّهَ..." },
                { title: "تعقيبات الظهر", text: "لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ..." },
                { title: "تعقيبات العصر", text: "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ..." },
                { title: "تعقيبات المغرب", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ..." },
                { title: "تعقيبات العشاء", text: "اللَّهُمَّ إِنَّهُ لَيْسَ لِي عِلْمٌ بِمَوْضِعِ رِزْقِي..." }
            ],
            daysDuas: [
                { title: "دعاء يوم السبت وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الْأَوَّلِ قَبْلَ الإنْشَاءِ..." },
                { title: "دعاء يوم الأحد وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الَّذي لَمْ يُشْهِدْ أَحَداً حِينَ فَطَرَ..." },
                { title: "دعاء يوم الاثنين وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الَّذي لَمْ يُهْلِكْنِي بِذُنُوبِي..." },
                { title: "دعاء يوم الثلاثاء وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ وَالْحَمْدُ حَقُّهُ..." },
                { title: "دعاء يوم الأربعاء وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الَّذي جَعَلَ اللَّيْلَ لِبَاساً..." },
                { title: "دعاء يوم الخميس وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الَّذي أَذْهَبَ اللَّيْلَ مُظْلِماً..." },
                { title: "دعاء يوم الجمعة وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الأَوَّلِ قَبْلَ الإِنْشَاءِ..." }
            ]
        },
        challenges: [
            { day: 1, text: "قراءة صفحة من القرآن الكريم مع التدبر", level: "سهل", points: 10 },
            { day: 2, text: "صلاة ركعتين هدية لإمام الزمان (عج)", level: "سهل", points: 10 },
            { day: 3, text: "قراءة دعاء العهد صباحاً", level: "سهل", points: 10 },
            { day: 4, text: "الاستغفار 100 مرة", level: "سهل", points: 10 },
            { day: 5, text: "إطعام محتاج أو مساعدة شخص محتاج", level: "متوسط", points: 20 },
            { day: 6, text: "المحافظة على الصلوات في أول وقتها", level: "متوسط", points: 20 },
            { day: 7, text: "قراءة سورة يس وتهدئة ثوابها للزهراء (ع)", level: "متوسط", points: 20 },
            { day: 8, text: "صلة الرحم والاتصال بقريب مقطوع", level: "متوسط", points: 20 },
            { day: 9, text: "أداء صلاة الليل كاملة", level: "صعب", points: 30 },
            { day: 10, text: "الصدقة السرية لوالدينا أو للأيتام", level: "متوسط", points: 20 },
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
            { title: "صلاة الليل (صلاة الرحمة)", time: "الثلث الأخير من الليل", desc: "11 ركعة: 8 ركعات نافلة الليل، ركعتا الشفع، وركعة الوتر." },
            { title: "صلاة الآيات", time: "عند الكسوف والخسوف والآيات", desc: "ركعتان في كل ركعة خمس ركوعات." },
            { title: "صلاة الوتيرة", time: "بعد صلاة العشاء", desc: "ركعتان من جلوس تعدل ركعة من قيام." },
            { title: "صلاة العيد", time: "أيام الأعياد المباركة", desc: "صلوات الأعياد المخصوصة." }
        ],
        nawafilList: [
            { title: "نافلة الصبح", time: "قبل صلاة الصبح", desc: "ركعتان." },
            { title: "نافلة الظهر", time: "قبل صلاة الظهر", desc: "ثماني ركعات." },
            { title: "نافلة العصر", time: "قبل صلاة العصر", desc: "ثماني ركعات." },
            { title: "نافلة المغرب", time: "بعد صلاة المغرب", desc: "ركعتان." },
            { title: "نافلة العشاء", time: "بعد صلاة العشاء", desc: "ركعتان من جلوس (الوتيرة)." }
        ]
    }
};

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

// سحابة جلب مواقيت الصلاة الحقيقية لجميع المحافظات الـ 18
async function fetchLivePrayerTimes(governorateName) {
    const coords = iraqGovernorates[governorateName] || iraqGovernorates["الديوانية"];
    const tbody = document.getElementById('monthly-prayer-tbody');
    const label = document.getElementById('user-location-label');
    
    if (label) label.innerText = `جارٍ جلب المواقيت المباشرة من السحابة لـ (${governorateName})...`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-500">جاري الاتصال بالسحابة الفلكية...</td></tr>`;

    try {
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        
        const response = await fetch(`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${coords.lat}&longitude=${coords.lon}&method=4`);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            let html = '';
            data.data.forEach((dayData, index) => {
                const timings = dayData.timings;
                const gregorianDate = dayData.date.gregorian.date;
                html += `<tr class="hover:bg-slate-50 border-b">
                    <td class="p-2 font-bold">${index + 1} (${gregorianDate})</td>
                    <td class="p-2">${timings.Fajr.split(' ')[0]}</td>
                    <td class="p-2">${timings.Sunrise.split(' ')[0]}</td>
                    <td class="p-2">${timings.Dhuhr.split(' ')[0]}</td>
                    <td class="p-2">${timings.Maghrib.split(' ')[0]}</td>
                </tr>`;
            });
            if (tbody) tbody.innerHTML = html;
            if (label) label.innerText = `مواقيت الصلاة المباشرة - محافظة ${governorateName} (معتمدة فلكياً)`;
        }
    } catch (error) {
        if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-rose-500">تعذر الاتصال بالسحابة الفلكية</td></tr>`;
        if (label) label.innerText = `خطأ في الاتصال بالسحابة لـ (${governorateName})`;
    }
}

function changeGovernorate(city) {
    fetchLivePrayerTimes(city);
}

// سحابة جلب التاريخ الهجري المضبوط حقيقياً
async function fetchHijriDate() {
    const hijriEl = document.getElementById('hijri-date-display');
    if (!hijriEl) return;
    try {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        const res = await fetch(`https://api.aladhan.com/v1/gregorianToHijri?date=${dd}-${mm}-${yyyy}`);
        const data = await res.json();
        if (data.code === 200 && data.data) {
            const h = data.data.hijri;
            hijriEl.innerText = `${h.day} ${h.month.ar} ${h.year} هـ`;
        }
    } catch (e) {
        hijriEl.innerText = "٢٢ محرم ١٤٤٨ هـ";
    }
}

// دالة عرض صفحة التفاصيل الشاملة عند النقر على أي عنصر مع زر الصوت
function showDetailPage(title, text, audioUrl, reader) {
    const area = document.getElementById('content-area');
    if (!area) return;

    area.innerHTML = `
        <div class="mb-4">
            <button onclick="window.history.back()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 w-fit">
                <i class="fa-solid fa-arrow-right"></i><span>رجوع</span>
            </button>
        </div>
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex justify-between items-center mb-3 border-b pb-2">
                <h3 class="font-bold text-emerald-900 text-base">${title}</h3>
                ${reader ? `<span class="text-[11px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">${reader}</span>` : ''}
            </div>
            <div class="max-h-[350px] overflow-y-auto pr-1 mb-4">
                <p class="text-xs text-slate-700 leading-loose whitespace-pre-line text-justify">${text}</p>
            </div>
            ${audioUrl ? `
                <div class="mt-4 pt-3 border-t border-slate-200">
                    <span class="text-[10px] text-slate-500 block mb-1 font-semibold">التسجيل الصوتي:</span>
                    <audio controls class="w-full h-9">
                        <source src="${audioUrl}" type="audio/mpeg">
                        متصفحك لا يدعم تشغيل الصوت
                    </audio>
                </div>
            ` : ''}
        </div>
    `;
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

// عرض القرآن مع أزرار الصوت والنقر الشامل لعرض النص
function renderQuran(filter = '') {
    const area = document.getElementById('content-area');
    if (!area) return;

    const filtered = appData.sections.quranParts.filter(p => 
        p.name.includes(filter) || p.surahs.includes(filter) || String(p.number).includes(filter)
    );

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-book-quran ml-2"></i>القرآن الكريم والأجزاء</h3>
        <div class="mb-3">
            <input type="text" id="quran-search" oninput="renderQuran(this.value)" value="${filter}" placeholder="ابحث برقم الجزء أو اسم السورة..." class="w-full text-xs p-3 border rounded-xl focus:outline-none focus:border-emerald-600 bg-slate-50">
        </div>
        <div class="space-y-2 max-h-[300px] overflow-y-auto pr-1">`;

    filtered.forEach(p => {
        const encodedTitle = encodeURIComponent(p.name);
        const encodedText = encodeURIComponent(p.text);
        
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center hover:border-emerald-300 transition">
            <div class="cursor-pointer flex-1" onclick="showDetailPage(decodeURIComponent('${encodedTitle}'), decodeURIComponent('${encodedText}'), '${p.audioUrl}', 'تلاوة الجزء')">
                <span class="font-bold text-slate-800 text-xs block mb-1">${p.name}</span>
                <span class="text-[11px] text-slate-500 line-clamp-1">${p.surahs}</span>
            </div>
            <div class="flex items-center gap-2">
                <audio controls class="w-24 h-7">
                    <source src="${p.audioUrl}" type="audio/mpeg">
                </audio>
                <button onclick="showDetailPage(decodeURIComponent('${encodedTitle}'), decodeURIComponent('${encodedText}'), '${p.audioUrl}', 'تلاوة الجزء')" class="bg-emerald-50 text-emerald-700 p-2 rounded-lg text-xs font-bold">
                    <i class="fa-solid fa-book-open"></i>
                </button>
            </div>
        </div>`;
    });
    html += `</div>`;
    area.innerHTML = html;
}

// عرض الأدعية والزيارات وتفعيل النقر لعرضها بالكامل
function renderDuas(filter = '', activeSubTab = 'main') {
    const area = document.getElementById('content-area');
    if (!area) return;

    let itemsToDisplay = [];
    if (activeSubTab === 'main') itemsToDisplay = appData.sections.duasCategories.mainDuas;
    else if (activeSubTab === 'visits') itemsToDisplay = appData.sections.duasCategories.imamsVisits;
    else if (activeSubTab === 'taqibat') itemsToDisplay = appData.sections.duasCategories.taqibat;
    else if (activeSubTab === 'days') itemsToDisplay = appData.sections.duasCategories.daysDuas;

    if (filter) {
        itemsToDisplay = itemsToDisplay.filter(d => d.title.includes(filter));
    }

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-hands-praying ml-2"></i>الأدعية والزيارات</h3>
        <div class="mb-3">
            <input type="text" id="duas-search" oninput="renderDuas(this.value, '${activeSubTab}')" value="${filter}" placeholder="ابحث باسم الدعاء أو الزيارة..." class="w-full text-xs p-2.5 border rounded-xl focus:outline-none focus:border-emerald-600 bg-slate-50">
        </div>
        <div class="grid grid-cols-2 gap-1.5 mb-3 text-[10px] font-bold">
            <button onclick="renderDuas('', 'main')" class="p-2 rounded-lg ${activeSubTab === 'main' ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700'}">الأدعية والزيارات</button>
            <button onclick="renderDuas('', 'visits')" class="p-2 rounded-lg ${activeSubTab === 'visits' ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700'}">زيارة المعصومين</button>
            <button onclick="renderDuas('', 'taqibat')" class="p-2 rounded-lg ${activeSubTab === 'taqibat' ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700'}">تعقيبات الصلاة</button>
            <button onclick="renderDuas('', 'days')" class="p-2 rounded-lg ${activeSubTab === 'days' ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700'}">أدعية الأيام والزيارات</button>
        </div>
        <div class="space-y-2 max-h-[220px] overflow-y-auto pr-1">`;

    if (itemsToDisplay.length === 0) {
        html += `<p class="text-center text-xs text-slate-400 py-4">لم يتم العثور على عنصر بهذا الاسم</p>`;
    } else {
        itemsToDisplay.forEach(d => {
            const encodedTitle = encodeURIComponent(d.title);
            const encodedText = encodeURIComponent(d.text);
            const audio = d.audio || '';
            const reader = d.reader || '';

            html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center cursor-pointer hover:border-emerald-300 transition" onclick="showDetailPage(decodeURIComponent('${encodedTitle}'), decodeURIComponent('${encodedText}'), '${audio}', '${reader}')">
                <div>
                    <h4 class="font-bold text-emerald-900 text-xs mb-1">${d.title}</h4>
                    <p class="text-[11px] text-slate-500 line-clamp-1">${d.text}</p>
                </div>
                <i class="fa-solid fa-angle-left text-slate-400 text-xs mr-2"></i>
            </div>`;
        });
    }
    html += `</div>`;
    area.innerHTML = html;
}

function renderChallenges() {
    const area = document.getElementById('content-area');
    if (!area) return;

    const todayIndex = new Date().getDate() % appData.sections.challenges.length;
    const c = appData.sections.challenges[todayIndex];
    let badgeColor = c.level === 'سهل' ? 'bg-emerald-100 text-emerald-800' : c.level === 'متوسط' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-bullseye ml-2"></i>التحدي الروحي اليومي</h3>
        <p class="text-[11px] text-slate-500 mb-4">تحدي واحد مختار خصيصاً لك لهذا اليوم:</p>
        <div class="bg-gradient-to-br from-amber-50 to-emerald-50 p-5 rounded-2xl border border-amber-200 text-center shadow-sm">
            <span class="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full inline-block mb-3">تحدي اليوم</span>
            <p class="text-sm text-slate-800 font-bold mb-4 leading-relaxed">${c.text}</p>
            <div class="flex justify-center items-center gap-2">
                <span class="text-xs px-3 py-1 rounded-full font-bold ${badgeColor}">${c.level}</span>
                <span class="text-xs text-slate-500 font-semibold">+${c.points} نقطة روحية</span>
            </div>
        </div>`;
    area.innerHTML = html;
}

// عرض الصلوات والنوافل وتفعيل النقر لعرضها بالكامل
function renderPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-person-praying ml-2"></i>الصلوات المستحبة والنوافل</h3>
        
        <div class="mb-4">
            <h4 class="font-bold text-emerald-900 text-xs mb-2">الصلوات المستحبة وتشمل:</h4>
            <div class="space-y-2">`;
    appData.sections.prayersList.forEach(p => {
        const encodedTitle = encodeURIComponent(p.title);
        const fullDesc = encodeURIComponent(`وقت الأداء: ${p.time}\n\nكيفية الأداء والصفة:\n${p.desc}`);

        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-pointer hover:border-emerald-300 transition" onclick="showDetailPage(decodeURIComponent('${encodedTitle}'), decodeURIComponent('${fullDesc}'), '', 'صلاة مستحبة')">
            <div class="flex justify-between items-center mb-1">
                <h5 class="font-bold text-slate-900 text-xs">${p.title}</h5>
                <span class="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-semibold">${p.time}</span>
            </div>
            <p class="text-[11px] text-slate-600 line-clamp-1">${p.desc}</p>
        </div>`;
    });
    html += `</div></div>`;

    html += `<div>
            <h4 class="font-bold text-emerald-900 text-xs mb-2">النوافل وتشمل:</h4>
            <div class="space-y-2">`;
    appData.sections.nawafilList.forEach(n => {
        const encodedTitle = encodeURIComponent(n.title);
        const fullDesc = encodeURIComponent(`وقت الأداء: ${n.time}\n\nالتفاصيل:\n${n.desc}`);

        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-pointer hover:border-emerald-300 transition" onclick="showDetailPage(decodeURIComponent('${encodedTitle}'), decodeURIComponent('${fullDesc}'), '', 'نافلة')">
            <div class="flex justify-between items-center mb-1">
                <h5 class="font-bold text-slate-900 text-xs">${n.title}</h5>
                <span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">${n.time}</span>
            </div>
            <p class="text-[11px] text-slate-600 line-clamp-1">${n.desc}</p>
        </div>`;
    });
    html += `</div></div>`;

    area.innerHTML = html;
}

function renderMonthlyPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;

    let governoratesOptions = '';
    Object.keys(iraqGovernorates).forEach(gov => {
        governoratesOptions += `<option value="${gov}">${gov}</option>`;
    });

    let html = `
        <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-bold text-emerald-800"><i class="fa-solid fa-calendar-days ml-2"></i>المواقيت الشهرية</h3>
            <div class="text-[11px] font-bold text-slate-700">
                المحافظة: 
                <select onchange="changeGovernorate(this.value)" class="p-1 border rounded bg-slate-50 text-emerald-900 font-bold">
                    ${governoratesOptions}
                </select>
            </div>
        </div>
        <div id="user-location-label" class="text-xs text-emerald-700 font-semibold mb-2">مواقيت الصلاة المباشرة لجميع المحافظات الـ 18</div>
        <div class="max-h-[300px] overflow-y-auto border rounded-xl">
            <table class="w-full text-[11px] text-right">
                <thead class="bg-emerald-800 text-white sticky top-0">
                    <tr><th class="p-2">التاريخ</th><th class="p-2">الصبح</th><th class="p-2">الشروق</th><th class="p-2">الظهر</th><th class="p-2">المغرب</th></tr>
                </thead>
                <tbody id="monthly-prayer-tbody" class="divide-y divide-slate-100">
                    <tr><td colspan="5" class="p-4 text-center text-slate-500">اختر المحافظة لعرض المواقيت...</td></tr>
                </tbody>
            </table>
        </div>`;
    
    area.innerHTML = html;
    fetchLivePrayerTimes("الديوانية");
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

function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    if (sb) sb.classList.toggle('hidden');
}

window.onload = function() {
    fetchHijriDate();
    renderHome();
};
