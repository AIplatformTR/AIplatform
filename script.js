document.addEventListener('DOMContentLoaded', () => {

    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКОВ ---

    const translations = {
        // Русский
        ru: {
            pageTitle: "Обучение работе с ИИ | Ваш AI-курс",
            logo: "AI.Курс",
            heroTitle: "Освойте Искусственный Интеллект и станьте специалистом будущего",
            heroSubtitle: "Практический онлайн-курс по работе с ChatGPT, Midjourney и другими ИИ-инструментами, которые изменят вашу карьеру.",
            heroButton: "Начать обучение",
            forWhomTitle: "Этот курс для вас, если вы:",
            forWhomCard1: "Маркетолог",
            forWhomDesc1: "И хотите автоматизировать создание контента и рекламных креативов.",
            forWhomCard2: "Дизайнер",
            forWhomDesc2: "И ищете новые инструменты для быстрой генерации идей и иллюстраций.",
            forWhomCard3: "Новичок",
            forWhomDesc3: "Хотите понимать основы и начать использовать ИИ.",
            forWhomCard4: "Предприниматель",
            forWhomDesc4: "И хотите оптимизировать бизнес-процессы и обойти конкурентов.",
            whatYouGetTitle: "Что вы получите после курса?",
            getFeature1: "Научитесь генерировать тексты любого формата",
            getFeature2: "Сможете создавать уникальные изображения и визуал",
            getFeature3: "Автоматизируете рутинные задачи и сэкономите часы работы",
            getFeature4: "Освоите навык промпт-инжиниринга для лучших результатов",
            tariffsTitle: "Выберите свой формат обучения",
            tariff1Title: "Самостоятельный",
            tariff1Feat1: "Доступ ко всем видео-урокам",
            tariff1Feat2: "Доступ к материалам навсегда",
            tariff1Feat3: "Без проверки ДЗ",
            tariff1Feat4: "Без чата с куратором",
            popularBadge: "ХИТ ПРОДАЖ",
            tariff2Title: "С поддержкой",
            tariff2Feat1: "Доступ ко всем видео-урокам",
            tariff2Feat2: "Проверка домашних заданий",
            tariff2Feat3: "Закрытый чат с куратором",
            tariff2Feat4: "Сертификат о прохождении",
            tariff3Title: "VIP",
            tariff3Feat1: "Все из тарифа 'С поддержкой'",
            tariff3Feat2: "3 личные сессии с экспертом",
            tariff3Feat3: "Помощь с вашим личным проектом",
            tariff3Feat4: "Гарантия результата",
            chooseButton: "Выбрать",
            faqTitle: "Часто задаваемые вопросы",
            faqQ1: "Нужны ли навыки программирования?",
            faqA1: "Нет, курс рассчитан на абсолютных новичков. Все инструменты мы будем изучать с нуля через простые и понятные интерфейсы.",
            faqQ2: "Как долго у меня будет доступ к курсу?",
            faqA2: "При покупке любого тарифа вы получаете пожизненный доступ ко всем материалам курса и его будущим обновлениям.",
            footerText: "© 2024 AI.Course. Все права защищены."
        },
        // Английский
        en: {
            pageTitle: "AI Training | Your AI Course",
            logo: "AI.Course",
            heroTitle: "Master Artificial Intelligence and Become a Specialist of the Future",
            heroSubtitle: "A practical online course on working with ChatGPT, Midjourney, and other AI tools that will change your career.",
            heroButton: "Start Learning",
            forWhomTitle: "This course is for you if you are a:",
            forWhomCard1: "Marketer",
            forWhomDesc1: "And want to automate content creation and ad creatives.",
            forWhomCard2: "Designer",
            forWhomDesc2: "And are looking for new tools for rapid idea generation and illustration.",
            forWhomCard3: "Beginner",
forWhomDesc3: "Want to understand the basics and start using AI.",
forWhomCard4: "Entrepreneur",
forWhomDesc4: "And want to optimize business processes and outperform competitors.",
            whatYouGetTitle: "What will you get after the course?",
            getFeature1: "Learn to generate texts of any format",
            getFeature2: "Be able to create unique images and visuals",
            getFeature3: "Automate routine tasks and save hours of work",
            getFeature4: "Master prompt engineering for the best results",
            tariffsTitle: "Choose Your Learning Format",
            tariff1Title: "Self-Paced",
            tariff1Feat1: "Access to all video lessons",
            tariff1Feat2: "Lifetime access to materials",
            tariff1Feat3: "No homework review",
            tariff1Feat4: "No chat with a mentor",
            popularBadge: "POPULAR",
            tariff2Title: "With Support",
            tariff2Feat1: "Access to all video lessons",
            tariff2Feat2: "Homework review",
            tariff2Feat3: "Private chat with a mentor",
            tariff2Feat4: "Certificate of completion",
            tariff3Title: "VIP",
            tariff3Feat1: "Everything from 'With Support' tariff",
            tariff3Feat2: "3 personal sessions with an expert",
            tariff3Feat3: "Help with your personal project",
            tariff3Feat4: "Result guarantee",
            chooseButton: "Choose",
            faqTitle: "Frequently Asked Questions",
            faqQ1: "Do I need programming skills?",
            faqA1: "No, the course is designed for absolute beginners. We will study all tools from scratch through simple and clear interfaces.",
            faqQ2: "How long will I have access to the course?",
            faqA2: "When you purchase any tariff, you get lifetime access to all course materials and its future updates.",
            footerText: "© 2024 AI.Course. All rights reserved."
        },
        // Турецкий
        tr: {
            pageTitle: "Yapay Zeka Eğitimi | AI Kursunuz",
            logo: "AI.Kursu",
            heroTitle: "Yapay Zekada Uzmanlaşın ve Geleceğin Uzmanı Olun",
            heroSubtitle: "Kariyerinizi değiştirecek ChatGPT, Midjourney ve diğer YZ araçlarıyla çalışma üzerine pratik bir çevrimiçi kurs.",
            heroButton: "Öğrenmeye Başla",
            forWhomTitle: "Bu kurs sizin için eğer:",
            forWhomCard1: "Pazarlamacı",
            forWhomDesc1: "İçerik ve reklam kreatifleri oluşturmayı otomatikleştirmek istiyorsanız.",
            forWhomCard2: "Tasarımcı",
            forWhomDesc2: "Hızlı fikir üretimi ve illüstrasyon için yeni araçlar arıyorsanız.",
           forWhomCard3: "Yeni Başlayan",
forWhomDesc3: "Temelleri anlamak ve yapay zekayı kullanmaya başlamak istiyorsanız.",
forWhomCard4: "Girişimci",
forWhomDesc4: "İş süreçlerini optimize etmek ve rakiplerinizi geride bırakmak istiyorsanız.",
            whatYouGetTitle: "Kurs sonunda ne elde edeceksiniz?",
            getFeature1: "Her formatta metin oluşturmayı öğrenin",
            getFeature2: "Benzersiz görseller ve tasarımlar oluşturabilin",
            getFeature3: "Rutin görevleri otomatikleştirin ve saatlerce zaman kazanın",
            getFeature4: "En iyi sonuçlar için prompt mühendisliği becerisinde ustalaşın",
            tariffsTitle: "Öğrenme Formatınızı Seçin",
            tariff1Title: "Kendi Kendine",
            tariff1Feat1: "Tüm video derslere erişim",
            tariff1Feat2: "Materyallere ömür boyu erişim",
            tariff1Feat3: "Ödev kontrolü yok",
            tariff1Feat4: "Eğitmenle sohbet yok",
            popularBadge: "POPÜLER",
            tariff2Title: "Destekli",
            tariff2Feat1: "Tüm video derslere erişim",
            tariff2Feat2: "Ödev kontrolü",
            tariff2Feat3: "Eğitmenle özel sohbet",
            tariff2Feat4: "Tamamlama sertifikası",
            tariff3Title: "VIP",
            tariff3Feat1: "'Destekli' paketteki her şey",
            tariff3Feat2: "Uzmanla 3 kişisel oturum",
            tariff3Feat3: "Kişisel projenizle ilgili yardım",
            tariff3Feat4: "Sonuç garantisi",
            chooseButton: "Seç",
            faqTitle: "Sıkça Sorulan Sorular",
            faqQ1: "Programlama becerisi gerekiyor mu?",
            faqA1: "Hayır, kurs tamamen yeni başlayanlar için tasarlanmıştır. Tüm araçları basit ve anlaşılır arayüzler aracılığıyla sıfırdan inceleyeceğiz.",
            faqQ2: "Kursa ne kadar süreyle erişimim olacak?",
            faqA2: "Herhangi bir paketi satın aldığınızda, tüm kurs materyallerine ve gelecekteki güncellemelerine ömür boyu erişim elde edersiniz.",
            footerText: "© 2024 AI.Course. Tüm hakları saklıdır."
        },
        // Арабский
        ar: {
            pageTitle: "تدريب الذكاء الاصطناعي | دورتك في الذكاء الاصطناعي",
            logo: "AI.دورة",
            heroTitle: "أتقن الذكاء الاصطناعي وكن متخصص المستقبل",
            heroSubtitle: "دورة عملية عبر الإنترنت حول العمل مع ChatGPT و Midjourney وأدوات الذكاء الاصطناعي الأخرى التي ستغير حياتك المهنية.",
            heroButton: "ابدأ التعلم",
            forWhomTitle: "هذه الدورة لك إذا كنت:",
            forWhomCard1: "مسوق",
            forWhomDesc1: "وترغب في أتمتة إنشاء المحتوى والإعلانات الإبداعية.",
            forWhomCard2: "مصمم",
            forWhomDesc2: "وتبحث عن أدوات جديدة لتوليد الأفكار والرسوم التوضيحية بسرعة.",
            forWhomCard3: "مبتدئ",
forWhomDesc3: "تريد فهم الأساسيات والبدء في استخدام الذكاء الاصطناعي.",
forWhomCard4: "رائد أعمال",
forWhomDesc4: "وتريد تحسين العمليات التجارية والتفوق على المنافسين.",
            whatYouGetTitle: "ماذا ستحصل عليه بعد الدورة؟",
            getFeature1: "تعلم كيفية إنشاء نصوص بأي صيغة",
            getFeature2: "القدرة على إنشاء صور ومرئيات فريدة",
            getFeature3: "أتمتة المهام الروتينية وتوفير ساعات من العمل",
            getFeature4: "إتقان مهارة هندسة الأوامر للحصول على أفضل النتائج",
            tariffsTitle: "اختر شكل التعلم الخاص بك",
            tariff1Title: "دراسة ذاتية",
            tariff1Feat1: "الوصول إلى جميع دروس الفيديو",
            tariff1Feat2: "الوصول مدى الحياة للمواد",
            tariff1Feat3: "بدون مراجعة الواجبات",
            tariff1Feat4: "بدون محادثة مع المشرف",
            popularBadge: "الأكثر شيوعًا",
            tariff2Title: "مع دعم",
            tariff2Feat1: "الوصول إلى جميع دروس الفيديو",
            tariff2Feat2: "مراجعة الواجبات المنزلية",
            tariff2Feat3: "محادثة خاصة مع المشرف",
            tariff2Feat4: "شهادة إتمام",
            tariff3Title: "VIP",
            tariff3Feat1: "كل شيء من باقة 'مع دعم'",
            tariff3Feat2: "3 جلسات شخصية مع خبير",
            tariff3Feat3: "مساعدة في مشروعك الشخصي",
            tariff3Feat4: "ضمان النتائج",
            chooseButton: "اختر",
            faqTitle: "الأسئلة الشائعة",
            faqQ1: "هل أحتاج إلى مهارات برمجة؟",
            faqA1: "لا، الدورة مصممة للمبتدئين تمامًا. سندرس جميع الأدوات من الصفر عبر واجهات بسيطة وواضحة.",
            faqQ2: "إلى متى سأتمكن من الوصول إلى الدورة؟",
            faqA2: "عند شراء أي باقة، تحصل على وصول مدى الحياة إلى جميع مواد الدورة وتحديثاتها المستقبلية.",
            footerText: "© 2024 AI.Course. جميع الحقوق محفوظة."
        }
    };

    const langSwitcher = document.querySelector('.lang-switcher');
    const langButtons = document.querySelectorAll('[data-lang]');
    const translatableElements = document.querySelectorAll('[data-key]');
    const htmlEl = document.documentElement;

    const changeLanguage = (lang) => {
        // Установка языка и направления текста
        htmlEl.lang = lang;
        if (lang === 'ar') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }

        // Перевод элементов
        translatableElements.forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Обновление активной кнопки
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Сохранение выбора в localStorage
        localStorage.setItem('language', lang);
    };

    langSwitcher.addEventListener('click', (event) => {
        if (event.target.matches('[data-lang]')) {
            changeLanguage(event.target.dataset.lang);
        }
    });

    // Проверка сохраненного языка при загрузке страницы
    const savedLang = localStorage.getItem('language') || 'ru';
    changeLanguage(savedLang);


    // --- ЛОГИКА ДЛЯ FAQ АККОРДЕОНА ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Закрыть все остальные открытые вопросы
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Открыть/закрыть текущий вопрос
            item.classList.toggle('active');
        });
    });

});
