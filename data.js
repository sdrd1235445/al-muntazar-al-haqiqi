<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>المنتظر الحقيقي - عجل الله فرجه</title>
    <meta name="google-site-verification" content="QQ5chiWhodN5xi4gtqxBvSm8AT-">
    <!-- Tailwind CSS for modern responsive styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@400;600;700&display=swap');
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
        }
        .quran-font {
            font-family: 'Amiri', serif;
        }
    </style>
</head>
<body class="bg-slate-50 min-h-screen pb-20">

    <!-- Header / Top Bar -->
    <header class="bg-emerald-800 text-white p-4 shadow-md sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-kaaba text-amber-400 text-xl"></i>
                <h1 class="font-bold text-lg">المنتظر الحقيقي</h1>
            </div>
            <div id="hijri-date" class="text-xs bg-emerald-900/60 px-3 py-1 rounded-full text-amber-200">
                جاري تحميل التاريخ...
            </div>
        </div>
    </header>

    <!-- Main Dynamic Content Container -->
    <main class="container mx-auto p-4 max-w-md">
        
        <!-- Prayer Time Card -->
        <section class="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white rounded-2xl p-5 shadow-lg mb-6 relative overflow-hidden">
            <div class="absolute -left-4 -bottom-4 text-emerald-600/20 text-8xl pointer-events-none">
                <i class="fa-solid fa-mosque"></i>
            </div>
            <div class="flex justify-between items-start mb-3">
                <div>
                    <span class="text-xs text-amber-300 font-semibold block">مواقيت الصلاة (الديوانية)</span>
                    <h2 id="current-prayer-name" class="text-xl font-bold mt-1">صلاة المغرب</h2>
                </div>
                <button onclick="openCitySelector()" class="bg-emerald-600/60 hover:bg-emerald-600 text-xs px-3 py-1.5 rounded-lg border border-emerald-500/40 transition">
                    <i class="fa-solid fa-location-dot ml-1"></i> تغيير المدينة
                </button>
            </div>
            <div class="text-3xl font-bold tracking-wider text-amber-200" id="current-prayer-time">
                ٠٧:١٣ م
            </div>
        </section>

        <!-- Quick Access Navigation Grid -->
        <div class="grid grid-cols-4 gap-3 mb-6">
            <button onclick="switchTab('quran')" class="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-lg mb-1.5">
                    <i class="fa-solid fa-book-quran"></i>
                </div>
                <span class="text-xs font-semibold text-slate-700">القرآن</span>
            </button>
            <button onclick="switchTab('duas')" class="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-lg mb-1.5">
                    <i class="fa-solid fa-hands-praying"></i>
                </div>
                <span class="text-xs font-semibold text-slate-700">الأدعية</span>
            </button>
            <button onclick="switchTab('prayers')" class="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div class="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-lg mb-1.5">
                    <i class="fa-solid fa-person-praying"></i>
                </div>
                <span class="text-xs font-semibold text-slate-700">المستحبات</span>
            </button>
            <button onclick="switchTab('challenges')" class="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div class="w-12 h-12 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center text-lg mb-1.5">
                    <i class="fa-solid fa-bullseye"></i>
                </div>
                <span class="text-xs font-semibold text-slate-700">التحديات</span>
            </button>
        </div>

        <!-- Dynamic Content View Area -->
        <div id="content-area" class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 min-h-[300px]">
            <!-- Content will be injected dynamically from data.js -->
            <div class="text-center py-10 text-slate-400">
                <i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i>
                <p>جاري تحميل المحتوى...</p>
            </div>
        </div>

    </main>

    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2 px-6 flex justify-around items-center z-50 shadow-lg">
        <button onclick="switchTab('home')" class="flex flex-col items-center text-emerald-700">
            <i class="fa-solid fa-house text-lg"></i>
            <span class="text-[10px] mt-1">الرئيسية</span>
        </button>
        <button onclick="switchTab('quran')" class="flex flex-col items-center text-slate-400 hover:text-emerald-700">
            <i class="fa-solid fa-book-open text-lg"></i>
            <span class="text-[10px] mt-1">القرآن</span>
        </button>
        <button onclick="switchTab('duas')" class="flex flex-col items-center text-slate-400 hover:text-emerald-700">
            <i class="fa-solid fa-book-bookmark text-lg"></i>
            <span class="text-[10px] mt-1">الأدعية</span>
        </button>
        <button onclick="switchTab('prayers')" class="flex flex-col items-center text-slate-400 hover:text-emerald-700">
            <i class="fa-solid fa-star-and-crescent text-lg"></i>
            <span class="text-[10px] mt-1">المستحبات</span>
        </button>
    </nav>

    <!-- External Data Script -->
    <script src="data.js"></script>
</body>
</html>
