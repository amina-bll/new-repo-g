import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Sparkles, Sun, Moon, ChevronRight, Check, ArrowUpRight, ArrowDown, 
  Layers, Shield, Activity, Fingerprint, Zap
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { TiltCard } from './components/TiltCard';
import { LANGUAGES, TRANSLATIONS, TEMPLATES, PAIN_POINTS, WORKFLOW_USE_CASES } from './constants';

const supabaseUrl = 'https://kjjzynspdwybjudipend.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqanp5bnNwZHd5Ymp1ZGlwZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MTE3MDgsImV4cCI6MjA4NTI4NzcwOH0.5Bg44YCXU2ilP7TRdBLnyqk0vuuwyXsI1u9PmUCOsMY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App: React.FC = () => {
  const [langCode, setLangCode] = useState<'ar' | 'en' | 'fr'>('ar');
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'use-cases'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light'); 
  
  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const currentLang = LANGUAGES.find(l => l.code === langCode)!;
  const t = TRANSLATIONS[langCode];
  const contactRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.className = theme;
  }, [langCode, theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'store' | 'use-cases') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          project_type: currentPage 
        }]);

      if (error) throw error;
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const Hero = () => (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_120s_linear_infinite]">
          <path fill="#2563EB" d="M45.7,-78.2C58.9,-71.4,69.1,-58.5,76.5,-44.6C83.9,-30.7,88.5,-15.3,87.7,-0.5C86.9,14.4,80.7,28.7,72.4,41.4C64,54.1,53.5,65.2,40.7,72.6C27.9,80.1,13.9,83.9,-0.6,85C-15.1,86.1,-30.2,84.4,-43.5,77.5C-56.7,70.5,-68.1,58.3,-75.9,44.4C-83.7,30.5,-87.9,15.2,-87.4,0.3C-86.8,-14.7,-81.5,-29.3,-72.9,-42C-64.3,-54.6,-52.3,-65.3,-38.8,-71.9C-25.2,-78.4,-12.6,-80.9,1.5,-83.4C15.6,-85.9,32.5,-85.1,45.7,-78.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto text-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-10 border border-blue-500/10 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">Premier AI Automation Agency</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-[4.2rem] font-black leading-[1.1] tracking-tight mb-12 dark:text-white text-slate-900"
        >
          {t.heroTitle}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-2xl dark:text-white/40 text-slate-500 max-w-4xl mx-auto mb-16 font-light leading-relaxed px-4"
        >
          {t.heroSub}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Button onClick={scrollToContact} className="!px-16 !py-7 !text-lg !rounded-2xl shadow-xl shadow-blue-500/20">
            {t.ctaMain}
          </Button>
          <button 
            onClick={() => navigateTo('use-cases')}
            className="px-10 py-6 rounded-2xl glass border border-slate-200 dark:border-white/10 dark:text-white text-slate-800 font-black text-[10px] uppercase tracking-widest hover:bg-white dark:hover:bg-white/5 transition-all"
          >
            {t.ctaExplore}
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );

  const BentoFeatures = () => (
    <section className="py-40 px-6">
      <div className="container mx-auto">
        <SectionHeading title={t.painTitle} subtitle={t.painSub} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {PAIN_POINTS(langCode).map((pain, i) => (
            <TiltCard key={i}>
              <div className="bento-card p-12 rounded-[3.5rem] glass bg-white/40 dark:bg-white/[0.01] border-slate-200/50 dark:border-white/5 group h-full">
                <div className="spotlight"></div>
                <div className="w-16 h-16 bg-blue-500/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {pain.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 leading-tight">{pain.title}</h3>
                <p className="text-slate-500 dark:text-white/40 font-medium text-sm leading-relaxed">
                  {pain.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );

  const UseCasesGrid = () => (
    <section className="py-40 px-6 dark:bg-slate-900/20 bg-slate-50/50 rounded-[4rem] mx-4 sm:mx-10">
      <div className="container mx-auto">
        <SectionHeading title={t.useCasesTitle} subtitle={t.useCasesSub} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {WORKFLOW_USE_CASES(langCode).map((uc, i) => (
            <motion.div 
              key={uc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card group p-10 rounded-[3rem] glass dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] border-slate-200/50 dark:border-white/5"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-[9px] font-black uppercase tracking-widest">{uc.category}</span>
                <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:text-brand-blue transition-all" size={18} />
              </div>
              <h4 className="text-xl font-black mb-4 leading-tight">{uc.title}</h4>
              <p className="dark:text-white/40 text-slate-500 mb-8 text-xs font-medium leading-relaxed h-12 overflow-hidden">{uc.desc}</p>
              <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                   {uc.tools.map((tool, idx) => <span key={idx} className="opacity-30">{tool}</span>)}
                </div>
                <div className="text-green-500 flex items-center gap-2 font-black text-[9px] uppercase tracking-widest">
                  <div className="w-1 h-1 rounded-full bg-green-500"></div>
                  {uc.roi}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4 translate-y-0' : 'py-10'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass px-8 py-4 rounded-3xl flex items-center justify-between border-slate-200/50 dark:border-white/10 shadow-2xl shadow-black/5`}>
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
             <div className="w-10 h-10 bg-brand-deep dark:bg-white rounded-xl flex items-center justify-center font-black text-white dark:text-brand-deep group-hover:scale-110 transition-transform">M</div>
             <span className="text-xl font-black tracking-tighter hidden sm:block">{t.brand}</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
             <button onClick={() => navigateTo('home')} className="hover:text-brand-blue transition-colors hover:opacity-100">{t.navHome}</button>
             <button onClick={() => navigateTo('use-cases')} className="hover:text-brand-blue transition-colors hover:opacity-100">{t.navUseCases}</button>
             <button onClick={() => navigateTo('store')} className="hover:text-brand-blue transition-colors hover:opacity-100">{t.navStore}</button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-3 rounded-xl glass hover:bg-white dark:hover:bg-white/10 transition-colors">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setLangCode(langCode === 'ar' ? 'en' : 'ar')} className="px-4 py-2 glass rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-brand-blue transition-colors">
              {langCode.toUpperCase()}
            </button>
            <Button variant="primary" className="!rounded-xl !px-6 !py-3 !text-[10px] hidden sm:flex" onClick={scrollToContact}>{t.navContact}</Button>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand-blue z-[200] origin-right" style={{ scaleX }} />
      <Header />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Hero />
              <BentoFeatures />
              <UseCasesGrid />
            </motion.div>
          )}
          
          {currentPage === 'use-cases' && (
            <motion.div key="use-cases" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pt-48 pb-32 px-6 container mx-auto">
              <SectionHeading title={t.useCasesTitle} subtitle={t.useCasesSub} />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                {WORKFLOW_USE_CASES(langCode).map((uc) => (
                  <div key={uc.id} className="bento-card p-12 rounded-[3.5rem] glass dark:bg-white/[0.02]">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-blue mb-6 block">{uc.category}</span>
                    <h4 className="text-2xl font-black mb-6 leading-tight">{uc.title}</h4>
                    <p className="text-slate-500 dark:text-white/40 mb-10 text-sm leading-relaxed">{uc.desc}</p>
                    <div className="text-green-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <Zap size={14} /> {uc.roi}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20 text-center">
                <Button onClick={() => navigateTo('home')} variant="outline">{t.backToHome}</Button>
              </div>
            </motion.div>
          )}

          {currentPage === 'store' && (
            <motion.div key="store" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pt-48 pb-32 px-6 container mx-auto">
              <SectionHeading title={t.catTitle} subtitle={t.catSub} />
              <div className="grid md:grid-cols-3 gap-10 mt-24">
                {TEMPLATES.map((tmpl) => (
                  <div key={tmpl.id} className="bento-card p-14 rounded-[4rem] glass text-center border-slate-200 dark:border-white/5">
                    <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mb-10 mx-auto">{tmpl.icon}</div>
                    <h3 className="text-3xl font-black mb-6 leading-tight">{tmpl.title}</h3>
                    <div className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">{tmpl.price}</div>
                    <ul className="text-left space-y-5 mb-12 opacity-50 font-medium text-sm">
                      {tmpl.features.map((f, i) => <li key={i} className="flex items-center gap-3"><Check size={16} className="text-brand-blue" /> {f}</li>)}
                    </ul>
                    <Button className="w-full !rounded-2xl !py-7">تفعيل النظام الآن</Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section ref={contactRef} className="py-56 px-6 relative border-t border-slate-100 dark:border-white/5">
          <div className="container mx-auto max-w-5xl">
            <SectionHeading title={t.contactTitle} subtitle={t.contactSub} />
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 glass rounded-[4rem] p-12 md:p-20 shadow-3xl overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              {formStatus === 'success' ? (
                <div className="text-center py-20 relative z-10">
                  <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
                    <Check size={48} />
                  </div>
                  <h3 className="text-3xl font-black mb-4">{t.successMsg}</h3>
                  <Button onClick={() => setFormStatus('idle')} variant="outline" className="mt-8">إرسال رسالة أخرى</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 px-4">{t.formName}</label>
                      <input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-brand-blue transition-all" 
                        placeholder="..." 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 px-4">{t.formEmail}</label>
                      <input 
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-brand-blue transition-all" 
                        placeholder="business@email.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 px-4">{t.formMessage}</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4} 
                      className="w-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-brand-blue transition-all resize-none" 
                      placeholder="..."
                    ></textarea>
                  </div>
                  
                  {formStatus === 'error' && <p className="text-red-500 font-bold text-center">{t.errorMsg}</p>}
                  
                  <Button 
                    className={`w-full !py-8 !rounded-3xl !text-xl shadow-2xl shadow-blue-500/30 ${isSubmitting ? 'opacity-50' : ''}`}
                    onClick={(e) => {}} // Form handled by onSubmit
                  >
                    {isSubmitting ? '...' : t.formSubmit}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-24 text-center border-t border-slate-100 dark:border-white/5 bg-slate-50/30 dark:bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 opacity-40">
            <span className="text-2xl font-black tracking-tighter">Manara Ops</span>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em]">
              <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Security</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Contact Support</a>
            </div>
          </div>
          <div className="relative inline-block px-10 py-2 border border-slate-200 dark:border-white/5 rounded-full mb-8">
            <span className="text-[8px] font-black uppercase tracking-[1em] opacity-30">Designed for the Next Epoch</span>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[1.5em] opacity-10">© 2025 Manara Ops | Intelligent Automation Agency</p>
        </div>
      </footer>
    </div>
  );
};

export default App;