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
                { title: "دعاء كميل", category: "الأدعية والزيارات", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ، وَبِقُوَّتِكَ الَّتِي قَهَرْتَ بِهَا كُلَّ شَيْءٍ وَخَضَعَ لَهَا كُلُّ شَيْءٍ وَذَلَّ لَهَا كُلُّ شَيْءٍ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/001.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء العهد", category: "الأدعية والزيارات", text: "اللَّهُمَّ رَبِّ النُّورِ العَظِيمِ ورَبِّ الكُرْسِيِّ الرَّفِيعِ ورَبِّ البَحْرِ المَسْجُورِ ومُنْزِلَ التَّوْرَاةِ والإنْجِيلِ والزَّبُورِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/002.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء الندبة", category: "الأدعية والزيارات", text: "الحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ وَصَلَّى للَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلَّمَ، اَللَّهُمَّ لَكَ الحَمْدُ عَلَى مَا جَرَى بِهِ قَضَاؤُكَ فِي أَوْلِيَائِكَ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/003.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "حديث الكساء", category: "الأدعية والزيارات", text: "رُوِيَ عَنْ فَاطِمَةَ الزَّهْرَاءِ بِنْتِ رَسُولِ اللَّهِ (ص) قَالَتْ دَخَلَ عَلَيَّ أَبِي رَسُولُ اللَّهِ فِي بَعْضِ الأَيَّامِ فَقَالَ السَّلَامُ عَلَيْكِ يَا فَاطِمَةُ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/004.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء التوسل", category: "الأدعية والزيارات", text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ وَأَتَوَسَّلُ إِلَيْكَ بِنَبِيِّكَ نَبِيِّ الرَّحْمَةِ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ، يَا أَبَا القَاسِمِ يَا رَسُولَ اللَّهِ...", audio: "https://download.quranicaudio.com/quran/mishari_rashid_al-afasy/005.mp3", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء المجير", category: "الأدعية والزيارات", text: "سُبْحَانَكَ يَا اَللهُ، تَعَالَيْتَ يَا رَحْمَانُ، أَجِرْنَا مِنَ النَّارِ يَا مُجِيرُ...", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء المشلول", category: "الأدعية والزيارات", text: "اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِاسْمِكَ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ، يَا ذَا الجَلَالِ وَالإِكْرَامِ...", reader: "القارئ أبا ذر الحلواجي" },
                { title: "دعاء الصباح للإمام علي (ع)", category: "الأدعية والزيارات", text: "اَللَّهُمَّ يَا مَنْ دَلَعَ لِسَانَ الصَّباحِ بِنُطْقِ تَبَلُّجِهِ، وَسَرَّحَ قِطَعَ اللَّيْلِ المُظْلِمِ بِغَياهِبِ تَلَجْلُجِهِ...", reader: "القارئ أبا ذر الحلواجي" }
            ],
            imamsVisits: [
                { title: "زيارة النبي محمد (ص)", text: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ، وَأَنَّكَ رَسُولُ اللَّهِ..." },
                { title: "زيارة الامام علي (ع)", text: "السَّلَامُ عَلَى أَمِينِ اللَّهِ فِي أَرْضِهِ وَحُجَّتِهِ عَلَى عِبَادِهِ، السَّلَامُ عَلَيْكَ يَا أَمِيرَ المُؤْمِنِينَ..." },
                { title: "زيارة السيدة فاطمة الزهراء (ع)", text: "السَّلَامُ عَلَيْكِ يَا مُمْتَحَنَةُ امْتَحَنَكِ الَّذِي خَلَقَكِ قَبْلَ أَنْ يَخْلُقَكِ فَوَجَدَكِ لِمَا امْتَحَنَكِ صَابِرَةً..." },
                { title: "زيارة الإمام الحسين (ع)", text: "السَّلَامُ عَلَيْكَ يَا أَبَا عَبْدِ اللَّهِ وَعَلَى الأَرْوَاحِ الَّتِي حَلَّتْ بِفِنائِكَ وَأَنَخَتْ بِرَحْلِكَ..." },
                { title: "زيارة وارث", text: "اَلسَّلاُمه عَلَيْكَ يَا وارِثَ آدَمَ صَفْوَةِ اللَّهِ، اَلسَّلاَمُ عَلَيْكَ يَا وارِثَ نُوحٍ نَبِيِّ اللَّهِ..." },
                { title: "زيارة آل ياسين", text: "سَلَامٌ عَلَى آلِ يَاسِين، اَلسَّلَامُ عَلَيْكَ يَا دَاعِيَ اللَّهِ وَرَبَّانِيَّ آيَاتِهِ..." },
                { title: "زيارة الإمام المهدي (عج)", text: "اَلسَّلَامُ عَلَيْكَ يَا حُجَّةَ اللَّهِ فِي أَرْضِهِ، اَلسَّلَامُ عَلَيْكَ يَا عَيْنَ اللَّهِ فِي خَلْقِهِ..." }
            ],
            taqibat: [
                { title: "تعقيبات صلاة الصبح", text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ، إِنَّهُ كَانَ غَفَّاراً. أُعِيذُ نَفْسِي وَدِينِي..." },
                { title: "تعقيبات صلاة الظهر", text: "لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ، لَا إِلَهَ إِلَّا اللَّهُ الْعَلِيُّ الْعَظِيمُ، سُبْحَانَ اللَّهِ رَبِّ السَّمَاوَاتِ السَّبْعِ..." },
                { title: "تعقيبات صلاة العصر", text: "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ذُو الجَلَالِ وَالإِكْرَامِ وَأَتُوبُ إِلَيْهِ..." },
                { title: "تعقيبات صلاة المغرب", text: "اَللَّهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ، وَالنَّجَاةَ مِنَ كُلِّ إِثْمٍ..." },
                { title: "تعقيبات صلاة العشاء", text: "اَللَّهُمَّ إِنَّهُ لَيْسَ لِي عِلْمٌ بِمَوْضِعِ رِزْقِي، وَإِنَّمَا أَطْلُبُهُ بِخَطَرَاتٍ تَخْطُرُ عَلَى قَلْبِي..." }
            ],
            daysDuas: [
                { title: "دعاء يوم السبت وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الْأَوَّلِ قَبْلَ الإنْشَاءِ وَالإِحْيَاءِ، وَالْآخِرِ بَعْدَ فَنَاءِ الأَشْيَاءِ..." },
                { title: "دعاء يوم الأحد وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الَّذي لَمْ يُشْهِدْ أَحَداً حِينَ فَطَرَ السَّمَاوَاتِ وَالأَرْضَ..." },
                { title: "دعاء يوم الاثنين وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الَّذي لَمْ يُشْهِدْ أَحَداً حِينَ فَطَرَ السَّمَاوَاتِ..." },
                { title: "دعاء يوم الثلاثاء", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ وَالحَمْدُ حَقُّهُ كَمَا يَسْتَحِقُّهُ، حَمْداً كَثِيراً..." },
                { title: "دعاء يوم الأربعاء", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - اَلْحَمْدُ لِلَّهِ الّذِي جَعَلَ اللَّيْلَ لِباساً والنَّوْماً سُباتاً..." },
                { title: "دعاء يوم الخميس", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - اَللَّهُمَّ إِنِّي أَتَوَجَّهُ إِلَيْكَ بِمُحَمَّدٍ نَبِيِّكَ نَبِيِّ الرَّحْمَةِ..." },
                { title: "دعاء يوم الجمعة وزيارته", text: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ - الْحَمْدُ لِلَّهِ الأَوَّلِ قَبْلَ اللَّيْلِ وَالنَّهَارِ..." }
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
            { day: 11, text: "قراءة سورة الملك قبل النوم حفاظاً من عذاب القبر", level: "سهل", points: 10 },
            { day: 12, text: "الإكثار من الصلاة على محمد وآل محمد 100 مرة", level: "سهل", points: 10 },
            { day: 13, text: "زيارة آل ياسين أو دعاء التوسل", level: "متوسط", points: 20 },
            { day: 14, text: "إدخال السرور على مؤمن بكلمة طيبة أو هدية", level: "متوسط", points: 20 },
            { day: 15, text: "صيام يوم مستحب (الأبيض أو الخميس أو الاثنين)", level: "صعب", points: 30 },
            { day: 16, text: "قراءة زيارة عاشوراء المباركة", level: "متوسط", points: 20 },
            { day: 17, text: "الاستغفار للمؤمنين والمؤمنات الأحياء والأموات", level: "سهل", points: 10 },
            { day: 18, text: "التفكر في خلق الله وعظيم آياته لمدة 10 دقائق", level: "سهل", points: 10 },
            { day: 19, text: "مراجعة جزء من المحفوظات القرآنية أو الأدعية", level: "متوسط", points: 20 },
            { day: 20, text: "أداء ركعتين شكراً لله تعالى على نعمه", level: "سهل", points: 10 },
            { day: 21, text: "قراءة دعاء الندبة بيوم الجمعة بتمعن", level: "متوسط", points: 20 },
            { day: 22, text: "كف اللسان عن الغيبة والتمحيص في الأخلاق", level: "صعب", points: 30 },
            { day: 23, text: "مساعدة الوالدين في أعمال المنزل وبرّهما", level: "متوسط", points: 20 },
            { day: 24, text: "قراءة سورة الواقعة لجلب الرغد والبركة", level: "سهل", points: 10 },
            { day: 25, text: "إصلاح ذات البين وحل خلاف بين صديقين", level: "صعب", points: 30 },
            { day: 26, text: "حضور مجالس الذكر أو الاستماع لمحاضرة دينية هادفة", level: "متوسط", points: 20 },
            { day: 27, text: "التصدق بقليل من المال ولو تمرة بنية سلامة الإمام الحجة (عج)", level: "سهل", points: 10 },
            { day: 28, text: "قراءة دعاء مكارم الأخلاق للإمام السجاد (ع)", level: "متوسط", points: 20 },
            { day: 29, text: "تجديد البيعة لصاحب العصر والزمان (عج) بصدق", level: "متوسط", points: 20 },
            { day: 30, text: "كتابة عهد شخصي مع الله والامام (عج) للالتزام بالطاعة", level: "صعب", points: 30 }
        ],
        prayersList: [
            { title: "صلاة الليل (صلاة الرحمة)", time: "الثلث الأخير من الليل", desc: "11 ركعة: 8 ركعات نافلة الليل، ركعتا الشفع، وركعة الوتر." },
            { title: "صلاة الآيات", time: "عند الكسوف والخسوف والآيات", desc: "ركعتان في كل ركعة خمس ركوعات وسجودان لكل ركوع." },
            { title: "صلاة الغفيلة", time: "بين صلاتي المغرب والعشاء", desc: "ركعتان يقرأ في الأولى الفاتحة وبدل السورة (وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِباً)، وفي الثانية الفاتحة وبدل السورة (وَعِندَهُ مَفَاتِحُ الْغَيْبِ)." }
        ],
        nawafilList: [
            { title: "نافلة الصبح", time: "قبل صلاة الصبح", desc: "ركعتان." },
            { title: "نافلة الظهر", time: "قبل صلاة الظهر", desc: "ثماني ركعات." },
            { title: "نافلة العصر", time: "قبل صلاة العصر", desc: "ثماني ركعات." },
            { title: "نافلة المغرب", time: "بعد صلاة المغرب", desc: "أربع ركعات." },
            { title: "نافلة العشاء", time: "بعد صلاة العشاء", desc: "ركعتان من جلوس." }
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
let currentSelectedGov = "الديوانية";
let todayTimings = null;

// تفعيل القائمة الجانبية (Sidebar) عند النقر عليها
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    if (sidebar) {
        sidebar.classList.toggle('hidden');
    }
}

// جلب المواقيت المباشرة من السحابة الفلكية (Aladhan)
async function fetchLivePrayerTimes(governorateName) {
    currentSelectedGov = governorateName;
    const coords = iraqGovernorates[governorateName] || iraqGovernorates["الديوانية"];
    const tbody = document.getElementById('monthly-prayer-tbody');
    const label = document.getElementById('user-location-label');
    
    if (label) label.innerText = `جارٍ جلب المواقيت المباشرة لـ (${governorateName})...`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-500">جاري الاتصال بالسحابة الفلكية...</td></tr>`;

    try {
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        const todayDayNum = dateObj.getDate();
        
        const response = await fetch(`https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${coords.lat}&longitude=${coords.lon}&method=4`);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            let html = '';
            const currentDayData = data.data[todayDayNum - 1] || data.data[0];
            todayTimings = currentDayData.timings;
            updateMainPrayerCard();

            data.data.forEach((dayData, index) => {
                const timings = dayData.timings;
                const gregorianDate = dayData.date.gregorian.date;
                html += `<tr class="hover:bg-slate-50 border-b">
                    <td class="p-3 font-bold text-sm">${index + 1} (${gregorianDate})</td>
                    <td class="p-3 text-sm font-semibold">${timings.Fajr.split(' ')[0]}</td>
                    <td class="p-3 text-sm font-semibold">${timings.Sunrise.split(' ')[0]}</td>
                    <td class="p-3 text-sm font-semibold">${timings.Dhuhr.split(' ')[0]}</td>
                    <td class="p-3 text-sm font-semibold">${timings.Maghrib.split(' ')[0]}</td>
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

// جلب التاريخ الهجري من السحابة مباشرة مع إمكانية التعديل اليدوي
async function fetchHijriDate() {
    const hijriEl = document.getElementById('hijri-date-display');
    if (!hijriEl) return;
    
    const manualDate = localStorage.getItem('manual_hijri_date');
    if (manualDate) {
        hijriEl.innerHTML = `${manualDate} <button onclick="editHijriManually()" class="text-[10px] text-amber-300 underline mr-1 font-normal">(تعديل)</button>`;
        return;
    }

    try {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        const res = await fetch(`https://api.aladhan.com/v1/gregorianToHijri?date=${dd}-${mm}-${yyyy}`);
        const data = await res.json();
        if (data.code === 200 && data.data) {
            const h = data.data.hijri;
            const fullStr = `${h.day} ${h.month.ar} ${h.year} هـ`;
            hijriEl.innerHTML = `${fullStr} <button onclick="editHijriManually()" class="text-[10px] text-amber-300 underline mr-1 font-normal">(تعديل)</button>`;
        }
    } catch (e) {
        hijriEl.innerHTML = `التاريخ الهجري غير متصل <button onclick="editHijriManually()" class="text-[10px] text-amber-300 underline mr-1">(تعديل)</button>`;
    }
}

function editHijriManually() {
    const newDate = prompt("أدخل التاريخ الهجري الصحيح بالصيغة التي تريدها (مثال: 18 صفر 1448 هـ):");
    if (newDate) {
        localStorage.setItem('manual_hijri_date', newDate);
        fetchHijriDate();
    }
}

// جلب نص الجزء كاملاً من سحابة القرآن الرسمية (Quran Cloud API)
async function loadJuzTextFromCloud(juzNumber, title, audioUrl) {
    const area = document.getElementById('content-area');
    if (!area) return;

    area.innerHTML = `
        <div class="mb-4">
            <button onclick="switchTab('quran')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 w-fit">
                <i class="fa-solid fa-arrow-right"></i><span>رجوع للأجزاء</span>
            </button>
        </div>
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
            <h3 class="font-bold text-emerald-900 text-base mb-3">${title}</h3>
            <p class="text-xs text-slate-500 py-6">جارٍ جلب نص القرآن الكريم كاملاً من السحابة...</p>
        </div>`;

    try {
        const res = await fetch(`https://api.alquran.cloud/v1/juz/${juzNumber}/quran-uthmani`);
        const data = await res.json();
        if (data.code === 200 && data.data && data.data.ayahs) {
            let fullAyahsText = "";
            data.data.ayahs.forEach(ayah => {
                fullAyahsText += ` ${ayah.text} (${ayah.numberInSurah}) `;
            });

            showDetailPage(title, fullAyahsText, audioUrl, "تلاوة الجزء من السحابة");
        } else {
            showDetailPage(title, "تعذر تحميل النص من السحابة، يجدر التحقق من الاتصال بالإنترنت.", audioUrl, "تلاوة الجزء");
        }
    } catch (err) {
        showDetailPage(title, "حدث خطأ في الاتصال بسحابة القرآن.", audioUrl, "تلاوة الجزء");
    }
}

function showDetailPage(title, text, audioUrl, reader) {
    const area = document.getElementById('content-area');
    if (!area) return;

    area.innerHTML = `
        <div class="mb-4">
            <button onclick="switchTab('home')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 w-fit">
                <i class="fa-solid fa-arrow-right"></i><span>رجوع للرئيسية</span>
            </button>
        </div>
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex justify-between items-center mb-3 border-b pb-2">
                <h3 class="font-bold text-emerald-900 text-base">${title}</h3>
                ${reader ? `<span class="text-[11px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">${reader}</span>` : ''}
            </div>
            <div class="max-h-[350px] overflow-y-auto pr-1 mb-4">
                <p class="quran-font text-sm text-slate-800 leading-loose text-justify">${text}</p>
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
    if (todayTimings) updateMainPrayerCard();
}

function renderQuran(filter = '') {
    const area = document.getElementById('content-area');
    if (!area) return;

    const filtered = appData.sections.quranParts.filter(p => 
        p.name.includes(filter) || String(p.number).includes(filter)
    );

    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-3"><i class="fa-solid fa-book-quran ml-2"></i>القرآن الكريم والأجزاء</h3>
        <div class="mb-3">
            <input type="text" id="quran-search" oninput="renderQuran(this.value)" value="${filter}" placeholder="ابحث برقم الجزء..." class="w-full text-xs p-3 border rounded-xl focus:outline-none focus:border-emerald-600 bg-slate-50">
        </div>
        <div class="space-y-2 max-h-[300px] overflow-y-auto pr-1">`;

    filtered.forEach(p => {
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center hover:border-emerald-300 transition">
            <div class="cursor-pointer flex-1" onclick="loadJuzTextFromCloud(${p.juzNumber}, '${p.name}', '${p.audioUrl}')">
                <span class="font-bold text-slate-800 text-xs block mb-1">${p.name}</span>
                <span class="text-[11px] text-slate-500 line-clamp-1">انقر لعرض النص الكامل من سحابة القرآن</span>
            </div>
            <div class="flex items-center gap-2">
                <audio controls class="w-24 h-7">
                    <source src="${p.audioUrl}" type="audio/mpeg">
                </audio>
                <button onclick="loadJuzTextFromCloud(${p.juzNumber}, '${p.name}', '${p.audioUrl}')" class="bg-emerald-50 text-emerald-700 p-2 rounded-lg text-xs font-bold">
                    <i class="fa-solid fa-book-open"></i>
                </button>
            </div>
        </div>`;
    });
    html += `</div>`;
    area.innerHTML = html;
}

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
    html += `</div>`;
    area.innerHTML = html;
}

function renderChallenges() {
    const area = document.getElementById('content-area');
    if (!area) return;
    const todayIndex = new Date().getDate() % appData.sections.challenges.length;
    const c = appData.sections.challenges[todayIndex];
    let badgeColor = c.level === 'سهل' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800';

    area.innerHTML = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-bullseye ml-2"></i>التحدي الروحي اليومي (30 تحدياً)</h3>
        <div class="bg-gradient-to-br from-amber-50 to-emerald-50 p-5 rounded-2xl border border-amber-200 text-center shadow-sm mb-3">
            <span class="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full inline-block mb-3">تحدي اليوم رقم ${c.day}</span>
            <p class="text-sm text-slate-800 font-bold mb-4 leading-relaxed">${c.text}</p>
            <div class="flex justify-center items-center gap-2">
                <span class="text-xs px-3 py-1 rounded-full font-bold ${badgeColor}">${c.level}</span>
                <span class="text-xs text-slate-500 font-semibold">+${c.points} نقطة</span>
            </div>
        </div>`;
}

function renderPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;
    let html = `
        <h3 class="text-lg font-bold text-emerald-800 mb-2"><i class="fa-solid fa-person-praying ml-2"></i>الصلوات المستحبة والنوافل</h3>
        <div class="space-y-3 max-h-[280px] overflow-y-auto pr-1">
            <div class="font-bold text-xs text-emerald-700 bg-emerald-50 p-2 rounded-lg">الصلوات المستحبة:</div>`;
    
    appData.sections.prayersList.forEach(p => {
        const tEnc = encodeURIComponent(p.title);
        const dEnc = encodeURIComponent(`الوقت: ${p.time}\n\n${p.desc}`);
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-pointer hover:border-emerald-300" onclick="showDetailPage(decodeURIComponent('${tEnc}'), decodeURIComponent('${dEnc}'), '', 'صلاة مستحبة')">
            <h5 class="font-bold text-slate-900 text-xs mb-1">${p.title}</h5>
            <p class="text-[11px] text-slate-600 line-clamp-1">${p.desc}</p>
        </div>`;
    });

    html += `<div class="font-bold text-xs text-emerald-700 bg-emerald-50 p-2 rounded-lg mt-3">النوافل اليومية:</div>`;
    appData.sections.nawafilList.forEach(n => {
        const tEnc = encodeURIComponent(n.title);
        const dEnc = encodeURIComponent(`الوقت: ${n.time}\n\n${n.desc}`);
        html += `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100 cursor-pointer hover:border-emerald-300" onclick="showDetailPage(decodeURIComponent('${tEnc}'), decodeURIComponent('${dEnc}'), '', 'نافلة')">
            <h5 class="font-bold text-slate-900 text-xs mb-1">${n.title}</h5>
            <p class="text-[11px] text-slate-600 line-clamp-1">${n.desc}</p>
        </div>`;
    });

    html += `</div>`;
    area.innerHTML = html;
}

function renderMonthlyPrayers() {
    const area = document.getElementById('content-area');
    if (!area) return;

    let governoratesOptions = '';
    Object.keys(iraqGovernorates).forEach(gov => {
        governoratesOptions += `<option value="${gov}" ${gov === currentSelectedGov ? 'selected' : ''}>${gov}</option>`;
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
            <table class="w-full text-right">
                <thead class="bg-emerald-800 text-white sticky top-0 text-sm">
                    <tr><th class="p-3">التاريخ</th><th class="p-3">الصبح</th><th class="p-3">الشروق</th><th class="p-3">الظهر</th><th class="p-3">المغرب</th></tr>
                </thead>
                <tbody id="monthly-prayer-tbody" class="divide-y divide-slate-100 text-sm font-semibold">
                    <tr><td colspan="5" class="p-4 text-center text-slate-500">جاري التحميل...</td></tr>
                </tbody>
            </table>
        </div>`;
    
    area.innerHTML = html;
    fetchLivePrayerTimes(currentSelectedGov);
}

function renderTasbih() {
    const area = document.getElementById('content-area');
    if (!area) return;
    area.innerHTML = `
        <div class="text-center py
