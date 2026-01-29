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
  Search
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
    heroSub: 'نحن لا نبني أكواداً فحسب، بل نصمم الأنظمة التي تمنحك الحرية والسيادة على وقتك وجهدك.',
    ctaMain: 'اكتشف مستقبلك الرقمي',
    navHome: 'الرئيسية',
    navStore: 'متجر الحلول الجاهزة',
    navContact: 'تواصل مباشر',
    triangleTitle: 'معادلة السيادة التشغيلية',
    triangleSub: 'ثلاث ركائز لا غنى عنها لأي مؤسسة تطمح للريادة في العصر الرقمي.',
    tMoney: 'توفير مالي ذكي',
    tTime: 'تحرير وقتك الثمين',
    tEffort: 'أداء بلا إجهاد',
    storeTitle: 'حلول جاهزة للانطلاق',
    storeSub: 'قوالب احترافية بأسعار منافسة، تم فحصها وتجربتها لتعمل فوراً في بيئة عملك.',
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
    telegram: 'تحدث عبر تليجرام',
    email: 'راسلنا بريدياً',
    backToHome: 'الرئيسية',
    roiTitle: 'نتائج نضمنها لك'
  },
  en: {
    brand: 'Manara Tech',
    heroTitle: 'Smart Automation for Limitless Growth',
    heroSub: 'We don’t just write code; we design systems that grant you freedom and sovereignty over your time.',
    ctaMain: 'Discover Your Digital Future',
    navHome: 'Home',
    navStore: 'Template Store',
    navContact: 'Direct Contact',
    triangleTitle: 'Operational Sovereignty Equation',
    triangleSub: 'Three essential pillars for any organization aiming for leadership in the digital age.',
    tMoney: 'Smart Cost Saving',
    tTime: 'Free Your Precious Time',
    tEffort: 'Stress-Free Performance',
    storeTitle: 'Ready-to-Deploy Solutions',
    storeSub: 'Professional templates at competitive prices, tested and ready to work in your environment.',
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
    telegram: 'Chat on Telegram',
    email: 'Email Us',
    backToHome: 'Back Home',
    roiTitle: 'Guaranteed Results'
  },
  fr: {
    brand: 'Manara Tech',
    heroTitle: 'Automatisation Intelligente pour une Croissance Sans Limite',
    heroSub: 'Nous ne nous contentons pas d’écrire du code ; nous concevons des systèmes qui vous libèrent.',
    ctaMain: 'Découvrez Votre Futur Numérique',
    navHome: 'Accueil',
    navStore: 'Boutique de Modèles',
    navContact: 'Contact Direct',
    triangleTitle: "Équation de Souveraineté Opérationnelle",
    triangleSub: 'Trois piliers essentiels pour toute organisation visant le leadership à l’ère numérique.',
    tMoney: 'Économie Intelligente',
    tTime: 'Libérez Votre Temps',
    tEffort: 'Performance Sans Stress',
    storeTitle: 'Solutions Prêtes à l’Emploi',
    storeSub: 'Modèles professionnels à des prix compétitifs, testés et prêts à l’emploi.',
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
    telegram: 'Chat sur Telegram',
    email: 'Écrivez-nous',
    backToHome: 'Accueil',
    roiTitle: 'Résultats Garantis'
  }
};

export const TRIANGLE_POINTS = (lang: string) => [
  { id: 'money', title: TRANSLATIONS[lang].tMoney, icon: <Coins className="w-8 h-8" /> },
  { id: 'time', title: TRANSLATIONS[lang].tTime, icon: <Clock className="w-8 h-8" /> },
  { id: 'effort', title: TRANSLATIONS[lang].tEffort, icon: <BrainCircuit className="w-8 h-8" /> },
];

export const TEMPLATES: Template[] = [
  {
    id: 'rag-light',
    title: 'نظام RAG ذكي (قاعدة معرفة)',
    price: '149$',
    features: ['بحث ذكي في ملفات PDF', 'واجهة دردشة سريعة', 'سهل التنصيب'],
    icon: <Database className="w-8 h-8" />
  },
  {
    id: 'chatbot-basic',
    title: 'بوت خدمة عملاء آلي',
    price: '99$',
    features: ['ردود سريعة ذكية', 'ربط مع Telegram', 'لوحة تحكم بسيطة'],
    icon: <MessageSquare className="w-8 h-8" />
  },
  {
    id: 'workflow-pro',
    title: 'أتمتة سير العمل (n8n/Zapier)',
    price: '199$',
    features: ['ربط 5 تطبيقات أساسية', 'تقارير تلقائية للمبيعات', 'تنبيهات فورية'],
    icon: <Workflow className="w-8 h-8" />
  }
];

export const ROI_STATS = [
  { label: 'ساعة توفير شهرياً', value: '180+', icon: <Clock className="text-cyan-500" /> },
  { label: 'زيادة في الإنتاجية', value: '65%', icon: <TrendingUp className="text-cyan-500" /> },
  { label: 'تقليل الأخطاء البشرية', value: '94%', icon: <Target className="text-cyan-500" /> },
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