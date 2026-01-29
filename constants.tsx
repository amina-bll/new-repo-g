import React from 'react';
import { 
  Cpu, Zap, Clock, ShieldCheck, Workflow, Network, Database, MessageSquare, 
  Coins, BrainCircuit, Bot, TrendingUp, Target, Share2, Sparkles, Command, 
  Activity, Users, AlertCircle, Rocket, BarChart3, Check, ShoppingBag, 
  Mail, Search, Layout, FileText, Globe
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
    heroTitle: 'حوّل عملك إلى نظام ذكي يربح حتى وأنت نائم',
    heroSub: 'نحن لا نبيع أكواداً. نحن نمنحك السيادة الكاملة على وقتك عبر أتمتة العمليات والذكاء الاصطناعي. ابدأ اليوم بـ 0 تعقيد تقني.',
    ctaMain: 'تحدث مع المستشار الذكي',
    ctaExplore: 'استكشف حالات الاستخدام',
    navHome: 'الرئيسية',
    navStore: 'الحلول الجاهزة',
    navUseCases: 'حالات الاستخدام',
    navContact: 'اتصل بنا',
    // Section Problèmes
    painTitle: 'لماذا يتوقف نمو عملك؟',
    painSub: 'إذا كنت لا تزال تفعل هذه الأشياء يدوياً، فأنت تخسر المال كل ساعة.',
    pain1: 'الرد اليدوي على واتساب يقتل وقتك',
    pain2: 'بياناتك مشتتة بين Excel وEmail وCRM',
    pain3: 'العملاء يغادرون بسبب بطء الاستجابة',
    // Section Services
    serviceTitle: 'هندسة الحرية التشغيلية',
    serviceSub: 'حلول ذكية مصممة لرفع الكفاءة فوراً.',
    // Catalogue
    catTitle: 'كتالوج الأتمتة السريعة',
    catSub: 'حلول جاهزة للتنفيذ في أقل من 72 ساعة.',
    buyNow: 'احجز هذا النظام',
    // Use Cases Page
    useCasesTitle: 'مكتبة الأتمتة الذكية',
    useCasesSub: 'شاهد كيف قمنا بتحويل الأعمال التقليدية إلى أنظمة ذاتية التشغيل.',
    allCategories: 'كل الفئات',
    catMarketing: 'التسويق',
    catSales: 'المبيعات',
    catOps: 'العمليات',
    // Contact / Bot
    contactTitle: 'دعنا نصمم نجاحك',
    contactSub: 'أجب على 3 أسئلة وسيقوم نظامنا بتصميم مسار الأتمتة الأنسب لك.',
    formName: 'اسمك الكريم',
    formEmail: 'بريد العمل',
    formMessage: 'ما هو أكبر عائق في عملك الآن؟',
    formSubmit: 'إرسال للمستشار',
    formSuccess: 'تم استلام طلبك! المستشار الذكي سيتواصل معك خلال دقائق.',
    // Why Us
    whyTitle: 'لماذا Manara Ops؟',
    why1: 'تنفيذ سريع (خلال أيام لا شهور)',
    why2: 'حلول موجهة لنتائج مادية',
    why3: 'دعم فني مستمر بلغة تفهمها',
    backToHome: 'العودة للرئيسية',
  },
  en: {
    brand: 'Manara Ops',
    heroTitle: 'Turn Your Business Into an AI Profit Machine',
    heroSub: 'We don’t sell code. We give you absolute sovereignty over your time through automation. Zero technical complexity for you.',
    ctaMain: 'Talk to Smart Consultant',
    ctaExplore: 'Explore Use Cases',
    navHome: 'Home',
    navStore: 'Templates',
    navUseCases: 'Use Cases',
    navContact: 'Contact',
    painTitle: 'Why is your growth stalled?',
    painSub: 'If you’re still doing these manually, you’re losing money every hour.',
    pain1: 'Manual WhatsApp replies are killing your time',
    pain2: 'Your data is scattered across Excel, Email & CRM',
    pain3: 'Customers leave because of slow response times',
    serviceTitle: 'Operational Sovereignty Engineering',
    serviceSub: 'Smart solutions designed to boost efficiency instantly.',
    catTitle: 'Rapid Automation Catalogue',
    catSub: 'Ready-to-deploy solutions in less than 72 hours.',
    buyNow: 'Get this system',
    useCasesTitle: 'Smart Automation Library',
    useCasesSub: 'See how we transformed traditional businesses into self-operating systems.',
    allCategories: 'All Categories',
    catMarketing: 'Marketing',
    catSales: 'Sales',
    catOps: 'Operations',
    contactTitle: 'Design Your Success',
    contactSub: 'Answer 3 questions and our system will design your ideal automation path.',
    formName: 'Full Name',
    formEmail: 'Business Email',
    formMessage: 'What is your biggest bottleneck right now?',
    formSubmit: 'Send to Consultant',
    formSuccess: 'Received! Our smart consultant will reach out in minutes.',
    whyTitle: 'Why Manara Ops?',
    why1: 'Fast implementation (Days, not months)',
    why2: 'ROI-driven solutions',
    why3: 'Ongoing local support',
    backToHome: 'Back to Home',
  },
  fr: {
    brand: 'Manara Ops',
    heroTitle: 'Transformez Votre Business en Machine à Profits IA',
    heroSub: 'Nous ne vendons pas du code. Nous vous rendons souverain de votre temps. Zéro complexité technique.',
    ctaMain: 'Parler au Consultant IA',
    ctaExplore: 'Explorer les cas d\'usage',
    navHome: 'Accueil',
    navStore: 'Catalogue',
    navUseCases: 'Cas d\'usage',
    navContact: 'Contact',
    painTitle: 'Pourquoi votre croissance stagne ?',
    painSub: 'Si vous faites encore cela manuellement, vous perdez de l\'argent chaque heure.',
    pain1: 'Les réponses WhatsApp manuelles tuent votre temps',
    pain2: 'Données éparpillées (Excel, Email, CRM)',
    pain3: 'Vos clients partent à cause de la lenteur',
    serviceTitle: 'Ingénierie de Souveraineté Opérationnelle',
    serviceSub: 'Solutions intelligentes pour booster l\'efficacité.',
    catTitle: 'Catalogue d\'Automation Rapide',
    catSub: 'Solutions prêtes en moins de 72 heures.',
    buyNow: 'Réserver ce système',
    useCasesTitle: 'Bibliothèque d\'Automation',
    useCasesSub: 'Découvrez comment nous automatisons des business réels.',
    allCategories: 'Toutes les catégories',
    catMarketing: 'Marketing',
    catSales: 'Ventes',
    catOps: 'Opérations',
    contactTitle: 'Concevons Votre Succès',
    contactSub: 'Répondez à 3 questions pour obtenir votre plan d\'automation.',
    formName: 'Nom Complet',
    formEmail: 'Email Pro',
    formMessage: 'Quel est votre plus gros blocage ?',
    formSubmit: 'Envoyer au Consultant',
    formSuccess: 'Reçu ! Notre consultant vous contactera sous peu.',
    whyTitle: 'Pourquoi Manara Ops ?',
    why1: 'Exécution rapide (Jours, pas mois)',
    why2: 'Solutions orientées ROI',
    why3: 'Support local continu',
    backToHome: 'Retour à l\'accueil',
  }
};

export const PAIN_POINTS = (lang: string) => [
  { title: TRANSLATIONS[lang].pain1, icon: <Clock className="text-red-500" /> },
  { title: TRANSLATIONS[lang].pain2, icon: <AlertCircle className="text-red-500" /> },
  { title: TRANSLATIONS[lang].pain3, icon: <Users className="text-red-500" /> },
];

export const WORKFLOW_USE_CASES = (lang: string) => [
  {
    id: 1,
    category: 'Marketing',
    title: lang === 'ar' ? 'أتمتة جلب العملاء من فيسبوك' : 'FB Lead Gen Automation',
    desc: lang === 'ar' ? 'تحويل كل مهتم من Facebook Ads إلى واتساب مباشرة مع تسجيل بياناته في ملف Google Sheets.' : 'Instantly push FB Ads leads to WhatsApp & Google Sheets.',
    tools: [<Share2 size={16} />, <MessageSquare size={16} />, <Database size={16} />],
    roi: lang === 'ar' ? 'توفير 5 ساعات عمل أسبوعياً' : 'Saves 5h/week'
  },
  {
    id: 2,
    category: 'Sales',
    title: lang === 'ar' ? 'نظام المتابعة الذكي (Follow-up)' : 'Smart Sales Follow-up',
    desc: lang === 'ar' ? 'متابعة العملاء الذين لم يشتروا بعد بشكل آلي عبر البريد والواتساب بناءً على سلوكهم.' : 'Automated follow-ups via Email/WA based on user behavior.',
    tools: [<Mail size={16} />, <Bot size={16} />, <TrendingUp size={16} />],
    roi: lang === 'ar' ? 'زيادة التحويل بنسبة 25%' : '+25% Conversion'
  },
  {
    id: 3,
    category: 'Operations',
    title: lang === 'ar' ? 'أتمتة الفواتير والتقارير' : 'Invoicing & Reporting',
    desc: lang === 'ar' ? 'إنشاء فواتير PDF تلقائياً عند كل عملية بيع وإرسال تقرير مالي يومي للمدير.' : 'Auto-generate invoices & send daily financial reports.',
    tools: [<FileText size={16} />, <Coins size={16} />, <Zap size={16} />],
    roi: lang === 'ar' ? 'خطأ بشري بنسبة 0%' : '0% Human Error'
  },
  {
    id: 4,
    category: 'Marketing',
    title: lang === 'ar' ? 'نشر المحتوى الذكي' : 'AI Content Repurposing',
    desc: lang === 'ar' ? 'تحويل رابط يوتيوب إلى 5 منشورات فيسبوك و 10 تغريدات آلياً باستخدام الذكاء الاصطناعي.' : 'Turn 1 YT video into 15+ social posts automatically.',
    tools: [<Cpu size={16} />, <Network size={16} />, <Globe size={16} />],
    roi: lang === 'ar' ? 'وفر تكلفة صانع محتوى' : 'Save Content Creator Costs'
  },
  {
    id: 5,
    category: 'Operations',
    title: lang === 'ar' ? 'دعم فني 24/7 (RAG)' : 'AI Knowledge Support',
    desc: lang === 'ar' ? 'شات بوت يقرأ كل ملفات شركتك ويجيب الموظفين أو العملاء بدقة مذهلة.' : 'AI bot that knows your company files & answers precisely.',
    tools: [<Database size={16} />, <BrainCircuit size={16} />, <ShieldCheck size={16} />],
    roi: lang === 'ar' ? 'تقليل ضغط الدعم بنسبة 80%' : '-80% Support Load'
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

export const WHY_US = (lang: string) => [
  { title: TRANSLATIONS[lang].why1, icon: <Zap className="text-brand-cyan" /> },
  { title: TRANSLATIONS[lang].why2, icon: <BarChart3 className="text-brand-blue" /> },
  { title: TRANSLATIONS[lang].why3, icon: <ShieldCheck className="text-brand-purple" /> },
];

export const TRIANGLE_POINTS = (lang: string) => [
  { id: 'money', title: lang === 'ar' ? 'توفير مالي' : 'Cost Saving', icon: <Coins size={32} /> },
  { id: 'time', title: lang === 'ar' ? 'تحرير الوقت' : 'Time Freedom', icon: <Clock size={32} /> },
  { id: 'effort', title: lang === 'ar' ? 'أداء بلا إجهاد' : 'Effortless', icon: <BrainCircuit size={32} /> },
];
