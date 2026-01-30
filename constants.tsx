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
    contactSub: 'أجب على 3 أسئلة وسيقوم نظامنا بتصميم مسار الأتمتة الأنسب لمشروعك.',
    formName: 'اسمك الكريم',
    formEmail: 'بريد العمل',
    formMessage: 'ما هو أكبر عائق يمنع عملك من النمو الآلي؟',
    formSubmit: 'إرسال للمستشار',
    backToHome: 'العودة للرئيسية',
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
    contactSub: 'Answer 3 questions and our system will design your ideal automation path.',
    formName: 'Full Name',
    formEmail: 'Business Email',
    formMessage: 'What is your biggest bottleneck right now?',
    formSubmit: 'Send to Consultant',
    backToHome: 'Back to Home',
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
    contactSub: 'Répondez à 3 questions pour obtenir votre plan d\'automation.',
    formName: 'Nom Complet',
    formEmail: 'Email Pro',
    formMessage: 'Quel est votre plus gros blocage ?',
    formSubmit: 'Envoyer au Consultant',
    backToHome: 'Retour à l\'accueil',
  }
};

export const PAIN_POINTS = (lang: string) => [
  { 
    title: lang === 'ar' ? 'الرد اليدوي يقتل المبيعات' : 'Manual Response Kills Sales', 
    desc: lang === 'ar' ? 'كل ثانية تأخير في الرد تعني فقدان عميل محتمل. أنظمتنا ترد في أقل من 3 ثوانٍ.' : 'Every second of delay is a lost lead. Our systems respond in under 3 seconds.',
    icon: <Clock className="text-red-500" /> 
  },
  { 
    title: lang === 'ar' ? 'بيانات مشتتة وفقدان أرباح' : 'Scattered Data & Profit Loss', 
    desc: lang === 'ar' ? 'فقدان المعلومات بين المنصات يمنعك من رؤية الحقيقة. نحن نربط كل شيء في لوحة تحكم واحدة.' : 'Losing info between platforms blinds you. We sync everything into one dashboard.',
    icon: <AlertCircle className="text-red-500" /> 
  },
  { 
    title: lang === 'ar' ? 'بطء الاستجابة يطرد العملاء' : 'Slow Response Drives Away Clients', 
    desc: lang === 'ar' ? 'العميل الحديث لا ينتظر. إذا لم تكن موجوداً الآن، سيذهب لمنافسك فوراً.' : 'Modern clients don\'t wait. If you aren\'t there now, they\'ll go to your competitor.',
    icon: <Users className="text-red-500" /> 
  },
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