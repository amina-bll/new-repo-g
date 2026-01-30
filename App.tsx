
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Sparkles, Sun, Moon, ChevronRight, Check, ArrowUpRight, ArrowDown, 
  Layers, Shield, Activity, Fingerprint, Zap
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { LANGUAGES, TRANSLATIONS, TEMPLATES, PAIN_POINTS, WORKFLOW_USE_CASES } from './constants';

const supabaseUrl = 'https://kjjzynspdwybjudipend.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqanp5bnNwZHd5Ymp1ZGlwZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MTE3MDgsImV4cCI6MjA4NTI4NzcwOH0.5Bg44YCXU2ilP7TRdBLnyqk0vuuwyXsI1u9PmUCOsMY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App: React.FC = () => {
  const [langCode, setLangCode] = useState<'ar' | 'en' | 'fr'>('ar');
  const [currentPage, setCurrentPage] = useState<'home' | 'store' | 'use-cases'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light'); 
  
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

  const Hero = () => (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <path fill="#2563EB" d="M45.7,-78.2C58.9,-71.4,69.1,-58.5,76.5,-44.6C83.9,-30.7,88.5,-15.3,87.7,-0.5C86.9,14.4,80.7,28.7,72.4,41.4C64,54.1,53.5,65.2,40.7,72.6C27.9,80.1,13.9,83.9,-0.6,85C-15.1,86.1,-30.2,84.4,-43.5,77.5C-56.7,70.5,-68.1,58.3,-75.9,44.4C-83.7,30.5,-87.9,15.2,-87.4,0.3C-86.8,-14.7,-81.5,-29.3,-72.9,-42C-64.3,-54.6,-52.3,-65.3,-38.8,-71.9C-25.2,-78.4,-12.6,-80.9,1.5,-83.4C15.6,-85.9,32.5,-85.1,45.7,-78.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto text-center z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass mb-12 border border-blue-500/20 shadow-xl shadow-blue-500/5"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">Future Ready Operations</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.82] tracking-tighter mb-14 dark:text-white text-slate-900"
        >
          {t.heroTitle}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl dark:text-white/40 text-slate-500 max-w-4xl mx-auto mb-20 font-light leading-relaxed px-4"
        >
          {t.heroSub}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button onClick={scrollToContact} className="!px-20 !py-9 !text-xl !rounded-[2.5rem] shadow-3xl shadow-blue-500/40 hover:scale-105 active:scale-95">
            {t.ctaMain}
          </Button>
          <button 
            onClick={() => navigateTo('use-cases')}
            className="px-14 py-8 rounded-[2.5rem] glass border border-slate-200 dark:border-white/10 dark:text-white text-slate-800 font-black text-xs uppercase tracking-[0.2em] hover:bg-white dark:hover:bg-white/5 transition-all"
          >
            {t.ctaExplore}
          </button>
        </motion.div>

        {/* Partners / Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="mt-32 flex flex-wrap justify-center items-center gap-12 grayscale"
        >
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><Layers size={24}/> LAYER</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><Shield size={24}/> SAFEWAY</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><Activity size={24}/> QUANTUM</div>
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter"><Fingerprint size={24}/> SOVEREIGN</div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ArrowDown size={28} />
      </motion.div>
    </section>
  );

  const BentoFeatures = () => (
    <section className="py-48 px-6">
      <div className="container mx-auto">
        <SectionHeading title={t.painTitle} subtitle={t.painSub} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24">
          {PAIN_POINTS(langCode).map((pain, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bento-card p-14 rounded-[4rem] glass bg-white/40 dark:bg-white/[0.02] border-slate-200/50 dark:border-white/5 group"
            >
              <div className="w-20 h-20 bg-red-500/10 rounded-[2rem] flex items-center justify-center mb-10 text-red-500 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-4xl font-black mb-6 leading-[1.1]">{pain.title}</h3>
              <p className="text-slate-500 dark:text-white/40 font-medium text-lg leading-relaxed">تسبب هذه الفجوة خسارة بنسبة 30% من الأرباح المحتملة يومياً بسبب غياب الأنظمة الذكية.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const UseCasesGrid = () => (
    <section className="py-48 px-6 dark:bg-slate-900/40 bg-slate-50/80 rounded-[5rem] mx-4 sm:mx-10">
      <div className="container mx-auto">
        <SectionHeading title={t.useCasesTitle} subtitle={t.useCasesSub} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {WORKFLOW_USE_CASES(langCode).map((uc, i) => (
            <motion.div 
              key={uc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bento-card group p-12 rounded-[4rem] glass dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] border-slate-200/50 dark:border-white/5"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="px-5 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-widest">{uc.category}</span>
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h4 className="text-3xl font-black mb-8 leading-tight">{uc.title}</h4>
              <p className="dark:text-white/40 text-slate-500 mb-12 text-lg font-medium leading-relaxed">{uc.desc}</p>
              <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                <div className="text-green-500 flex items-center gap-3 font-black text-xs uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  {uc.roi}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-24">
          <button onClick={() => navigateTo('use-cases')} className="text-brand-blue font-black uppercase tracking-[0.5em] text-[10px] hover:tracking-[0.7em] transition-all flex items-center gap-4 mx-auto group">
             VIEW ALL SUCCESS STORIES <ChevronRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </button>
        </div>
      </div>
    </section>
  );

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4 translate-y-0' : 'py-10'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass px-10 py-5 rounded-[2.5rem] flex items-center justify-between border-slate-200/50 dark:border-white/10 shadow-3xl shadow-black/5`}>
          <div className="flex items-center gap-5 cursor-pointer group" onClick={() => navigateTo('home')}>
             <div className="w-12 h-12 bg-brand-deep dark:bg-white rounded-2xl flex items-center justify-center font-black text-white dark:text-brand-deep group-hover:rotate-12 transition-transform">M</div>
             <span className="text-2xl font-black tracking-tighter hidden sm:block">{t.brand}</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
             <button onClick={() => navigateTo('home')} className="hover:text-brand-blue transition-colors hover:opacity-100">{t.navHome}</button>
             <button onClick={() => navigateTo('use-cases')} className="hover:text-brand-blue transition-colors hover:opacity-100">{t.navUseCases}</button>
             <button onClick={() => navigateTo('store')} className="hover:text-brand-blue transition-colors hover:opacity-100">{t.navStore}</button>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-3.5 rounded-2xl glass hover:bg-white dark:hover:bg-white/10 transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setLangCode(langCode === 'ar' ? 'en' : 'ar')} className="px-5 py-3 glass rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-brand-blue transition-colors">
              {langCode === 'ar' ? 'EN' : 'AR'}
            </button>
            <Button variant="primary" className="!rounded-2xl !px-8 !py-4 !text-[10px] hidden sm:flex" onClick={scrollToContact}>{t.navContact}</Button>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-brand-blue z-[200] origin-right" style={{ scaleX }} />
      <Header />
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Hero />
              <BentoFeatures />
              <UseCasesGrid />
            </motion.div>
          )}
          
          {currentPage === 'use-cases' && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pt-56 pb-48 px-6 container mx-auto">
              <SectionHeading title={t.useCasesTitle} subtitle={t.useCasesSub} />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-28">
                {WORKFLOW_USE_CASES(langCode).map((uc) => (
                  <div key={uc.id} className="bento-card p-14 rounded-[4rem] glass dark:bg-white/[0.02]">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-8 block">{uc.category}</span>
                    <h4 className="text-4xl font-black mb-6 leading-tight">{uc.title}</h4>
                    <p className="text-slate-500 dark:text-white/40 mb-12 text-lg leading-relaxed">{uc.desc}</p>
                    <div className="text-green-500 font-black text-xs uppercase tracking-widest flex items-center gap-3">
                      <Zap size={16} /> {uc.roi}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-28 text-center">
                <Button onClick={() => navigateTo('home')} variant="outline">Back to Reality</Button>
              </div>
            </motion.div>
          )}

          {currentPage === 'store' && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pt-56 pb-48 px-6 container mx-auto">
              <SectionHeading title={t.catTitle} subtitle={t.catSub} />
              <div className="grid md:grid-cols-3 gap-12 mt-28">
                {TEMPLATES.map((tmpl) => (
                  <div key={tmpl.id} className="bento-card p-16 rounded-[5rem] glass text-center border-slate-200 dark:border-white/5">
                    <div className="w-24 h-24 bg-brand-blue/10 rounded-[2.5rem] flex items-center justify-center text-brand-blue mb-12 mx-auto shadow-2xl shadow-blue-500/10">{tmpl.icon}</div>
                    <h3 className="text-4xl font-black mb-6 leading-tight">{tmpl.title}</h3>
                    <div className="text-5xl font-black text-brand-blue mb-14 tracking-tighter">{tmpl.price}</div>
                    <ul className="text-left space-y-6 mb-14 opacity-50 font-medium text-lg">
                      {tmpl.features.map((f, i) => <li key={i} className="flex items-center gap-4"><Check size={20} className="text-brand-blue shrink-0" /> {f}</li>)}
                    </ul>
                    <Button className="w-full !rounded-[2rem] !py-8">Own This System</Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section ref={contactRef} className="py-60 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <SectionHeading title={t.contactTitle} subtitle={t.contactSub} />
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-28 glass rounded-[5rem] p-12 md:p-24 shadow-4xl relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-blue/10 blur-[100px] rounded-full"></div>
              <form className="space-y-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-5">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 px-4">{t.formName}</label>
                    <input className="w-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-[2rem] px-10 py-7 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all text-xl" placeholder="John Doe" />
                  </div>
                  <div className="space-y-5">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 px-4">{t.formEmail}</label>
                    <input className="w-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-[2rem] px-10 py-7 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all text-xl" placeholder="business@email.com" />
                  </div>
                </div>
                <div className="space-y-5">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 px-4">{t.formMessage}</label>
                  <textarea rows={5} className="w-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-[2rem] px-10 py-7 outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all resize-none text-xl"></textarea>
                </div>
                <Button className="w-full !py-10 !rounded-[2.5rem] !text-2xl shadow-3xl shadow-blue-500/30">
                  {t.formSubmit}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-32 text-center border-t border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 opacity-40">
            <span className="text-3xl font-black tracking-tighter">Manara Ops</span>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.5em]">
              <a href="#" className="hover:text-brand-blue">Privacy</a>
              <a href="#" className="hover:text-brand-blue">Security</a>
              <a href="#" className="hover:text-brand-blue">Legal</a>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[1.5em] opacity-10">© 2025 Manara Ops | Sovereign Digital Assets</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
