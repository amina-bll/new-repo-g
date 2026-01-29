import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowDown, Send, Mail, ShoppingCart, CheckCircle2, Globe, ArrowLeft, 
  Bot, Clock, Coins, BrainCircuit, Zap, Share2, Network, Cpu, Database, 
  Sparkles, Layers, Box, Terminal, Play, Sun, Moon, Loader2
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { TiltCard } from './components/TiltCard';
import { LANGUAGES, TRANSLATIONS, TRIANGLE_POINTS, TEMPLATES, ROI_STATS, SYNERGY_SCENARIOS } from './constants';

const App: React.FC = () => {
  const [langCode, setLangCode] = useState<'ar' | 'en' | 'fr'>('ar');
  const [currentPage, setCurrentPage] = useState<'home' | 'store'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const currentLang = LANGUAGES.find(l => l.code === langCode)!;
  const t = TRANSLATIONS[langCode];
  const scenarios = SYNERGY_SCENARIOS(langCode);

  const containerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
  }, [langCode]);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const navigateTo = (page: 'home' | 'store') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call or n8n webhook
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  const FloatingElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );

  const MainHome = () => (
    <div ref={containerRef}>
      {/* Dora-style Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dora-gradient dark:bg-brand-deep bg-brand-light transition-colors duration-500">
        <FloatingElement className="absolute top-[20%] left-[15%] opacity-20 hidden lg:block" delay={0}>
          <div className="w-24 h-24 rounded-full glass flex items-center justify-center"><Bot size={40} className="text-brand-blue" /></div>
        </FloatingElement>
        <FloatingElement className="absolute bottom-[25%] right-[10%] opacity-20 hidden lg:block" delay={1}>
          <div className="w-32 h-32 rounded-3xl glass flex items-center justify-center rotate-12"><Cpu size={48} className="text-brand-cyan" /></div>
        </FloatingElement>
        <FloatingElement className="absolute top-[30%] right-[15%] opacity-10 hidden lg:block" delay={2}>
          <div className="w-20 h-20 rounded-full glass flex items-center justify-center"><Network size={32} className="text-brand-purple" /></div>
        </FloatingElement>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 z-10 text-center py-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/5 dark:border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] dark:text-white/50 text-slate-500">Next-Gen n8n Workflows</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-8xl lg:text-[7rem] font-bold leading-none tracking-tighter mb-8 text-glow dark:text-white text-slate-900 max-w-6xl mx-auto"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl dark:text-white/40 text-slate-500 max-w-3xl mx-auto mb-16 font-light leading-tight"
          >
            {t.heroSub}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={scrollToContact} className="!rounded-full !px-12 !py-6 dark:!bg-white dark:!text-brand-deep !bg-brand-deep !text-white hover:!bg-brand-cyan hover:!text-white transition-all shadow-2xl">
              {t.ctaMain} <Sparkles size={18} />
            </Button>
            <button 
              onClick={() => navigateTo('store')}
              className="dark:text-white/60 text-slate-500 hover:text-brand-blue dark:hover:text-white flex items-center gap-3 font-bold transition-all uppercase tracking-widest text-xs"
            >
              <ShoppingCart size={18} /> {t.navStore}
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 dark:text-white text-slate-900"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Triangle Section */}
      <section className="py-40 px-6 relative dark:bg-brand-deep/50 bg-white transition-colors duration-500 overflow-hidden">
        <div className="container mx-auto">
          <SectionHeading title={t.triangleTitle} subtitle={t.triangleSub} />
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mt-20">
            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
            >
               <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[100px] animate-pulse-slow"></div>
               <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <motion.path 
                    d="M200,60 L360,320 L40,320 Z" 
                    fill="none" stroke="url(#grad)" strokeWidth="1.5"
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
                    const labelOffset = idx === 0 ? {x: 0, y: -30} : idx === 1 ? {x: 20, y: 35} : {x: -20, y: 35};
                    const anchor = idx === 0 ? "middle" : idx === 1 ? "start" : "end";

                    return (
                      <g key={p.id}>
                        <circle cx={pos.x} cy={pos.y} r="8" className="dark:fill-white fill-brand-deep" />
                        <circle cx={pos.x} cy={pos.y} r="20" className="fill-brand-blue/20 animate-pulse" />
                        <text 
                          x={pos.x + labelOffset.x} 
                          y={pos.y + labelOffset.y} 
                          className="dark:fill-white/80 fill-slate-800 font-bold text-sm tracking-widest uppercase"
                          textAnchor={anchor}
                          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}
                        >
                          {p.title}
                        </text>
                      </g>
                    );
                  })}
               </svg>
            </motion.div>

            <div className="grid gap-8 w-full lg:w-1/2">
              {TRIANGLE_POINTS(langCode).map((p, i) => (
                <motion.div 
                  key={p.id} 
                  initial={{ opacity: 0, x: 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl glass hover:border-brand-blue/50 transition-all group cursor-default border border-black/5 dark:border-white/5"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight dark:text-white/90 text-slate-800">{p.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Synergy Map */}
      <section className="py-40 px-6 dark:bg-brand-deep bg-slate-50 relative border-y border-black/5 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/3">
               <SectionHeading title={t.synergyTitle} subtitle={t.synergySub} centered={false} />
               <div className="space-y-4 mt-12">
                  {scenarios.map((s) => (
                    <button 
                      key={s.id}
                      onClick={() => setActiveScenario(s.id)}
                      className={`w-full p-6 rounded-2xl text-right border transition-all flex items-center justify-between group ${activeScenario === s.id ? 'bg-brand-blue dark:bg-white/10 border-brand-cyan shadow-lg' : 'bg-transparent border-black/5 dark:border-white/5 hover:border-brand-blue/30'}`}
                    >
                      <span className={`text-lg font-bold ${activeScenario === s.id ? 'text-white dark:text-brand-cyan' : 'dark:text-white/40 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>{s.title}</span>
                      <Zap size={18} className={activeScenario === s.id ? 'text-white dark:text-brand-cyan' : 'dark:text-white/20 text-slate-200'} />
                    </button>
                  ))}
               </div>
            </div>

            <div className="w-full lg:w-2/3 aspect-video glass rounded-[3rem] p-8 relative overflow-hidden flex items-center justify-center border-glow">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                <AnimatePresence mode="wait">
                  {activeScenario ? (
                    <motion.div 
                      key={activeScenario}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="w-full h-full flex flex-col items-center justify-center relative"
                    >
                      <div className="flex gap-12 items-center mb-12 relative">
                         {scenarios.find(s => s.id === activeScenario)?.tools.map((tool, i) => (
                           <React.Fragment key={tool}>
                             <motion.div 
                              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                              className="w-24 h-24 rounded-full glass border-2 border-brand-blue/30 flex items-center justify-center text-[10px] font-bold uppercase tracking-tighter dark:text-white text-slate-800"
                             >
                               {tool}
                             </motion.div>
                             {i < 2 && <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="h-px w-12 bg-gradient-to-r from-brand-blue to-brand-cyan"></motion.div>}
                           </React.Fragment>
                         ))}
                      </div>
                      <div className="p-8 rounded-3xl bg-brand-cyan/10 border border-brand-cyan/20 text-center max-w-lg shadow-sm">
                        <Terminal size={24} className="mx-auto mb-4 text-brand-cyan" />
                        <p className="text-brand-cyan font-mono text-sm uppercase tracking-widest mb-2">n8n Execution Successful</p>
                        <p className="dark:text-white/60 text-slate-600 text-lg leading-relaxed">{scenarios.find(s => s.id === activeScenario)?.desc}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center opacity-20 dark:text-white text-slate-900">
                      <Play size={64} className="mx-auto mb-6" />
                      <p className="uppercase tracking-[0.5em] font-bold">Waiting for input</p>
                    </div>
                  )}
                </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-40 px-6 dark:bg-brand-deep bg-white transition-colors duration-500">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {ROI_STATS.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 glass rounded-[2.5rem] flex flex-col justify-between border-glow hover:bg-brand-blue/5 dark:hover:bg-white/5 transition-all group"
              >
                <div className="mb-12 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div>
                   <div className="text-6xl md:text-7xl font-display font-bold dark:text-white text-slate-900 mb-2">{stat.value}</div>
                   <div className="dark:text-white/40 text-slate-400 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const StorePage = () => (
    <div className="min-h-screen pt-40 pb-20 px-6 dora-gradient dark:bg-brand-deep bg-brand-light transition-colors duration-500">
      <div className="container mx-auto">
        <motion.button 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-4 dark:text-white/40 text-slate-400 hover:text-brand-blue dark:hover:text-white transition-all uppercase tracking-widest text-xs font-bold mb-20"
        >
          <ArrowLeft size={16} /> {t.backToHome}
        </motion.button>

        <SectionHeading title={t.storeTitle} subtitle={t.storeSub} />

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {TEMPLATES.map((tmpl, i) => (
            <TiltCard key={tmpl.id}>
              <div className="p-10 rounded-[3rem] glass border border-black/5 dark:border-white/5 flex flex-col h-full group hover:shadow-2xl transition-all">
                 <div className="w-20 h-20 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-cyan mb-10 group-hover:scale-110 transition-transform">
                   {tmpl.icon}
                 </div>
                 <h3 className="text-3xl font-bold mb-4 dark:text-white text-slate-900">{tmpl.title}</h3>
                 <div className="text-brand-cyan font-display text-4xl font-bold mb-10">{tmpl.price}</div>
                 
                 <ul className="space-y-4 mb-12 flex-grow">
                   {tmpl.features.map((f, j) => (
                     <li key={j} className="flex items-center gap-4 dark:text-white/50 text-slate-500 text-sm">
                       <CheckCircle2 size={16} className="text-brand-cyan" /> {f}
                     </li>
                   ))}
                 </ul>

                 <Button className="w-full !rounded-2xl !py-5 dark:!bg-white dark:!text-brand-deep !bg-brand-deep !text-white hover:!bg-brand-cyan hover:!text-white transition-all">
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
    <div className="dark:bg-brand-deep bg-brand-light min-h-screen">
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-10 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
             <div className="w-10 h-10 dark:bg-white bg-brand-deep rounded-xl flex items-center justify-center font-bold dark:text-brand-deep text-white shadow-xl group-hover:rotate-12 transition-transform">M</div>
             <span className="text-xl font-display font-bold tracking-tighter dark:text-white text-brand-deep">{t.brand}</span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase font-bold tracking-[0.3em] dark:text-white/50 text-slate-500">
             <button onClick={() => navigateTo('home')} className={`hover:text-brand-blue dark:hover:text-white transition-all ${currentPage === 'home' ? 'dark:text-white text-brand-blue' : ''}`}>{t.navHome}</button>
             <button onClick={() => navigateTo('store')} className={`hover:text-brand-blue dark:hover:text-white transition-all ${currentPage === 'store' ? 'dark:text-white text-brand-blue' : ''}`}>{t.navStore}</button>
             <button onClick={scrollToContact} className="hover:text-brand-blue dark:hover:text-white transition-all uppercase tracking-widest">{t.navContact}</button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full glass hover:scale-110 transition-all text-brand-blue"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              onClick={() => setLangCode(langCode === 'ar' ? 'en' : langCode === 'en' ? 'fr' : 'ar')}
              className="px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest dark:text-white/60 text-slate-500 hover:text-brand-blue dark:hover:text-white transition-all"
            >
              <Globe size={14} className="inline mr-2" /> {langCode}
            </button>
            <Button variant="primary" className="hidden lg:flex !rounded-full !px-8 !py-2.5 !text-[10px] !bg-brand-blue shadow-none" onClick={scrollToContact}>
               {t.navContact}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainHome />
          </motion.div>
        ) : (
          <motion.div key="store" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <StorePage />
          </motion.div>
        )}
      </AnimatePresence>

      <section ref={contactRef} id="contact" className="py-40 px-6 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
        <div className="container mx-auto">
           <SectionHeading title={t.contactTitle} subtitle={t.contactSub} />
           
           <div className="grid lg:grid-cols-2 gap-12 mt-20 max-w-6xl mx-auto items-start">
              {/* Direct Links Column */}
              <div className="space-y-6">
                 <a href="https://t.me/manara_tech_bot" className="w-full p-10 glass rounded-[2.5rem] group hover:border-brand-blue/50 transition-all flex items-center gap-8 shadow-sm">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                       <Send size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold dark:text-white text-slate-800">{t.telegram}</div>
                      <div className="dark:text-white/40 text-slate-500 text-sm mt-1 tracking-wider">@manara_tech_bot</div>
                    </div>
                 </a>
                 <a href="mailto:contact@manaratech.com" className="w-full p-10 glass rounded-[2.5rem] group hover:border-brand-purple/50 transition-all flex items-center gap-8 shadow-sm">
                    <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
                       <Mail size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold dark:text-white text-slate-800">{t.email}</div>
                      <div className="dark:text-white/40 text-slate-500 text-sm mt-1 tracking-wider">contact@manaratech.com</div>
                    </div>
                 </a>
                 <div className="p-8 rounded-[2rem] bg-brand-cyan/5 border border-brand-cyan/10">
                    <p className="dark:text-white/60 text-slate-600 text-sm leading-relaxed italic">
                      "نحن هنا لتحويل أفكارك إلى واقع مؤتمت بالكامل. استشرنا اليوم لنبني مستقبلك التشغيلي معاً."
                    </p>
                 </div>
              </div>

              {/* Functional Contact Form Column */}
              <div className="glass rounded-[3rem] p-10 border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center flex flex-col items-center gap-6"
                    >
                      <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <CheckCircle2 size={64} />
                      </div>
                      <h3 className="text-3xl font-bold dark:text-white text-slate-900">{t.formSuccess}</h3>
                      <button 
                        onClick={() => setFormState('idle')}
                        className="text-brand-blue text-sm font-bold uppercase tracking-widest mt-4"
                      >
                        {langCode === 'ar' ? 'إرسال رسالة أخرى' : 'Send another message'}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleFormSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formName}</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900"
                          placeholder="..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formEmail}</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900"
                          placeholder="example@mail.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formProject}</label>
                        <select className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900 appearance-none">
                          <option className="bg-slate-900">n8n Automation</option>
                          <option className="bg-slate-900">AI Chatbot</option>
                          <option className="bg-slate-900">Knowledge Base (RAG)</option>
                          <option className="bg-slate-900">Enterprise Consulting</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] dark:text-white/40 text-slate-400 px-2">{t.formMessage}</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full bg-black/5 dark:bg-white/5 border border-transparent focus:border-brand-blue/30 rounded-2xl px-6 py-4 outline-none transition-all dark:text-white text-slate-900 resize-none"
                          placeholder="..."
                        ></textarea>
                      </div>

                      <Button 
                        className="w-full !rounded-2xl !py-5"
                        onClick={() => {}} // Form handles it via submit
                      >
                        {formState === 'loading' ? <Loader2 className="animate-spin" /> : <><Sparkles size={18} /> {t.formSubmit}</>}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
                
                {/* Visual feedback decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-[60px] pointer-events-none"></div>
              </div>
           </div>
        </div>
      </section>

      <footer className="py-20 text-center opacity-30 text-[10px] uppercase tracking-[0.5em] dark:text-white text-slate-500">
        <p>© 2025 Manara Tech | Generative Autonomous Systems</p>
      </footer>
    </div>
  );
};

export default App;