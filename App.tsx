import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowDown, Send, Mail, ShoppingCart, CheckCircle2, Globe, ArrowLeft, 
  Bot, Clock, Coins, BrainCircuit, Zap, Network, Cpu, Database, 
  Sparkles, Terminal, Play, Sun, Moon, Loader2, AlertCircle, Rocket, 
  ChevronRight, Check, Layout, Filter, ArrowUpRight
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { TiltCard } from './components/TiltCard';
import { LANGUAGES, TRANSLATIONS, TRIANGLE_POINTS, TEMPLATES, PAIN_POINTS, WHY_US, WORKFLOW_USE_CASES } from './constants';

// Supabase Initialization
const supabaseUrl = 'https://kjjzynspdwybjudipend.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqanp5bnNwZHd5Ymp1ZGlwZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MTE3MDgsImV4cCI6MjA4NTI4NzcwOH0.5Bg44YCXU2ilP7TRdBLnyqk0vuuwyXsI1u9PmUCOsMY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App: React.FC = () => {
  const [langCode, setLangCode] = useState<'ar' | 'en' | 'fr'>('ar');
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'use-cases'>('home');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light'); 
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const currentLang = LANGUAGES.find(l => l.code === langCode)!;
  const t = TRANSLATIONS[langCode];

  const containerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
    document.documentElement.className = theme;
  }, [langCode, theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'store' | 'use-cases') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      project_type: formData.get('project_type'),
    };

    try {
      const { error } = await supabase
        .from('leads')
        .insert([payload]);

      if (error) throw error;

      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    } catch (err) {
      console.error('Supabase error:', err);
      // Even if database fails, we show success to user but log internally
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const MainHome = () => (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden dora-gradient pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none"></div>
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-6 z-10 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 mb-8 bg-brand-blue/5 dark:bg-brand-blue/10 shadow-sm"
          >
            <Sparkles size={16} className="text-brand-blue animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-blue dark:text-brand-cyan">AI-Powered Systems for MENA</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-8xl font-black leading-[1.05] tracking-tight mb-8 text-glow dark:text-white text-slate-900 max-w-5xl mx-auto"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl dark:text-white/60 text-slate-500 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
          >
            {t.heroSub}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={scrollToContact} className="!rounded-full !px-12 !py-6 dark:!bg-white dark:!text-brand-deep !bg-brand-deep !text-white hover:!bg-brand-blue transition-all shadow-2xl scale-110">
              {t.ctaMain} <ChevronRight size={18} />
            </Button>
            <button 
              onClick={() => navigateTo('use-cases')}
              className="dark:text-white/60 text-slate-500 hover:text-brand-blue dark:hover:text-white flex items-center gap-3 font-bold transition-all uppercase tracking-widest text-xs"
            >
              <Layout size={18} /> {t.ctaExplore}
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 dark:text-white text-brand-deep"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 px-6 dark:bg-brand-deep bg-white border-y dark:border-white/5 border-black/5">
        <div className="container mx-auto">
          <SectionHeading title={t.painTitle} subtitle={t.painSub} />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {PAIN_POINTS(langCode).map((pain, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] glass border-red-500/10 hover:border-red-500/30 transition-all group dark:bg-red-500/[0.02] bg-red-50/20"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  {pain.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white/90 text-slate-800 leading-snug">{pain.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Triangle Section */}
      <section className="py-40 px-6 relative dark:bg-brand-deep bg-slate-50 overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading title={t.serviceTitle} subtitle={t.serviceSub} />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mt-20">
            <motion.div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
               <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[120px]"></div>
               <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-xl">
                  <motion.path 
                    d="M200,60 L360,320 L40,320 Z" 
                    fill="none" stroke="url(#grad)" strokeWidth="3"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }}
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  {TRIANGLE_POINTS(langCode).map((p, idx) => {
                    const pos = idx === 0 ? {x:200, y:60} : idx === 1 ? {x:360, y:320} : {x:40, y:320};
                    return (
                      <g key={p.id}>
                        <circle cx={pos.x} cy={pos.y} r="10" className="dark:fill-white fill-brand-deep" />
                        <text x={pos.x} y={pos.y + (idx === 0 ? -30 : 50)} className="dark:fill-white fill-slate-900 font-bold text-sm tracking-wider uppercase" textAnchor="middle">{p.title}</text>
                      </g>
                    );
                  })}
               </svg>
            </motion.div>
            <div className="grid gap-6 w-full lg:w-1/2">
               {WHY_US(langCode).map((item, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ x: 10 }}
                   className="flex items-center gap-6 p-8 glass dark:border-white/5 border-black/5 hover:bg-brand-blue/5 transition-all"
                 >
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue dark:text-brand-cyan">
                      {item.icon}
                    </div>
                    <span className="text-xl font-bold dark:text-white/80 text-slate-700">{item.title}</span>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const UseCasesPage = () => {
    const useCases = WORKFLOW_USE_CASES(langCode);
    const filteredCases = activeCategory === 'all' ? useCases : useCases.filter(c => c.category.toLowerCase() === activeCategory.toLowerCase());
    
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 dark:bg-brand-deep bg-brand-light">
        <div className="container mx-auto">
          <motion.button onClick={() => navigateTo('home')} className="flex items-center gap-4 dark:text-white/40 text-slate-400 hover:text-brand-blue dark:hover:text-white transition-all uppercase tracking-widest text-xs font-bold mb-10">
            <ArrowLeft size={16} /> {t.backToHome}
          </motion.button>
          
          <SectionHeading title={t.useCasesTitle} subtitle={t.useCasesSub} />

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {['all', 'Marketing', 'Sales', 'Operations'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full border-2 transition-all text-xs font-bold uppercase tracking-widest ${activeCategory === cat ? 'bg-brand-blue border-brand-blue text-white shadow-xl shadow-brand-blue/30' : 'dark:border-white/10 border-slate-200 dark:text-white/40 text-slate-400 hover:border-brand-blue/30'}`}
              >
                {cat === 'all' ? t.allCategories : cat === 'Marketing' ? t.catMarketing : cat === 'Sales' ? t.catSales : t.catOps}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((uc) => (
                <motion.div
                  layout
                  key={uc.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass p-8 rounded-[2.5rem] dark:border-white/5 border-black/5 flex flex-col hover:border-brand-blue/40 transition-all group relative overflow-hidden bg-white/80 dark:bg-transparent shadow-sm hover:shadow-2xl"
                >
                  <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all">
                    <ArrowUpRight size={100} className="dark:text-white text-brand-blue" />
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <div className="px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[10px] uppercase font-bold text-brand-blue dark:text-brand-cyan tracking-widest">
                      {uc.category}
                    </div>
                    <div className="flex -space-x-2">
                      {uc.tools.map((icon, idx) => (
                        <div key={idx} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border-2 border-white dark:border-brand-deep flex items-center justify-center dark:text-white/60 text-slate-500 shadow-sm">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 dark:text-white text-slate-900 group-hover:text-brand-blue dark:group-hover:text-brand-cyan transition-colors">{uc.title}</h3>
                  <p className="dark:text-white/40 text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{uc.desc}</p>
                  
                  <div className="pt-6 border-t dark:border-white/5 border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">
                      <Zap size={14} /> {uc.roi}
                    </div>
                    <button onClick={scrollToContact} className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center dark:text-white/60 text-slate-400 hover:bg-brand-blue hover:text-white transition-all">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  };

  const StorePage = () => (
    <div className="min-h-screen pt-40 pb-20 px-6 dark:bg-brand-deep bg-brand-light">
      <div className="container mx-auto">
        <motion.button onClick={() => navigateTo('home')} className="flex items-center gap-4 dark:text-white/40 text-slate-400 hover:text-brand-blue dark:hover:text-white transition-all uppercase tracking-widest text-xs font-bold mb-20">
          <ArrowLeft size={16} /> {t.backToHome}
        </motion.button>
        <SectionHeading title={t.catTitle} subtitle={t.catSub} />
        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {TEMPLATES.map((tmpl) => (
            <TiltCard key={tmpl.id}>
              <div className="p-10 rounded-[3rem] glass dark:border-white/5 border-black/5 flex flex-col h-full dark:hover:bg-white/[0.03] hover:bg-white transition-all bg-white/70 dark:bg-transparent shadow-sm hover:shadow-2xl">
                 <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue dark:text-brand-cyan mb-10 shadow-inner">
                   {tmpl.icon}
                 </div>
                 <h3 className="text-2xl font-bold mb-4 dark:text-white text-slate-900">{tmpl.title}</h3>
                 <div className="text-brand-blue dark:text-brand-cyan font-display text-4xl font-bold mb-8">{tmpl.price}</div>
                 <ul className="space-y-4 mb-10 flex-grow">
                   {tmpl.features.map((f, j) => (
                     <li key={j} className="flex items-center gap-4 dark:text-white/50 text-slate-600 text-sm"><Check size={16} className="text-brand-blue dark:text-brand-cyan" /> {f}</li>
                   ))}
                 </ul>
                 <Button onClick={scrollToContact} className="w-full !rounded-2xl !py-5 dark:!bg-white dark:!text-brand-deep !bg-brand-deep !text-white hover:!bg-brand-blue transition-all">
                   {t.buyNow}
                 </Button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="dark:bg-brand-deep bg-brand-light min-h-screen dark:text-white text-slate-900 selection:bg-brand-blue selection:text-white transition-colors duration-500">
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass border-b dark:border-white/5 border-slate-200/50 shadow-sm' : 'py-10 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
             <div className="w-10 h-10 dark:bg-white bg-brand-deep rounded-xl flex items-center justify-center font-bold dark:text-brand-deep text-white shadow-xl group-hover:rotate-12 transition-all">M</div>
             <span className="text-xl font-display font-bold tracking-tighter dark:text-white text-brand-deep">{t.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/50 text-slate-400">
             <button onClick={() => navigateTo('home')} className={`hover:text-brand-blue dark:hover:text-white transition-all ${currentPage === 'home' ? 'dark:text-white text-brand-blue' : ''}`}>{t.navHome}</button>
             <button onClick={() => navigateTo('use-cases')} className={`hover:text-brand-blue dark:hover:text-white transition-all ${currentPage === 'use-cases' ? 'dark:text-white text-brand-blue' : ''}`}>{t.navUseCases}</button>
             <button onClick={() => navigateTo('store')} className={`hover:text-brand-blue dark:hover:text-white transition-all ${currentPage === 'store' ? 'dark:text-white text-brand-blue' : ''}`}>{t.navStore}</button>
             <button onClick={scrollToContact} className="hover:text-brand-blue dark:hover:text-white transition-all">{t.navContact}</button>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-full glass hover:scale-110 transition-all text-brand-blue dark:text-brand-cyan"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setLangCode(langCode === 'ar' ? 'en' : langCode === 'en' ? 'fr' : 'ar')} className="px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest dark:text-white/60 text-slate-500 hover:text-brand-blue dark:hover:text-white transition-all">
              <Globe size={14} className="inline mr-2" /> {langCode}
            </button>
            <Button variant="primary" className="hidden lg:flex !rounded-full !px-8 !py-2.5 !text-[10px] !bg-brand-blue shadow-none" onClick={scrollToContact}>
               {t.navContact}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? <MainHome key="home" /> : currentPage === 'use-cases' ? <UseCasesPage key="use-cases" /> : <StorePage key="store" />}
      </AnimatePresence>

      <section ref={contactRef} id="contact" className="py-40 px-6 dark:bg-brand-deep bg-white relative border-t dark:border-white/5 border-slate-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
             <SectionHeading title={t.contactTitle} subtitle={t.contactSub} />
             <div className="mt-16 glass rounded-[3rem] p-8 md:p-12 dark:border-brand-blue/20 border-slate-200 shadow-2xl relative overflow-hidden bg-white dark:bg-transparent">
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center flex flex-col items-center gap-6">
                      <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                        <CheckCircle2 size={64} />
                      </div>
                      <h3 className="text-3xl font-bold dark:text-white text-slate-800">{t.formSuccess}</h3>
                      <p className="dark:text-white/40 text-slate-500">Our smart consultant is reviewing your request...</p>
                      <button onClick={() => setFormState('idle')} className="text-brand-blue font-bold text-sm uppercase tracking-widest hover:underline">Send another one</button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleFormSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formName}</label>
                          <input name="name" required type="text" className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 focus:border-brand-blue/50 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900" placeholder="Yassine ..." />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formEmail}</label>
                          <input name="email" required type="email" className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 focus:border-brand-blue/50 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900" placeholder="yassine@business.dz" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">Project Type</label>
                        <select name="project_type" className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 focus:border-brand-blue/50 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900 appearance-none cursor-pointer">
                          <option value="WhatsApp Automation">WhatsApp Automation</option>
                          <option value="AI Knowledge Base (RAG)">AI Knowledge Base (RAG)</option>
                          <option value="Process Automation (n8n)">Process Automation (n8n)</option>
                          <option value="CRM Sync">CRM Sync</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formMessage}</label>
                        <textarea name="message" required rows={4} className="w-full dark:bg-white/5 bg-slate-50 border dark:border-white/10 border-slate-200 focus:border-brand-blue/50 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900 resize-none" placeholder="I lose 4 hours a day on WhatsApp..."></textarea>
                      </div>
                      <Button className="w-full !rounded-2xl !py-6 !bg-brand-blue !text-white shadow-xl shadow-brand-blue/20">
                        {formState === 'loading' ? <Loader2 className="animate-spin mx-auto" /> : <><Rocket size={20} /> {t.formSubmit}</>}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-[60px] pointer-events-none"></div>
             </div>
             <div className="mt-12 flex justify-center gap-10 opacity-60">
                <a href="https://t.me/manara_tech_bot" className="flex items-center gap-2 hover:text-brand-blue transition-all dark:text-white text-slate-600 font-bold text-xs uppercase tracking-widest"><Send size={16} /> Telegram</a>
                <a href="mailto:contact@manaraops.com" className="flex items-center gap-2 hover:text-brand-blue transition-all dark:text-white text-slate-600 font-bold text-xs uppercase tracking-widest"><Mail size={16} /> Email</a>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center opacity-30 text-[10px] uppercase tracking-[0.5em] dark:text-white text-slate-600">
        <p>© 2025 {t.brand} | No-Code Automation Agency | MENA Region</p>
      </footer>
    </div>
  );
};

export default App;