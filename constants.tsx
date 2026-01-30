import React from 'react';
import { 
  Cpu, Zap, Clock, ShieldCheck, Workflow, Network, Database, MessageSquare, 
  Coins, BrainCircuit, Bot, TrendingUp, Target, Share2, Sparkles, Command, 
  Activity, Users, AlertCircle, Rocket, BarChart3, Check, ShoppingBag, 
  Mail, Search, Layout, FileText, Globe, Scale, GraduationCap, Truck
} from 'lucide-react';
import { Template, Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
];

export const TRANSLATIONS = {
  ar: {
    brand: 'Manara Ops',
    heroTitle: 'حوّل عملك إلى نظام ذكي يعمل 24/7',
    heroSub: 'نحن لا نكتفي بالأتمتة؛ نحن نبني لك أصولاً رقمية ذكية تمنحك الحرية المالية والزمنية الكاملة عبر الذكاء الاصطناعي. ابدأ اليوم بـ 0 تعقيد تقني.',
    ctaMain: 'تحدث مع المستشار الذكي',
    ctaExplore: 'استكشف حالات الاستخدام',
    navHome: 'الرئيسية',
    navStore: 'المتجر',
    navUseCases: 'حالات الاستخدام',
    navContact: 'تواصل معنا',
    painTitle: 'لماذا يتوقف نمو عملك؟',
    painSub: 'إذا كنت لا تزال تعتمد على الجهد البشري في كل شيء، فأنت تخسر المال والوقت والفرص.',
    catTitle: 'كتالوج الأنظمة الذكية',
    catSub: 'حلول جاهزة للتنفيذ تضع عملك على وضع "الطيار الآلي".',
    useCasesTitle: 'مكتبة الحلول الذكية',
    useCasesSub: 'شاهد كيف قمنا بتحويل الأعمال التقليدية إلى أنظمة ذاتية التشغيل والنمو.',
    contactTitle: 'دعنا نصمم نظامك القادم',
    contactSub: 'أجب على الأسئلة وسيقوم نظامنا بتصميم مسار الأتمتة الأنسب لمشروعك.',
    formName: 'اسمك الكريم',
    formEmail: 'بريد العمل',
    formMessage: 'ما هو أكبر عائق يمنع عملك من النمو الآلي؟',
    formSubmit: 'إرسال للمستشار',
    backToHome: 'العودة للرئيسية',
    successMsg: 'تم استلام طلبك بنجاح! سيتواصل معك مستشارنا الذكي قريباً.',
    errorMsg: 'عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.',
  },
  en: {
    brand: 'Manara Ops',
    heroTitle: 'Turn Your Business Into an AI Profit Machine',
    heroSub: 'We don’t just automate; we build smart digital assets that give you absolute financial and time freedom. Zero technical complexity for you.',
    ctaMain: 'Talk to Smart Consultant',
    ctaExplore: 'Explore Use Cases',
    navHome: 'Home',
    navStore: 'Store',
    navUseCases: 'Use Cases',
    navContact: 'Contact',
    painTitle: 'Why is your growth stalled?',
    painSub: 'If you’re still doing everything manually, you’re losing money, time, and opportunities.',
    catTitle: 'Rapid Automation Catalogue',
    catSub: 'Ready-to-deploy solutions that put your business on autopilot.',
    useCasesTitle: 'Smart Automation Library',
    useCasesSub: 'See how we transformed traditional businesses into self-operating systems.',
    contactTitle: 'Design Your Success',
    contactSub: 'Fill the form and our system will design your ideal automation path.',
    formName: 'Full Name',
    formEmail: 'Business Email',
    formMessage: 'What is your biggest bottleneck right now?',
    formSubmit: 'Send to Consultant',
    backToHome: 'Back to Home',
    successMsg: 'Success! Our AI consultant will reach out to you shortly.',
    errorMsg: 'Something went wrong. Please try again later.',
  },
  fr: {
    brand: 'Manara Ops',
    heroTitle: 'Transformez Votre Business en Machine à Profits IA',
    heroSub: 'Nous ne faisons pas que de l\'automatisation ; nous bâtissons des actifs numériques qui travaillent pour vous 24/7.',
    ctaMain: 'Parler au Consultant IA',
    ctaExplore: 'Explorer les cas d\'usage',
    navHome: 'Accueil',
    navStore: 'Boutique',
    navUseCases: 'Cas d\'usage',
    navContact: 'Contact',
    painTitle: 'Pourquoi votre croissance stagne ?',
    painSub: 'Si vous faites encore tout manuellement, vous perdez de l\'argent et des opportunités.',
    catTitle: 'Catalogue d\'Automation Rapide',
    catSub: 'Solutions prêtes pour mettre votre business en pilotage automatique.',
    useCasesTitle: 'Bibliothèque d\'Automation',
    useCasesSub: 'Découvrez comment nous automatisons des business réels.',
    contactTitle: 'Concevons Votre Succès',
    contactSub: 'Remplissez le formulaire pour obtenir votre plan d\'automation.',
    formName: 'Nom Complet',
    formEmail: 'Email Pro',
    formMessage: 'Quel est votre plus gros blocage ?',
    formSubmit: 'Envoyer au Consultant',
    backToHome: 'Retour à l\'accueil',
    successMsg: 'Réussite ! Notre consultant IA vous contactera bientôt.',
    errorMsg: 'Une erreur est survenue. Veuillez réessayer.',
  }
};

export const PAIN_POINTS = (lang: string) => [
  { 
    title: lang === 'ar' ? 'نزيف الوقت في المهام المتكررة' : 'Time Bleeding in Repetitive Tasks', 
    desc: lang === 'ar' ? 'أنت تقضي 70% من يومك في مهام يمكن للذكاء الاصطناعي إنهاؤها في ثوانٍ. استعد وقتك للإبداع والتوسع.' : 'You spend 70% of your day on tasks AI can finish in seconds. Reclaim your time for scaling.',
    icon: <Clock className="text-blue-500" /> 
  },
  { 
    title: lang === 'ar' ? 'فقدان العملاء بسبب بطء الرد' : 'Losing Leads Due to Slow Response', 
    desc: lang === 'ar' ? 'العميل الذي ينتظر أكثر من 5 دقائق يذهب لمنافسك. أنظمتنا تغلق المبيعات حتى وأنت نائم.' : 'Leads waiting over 5 mins go to competitors. Our systems close deals while you sleep.',
    icon: <Zap className="text-yellow-500" /> 
  },
  { 
    title: lang === 'ar' ? 'فوضى البيانات وعدم الربط' : 'Data Chaos & Lack of Sync', 
    desc: lang === 'ar' ? 'معلوماتك مشتتة بين التطبيقات؟ نحن نبني "دماغاً مركزياً" يربط كل أدواتك في مكان واحد.' : 'Info scattered across apps? We build a "Central Brain" syncing everything in one place.',
    icon: <Database className="text-purple-500" /> 
  },
];

export const WORKFLOW_USE_CASES = (lang: string) => [
  {
    id: 1,
    category: lang === 'ar' ? 'للمحامين' : 'For Lawyers',
    title: lang === 'ar' ? 'أتمتة مراجعة العقود القانونية' : 'Legal Contract Review Bot',
    desc: lang === 'ar' ? 'تحليل آلي للعقود واستخراج الثغرات القانونية في ثوانٍ باستخدام ذكاء اصطناعي مدرب قانونياً.' : 'AI analysis of contracts to extract legal gaps in seconds with specialized models.',
    tools: [<Scale size={16} />, <FileText size={16} />, <ShieldCheck size={16} />],
    roi: lang === 'ar' ? 'توفير 15 ساعة مراجعة أسبوعياً' : 'Saves 15h/week'
  },
  {
    id: 2,
    category: lang === 'ar' ? 'للتجارة الإلكترونية' : 'For E-commerce',
    title: lang === 'ar' ? 'مزامنة المخزون والطلبات الذكية' : 'Smart Inventory & Order Sync',
    desc: lang === 'ar' ? 'ربط متجرك مع الموردين وشركات الشحن لتحديث الكميات وإرسال التتبع آلياً للعميل.' : 'Connect store with suppliers & shipping to update stock and send tracking automatically.',
    tools: [<ShoppingBag size={16} />, <Truck size={16} />, <Zap size={16} />],
    roi: lang === 'ar' ? 'تقليل أخطاء الطلبات بنسبة 95%' : '-95% Order Errors'
  },
  {
    id: 3,
    category: lang === 'ar' ? 'للأساتذة والمؤثرين' : 'For Educators',
    title: lang === 'ar' ? 'مساعد تعليمي يعمل بالذكاء الاصطناعي' : 'AI Education Assistant',
    desc: lang === 'ar' ? 'بوت يرد على أسئلة الطلاب بناءً على محاضراتك، ينظم مواعيد الاختبارات ويصحح الواجبات.' : 'Bot answers student FAQs based on your lectures, schedules exams, and grades assignments.',
    tools: [<GraduationCap size={16} />, <MessageSquare size={16} />, <BrainCircuit size={16} />],
    roi: lang === 'ar' ? 'تفاعل الطلاب 24/7 بدون تدخل' : '24/7 Student Engagement'
  },
  {
    id: 4,
    category: 'Marketing',
    title: lang === 'ar' ? 'أتمتة جلب العملاء من فيسبوك' : 'FB Lead Gen Automation',
    desc: lang === 'ar' ? 'تحويل كل مهتم من Facebook Ads إلى واتساب مباشرة مع تسجيل بياناته في ملف Google Sheets.' : 'Instantly push FB Ads leads to WhatsApp & Google Sheets.',
    tools: [<Share2 size={16} />, <MessageSquare size={16} />, <Database size={16} />],
    roi: lang === 'ar' ? 'توفير 5 ساعات عمل أسبوعياً' : 'Saves 5h/week'
  },
  {
    id: 5,
    category: 'Sales',
    title: lang === 'ar' ? 'نظام المتابعة الذكي (Follow-up)' : 'Smart Sales Follow-up',
    desc: lang === 'ar' ? 'متابعة العملاء الذين لم يشتروا بعد بشكل آلي عبر البريد والواتساب بناءً على سلوكهم.' : 'Automated follow-ups via Email/WA based on user behavior.',
    tools: [<Mail size={16} />, <Bot size={16} />, <TrendingUp size={16} />],
    roi: lang === 'ar' ? 'زيادة التحويل بنسبة 25%' : '+25% Conversion'
  },
  {
    id: 6,
    category: 'Operations',
    title: lang === 'ar' ? 'أتمتة الفواتير والتقارير' : 'Invoicing & Reporting',
    desc: lang === 'ar' ? 'إنشاء فواتير PDF تلقائياً عند كل عملية بيع وإرسال تقرير مالي يومي للمدير.' : 'Auto-generate invoices & send daily financial reports.',
    tools: [<FileText size={16} />, <Coins size={16} />, <Zap size={16} />],
    roi: lang === 'ar' ? 'خطأ بشري بنسبة 0%' : '0% Human Error'
  }
];

export const TEMPLATES: Template[] = [
  {
    id: 'whatsapp-bot',
    title: 'نظام رد واتساب آلي ذكي',
    price: '$199',
    features: ['رد فوري 24/7', 'ربط مع Google Sheets', 'تصنيف العملاء تلقائياً'],
    icon: <MessageSquare size={40} />
  },
  {
    id: 'rag-system',
    title: 'مساعد ذكي للملفات (RAG)',
    price: '$349',
    features: ['يتحدث بناءً على ملفاتك', 'يدعم PDF و Excel', 'دقة عالية جداً'],
    icon: <Database size={40} />
  },
  {
    id: 'crm-sync',
    title: 'مزامنة المبيعات الذكية',
    price: '$249',
    features: ['ربط الإيميل بالـ CRM', 'تنبيهات فورية للمبيعات', 'تقارير أسبوعية آلياً'],
    icon: <Workflow size={40} />
  }
];