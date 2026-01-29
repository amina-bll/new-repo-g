import React from 'react';
import { 
  Cpu, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Workflow, 
  Network, 
  Database,
  MessageSquare,
  Layout,
  Coins,
  BrainCircuit,
  Bot,
  TrendingUp,
  Target,
  Share2,
  Lock,
  Search,
  Sparkles,
  Command,
  Activity
} from 'lucide-react';
import { NavItem, Service, Template, Language } from './types';

export const LANGUAGES: Language[] = [
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
];

export const TRANSLATIONS = {
  ar: {
    brand: 'منارة تك',
    heroTitle: 'أتمتة ذكية.. لنمو يتجاوز التوقعات',
    heroSub: 'نحن لا نبني أكواداً فحسب، بل نصمم أنظمة توليدية تمنحك السيادة الكاملة على وقتك وجهدك عبر n8n.',
    ctaMain: 'ابدأ الأتمتة الآن',
    navHome: 'الرئيسية',
    navStore: 'المتجر',
    navContact: 'تواصل معنا',
    triangleTitle: 'معادلة السيادة التشغيلية',
    triangleSub: 'ثلاث ركائز لا غنى عنها لأي مؤسسة تطمح للريادة في العصر الرقمي.',
    tMoney: 'توفير مالي',
    tTime: 'تحرير الوقت',
    tEffort: 'أداء بلا إجهاد',
    storeTitle: 'النماذج الجاهزة',
    storeSub: 'قوالب احترافية تعتمد على n8n، تم فحصها وتجربتها لتعمل فوراً في بيئة عملك.',
    priceFrom: 'فقط بـ',
    buyNow: 'امتلك الحل الآن',
    synergyTitle: 'مخطط التآزر الذكي',
    synergySub: 'شاهد كيف نقوم بربط أدواتك المشتتة لتصبح "عقلاً واحداً" يدير عملك آلياً باستخدام n8n.',
    problemSlow: 'بطء الاستجابة للعملاء',
    problemManual: 'إدخال البيانات يدوياً',
    problemScatter: 'تشتت البيانات بين التطبيقات',
    solutionTitle: 'هندسة الحل:',
    contactTitle: 'دعنا نصمم نجاحك',
    contactSub: 'استشارة فنية مجانية لمدة 15 دقيقة قد تغير مسار عملك بالكامل.',
    telegram: 'تليجرام',
    email: 'بريد إلكتروني',
    backToHome: 'الرئيسية',
    roiTitle: 'نتائج نضمنها لك',
    formName: 'الاسم الكامل',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'تفاصيل مشروعك',
    formSubmit: 'إرسال الطلب',
    formSuccess: 'تم الإرسال بنجاح! سنتواصل معك قريباً.',
    formProject: 'نوع المشروع'
  },
  en: {
    brand: 'Manara Tech',
    heroTitle: 'Smart Automation, Growth Beyond Expectations',
    heroSub: 'We don’t just write code; we design generative systems that grant you absolute sovereignty over your time via n8n.',
    ctaMain: 'Start Automating',
    navHome: 'Home',
    navStore: 'Store',
    navContact: 'Contact Us',
    triangleTitle: 'Operational Sovereignty Equation',
    triangleSub: 'Three essential pillars for any organization aiming for leadership in the digital age.',
    tMoney: 'Cost Efficiency',
    tTime: 'Time Freedom',
    tEffort: 'Effortless Performance',
    storeTitle: 'Ready-to-Deploy Templates',
    storeSub: 'Professional n8n templates, tested and ready to work in your environment.',
    priceFrom: 'Only',
    buyNow: 'Get Solution Now',
    synergyTitle: 'The Smart Synergy Map',
    synergySub: 'See how we connect your scattered tools to become a "Single Brain" using n8n workflows.',
    problemSlow: 'Slow Customer Response',
    problemManual: 'Manual Data Entry',
    problemScatter: 'Data Scattered Across Apps',
    solutionTitle: 'Solution Engineering:',
    contactTitle: 'Let’s Design Your Success',
    contactSub: 'A free 15-minute consultation could change your entire business path.',
    telegram: 'Telegram',
    email: 'Email',
    backToHome: 'Back Home',
    roiTitle: 'Guaranteed Results',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formMessage: 'Project Details',
    formSubmit: 'Send Request',
    formSuccess: 'Sent successfully! We will contact you soon.',
    formProject: 'Project Type'
  },
  fr: {
    brand: 'Manara Tech',
    heroTitle: 'Croissance Exponentielle : L\'Automatisation Intelligente',
    heroSub: 'Nous ne nous contentons pas d’écrire du code ; nous concevons des systèmes génératifs via n8n.',
    ctaMain: 'Commencer',
    navHome: 'Accueil',
    navStore: 'Boutique',
    navContact: 'Contactez-nous',
    triangleTitle: "Équation de Souveraineté Opérationnelle",
    triangleSub: 'Trois piliers essentiels pour toute organisation visant le leadership à l’ère numérique.',
    tMoney: 'Économie de Coûts',
    tTime: 'Liberté de Temps',
    tEffort: 'Performance Sans Effort',
    storeTitle: 'Modèles Prêts à l’Emploi',
    storeSub: 'Modèles n8n professionnels, testés et prêts à l’emploi.',
    priceFrom: 'Seulement',
    buyNow: 'Obtenir la Solution',
    synergyTitle: 'Carte de Synergie Intelligente',
    synergySub: 'Voyez comment nous connectons vos outils avec n8n pour créer un "Cerveau Unique".',
    problemSlow: 'Réponse Client Lente',
    problemManual: 'Saisie de Données Manuelle',
    problemScatter: 'Données Éparpillées',
    solutionTitle: 'Ingénierie du Solution :',
    contactTitle: 'Concevons Votre Succès',
    contactSub: 'Une consultation gratuite de 15 minutes pourrait changer votre trajectoire.',
    telegram: 'Telegram',
    email: 'Email',
    backToHome: 'Accueil',
    roiTitle: 'Résultats Garantis',
    formName: 'Nom complet',
    formEmail: 'E-mail',
    formMessage: 'Détails du projet',
    formSubmit: 'Envoyer la demande',
    formSuccess: 'Envoyé avec succès ! Nous vous contacterons bientôt.',
    formProject: 'Type de projet'
  }
};

export const TRIANGLE_POINTS = (lang: string) => [
  { id: 'money', title: TRANSLATIONS[lang].tMoney, icon: <Coins size={32} /> },
  { id: 'time', title: TRANSLATIONS[lang].tTime, icon: <Clock size={32} /> },
  { id: 'effort', title: TRANSLATIONS[lang].tEffort, icon: <BrainCircuit size={32} /> },
];

export const TEMPLATES: Template[] = [
  {
    id: 'rag-light',
    title: 'نظام RAG ذكي (قاعدة معرفة)',
    price: '$149',
    features: ['بحث ذكي في ملفات PDF', 'واجهة دردشة سريعة', 'سهل التنصيب عبر n8n'],
    icon: <Database size={40} />
  },
  {
    id: 'chatbot-basic',
    title: 'بوت خدمة عملاء آلي',
    price: '$99',
    features: ['ردود سريعة ذكية', 'ربط مع Telegram', 'لوحة تحكم بسيطة'],
    icon: <MessageSquare size={40} />
  },
  {
    id: 'workflow-pro',
    title: 'أتمتة سير العمل (n8n/Cloud)',
    price: '$199',
    features: ['ربط 10 تطبيقات أساسية', 'تقارير تلقائية للمبيعات', 'تنبيهات فورية'],
    icon: <Workflow size={40} />
  }
];

export const ROI_STATS = [
  { label: 'ساعة توفير شهرياً', value: '180+', icon: <Clock size={32} className="text-brand-cyan" /> },
  { label: 'زيادة في الإنتاجية', value: '65%', icon: <TrendingUp size={32} className="text-brand-blue" /> },
  { label: 'تقليل الأخطاء البشرية', value: '94%', icon: <Target size={32} className="text-brand-purple" /> },
];

export const SYNERGY_SCENARIOS = (lang: string) => [
  { 
    id: 'slow', 
    title: TRANSLATIONS[lang].problemSlow, 
    tools: ['WhatsApp', 'OpenAI', 'n8n'],
    desc: lang === 'ar' ? 'الرد الفوري على العميل + تسجيل اهتماماته في ملف البيانات آلياً.' : 'Instant response + auto-logging customer interests.'
  },
  { 
    id: 'manual', 
    title: TRANSLATIONS[lang].problemManual, 
    tools: ['Email', 'n8n', 'CRM'],
    desc: lang === 'ar' ? 'تحويل رسائل البريد إلى صفقات في الـ CRM دون تدخل بشري.' : 'Turning emails into CRM deals automatically.'
  },
  { 
    id: 'scatter', 
    title: TRANSLATIONS[lang].problemScatter, 
    tools: ['Cloud', 'n8n Agent', 'Reports'],
    desc: lang === 'ar' ? 'تجميع البيانات من كل مكان وإنشاء تقرير ذكاء أعمال يومي.' : 'Aggregating data and auto-generating daily BI reports.'
  }
];