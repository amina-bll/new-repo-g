
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, ArrowDown, Send, Mail, ShoppingCart, 
  CheckCircle2, Globe, ArrowLeft, Bot, Clock, Coins, BrainCircuit, Zap, ShieldCheck,
  TrendingUp, Share2, Network, Cpu, Database, Layout, Sparkles
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
  
  const currentLang = LANGUAGES.find(l => l.code === langCode)!;
  const t = TRANSLATIONS[langCode];
  const scenarios = SYNERGY_SCENARIOS(langCode);

  useEffect(() => {
    document.documentElement.dir = currentLang.dir;
    document.documentElement.lang = currentLang.code;
  }, [langCode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'store') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const MainHome = () => (
    <>
      {/* Hero */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center hero-mesh overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[150px] animate-pulse"></div>
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-white/30 dark:bg-brand-deep/30 glass">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">Engineering Autonomous Futures 2025</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-black mb-10 dark:text-white text-brand-deep tracking-tighter leading-none"
        >
          {t.heroTitle}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-4xl mb-14 font-light leading-relaxed"
        >
          {t.heroSub}
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <Button onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}>
            {t.ctaMain} <ArrowDown className="w-4 h-4" />
          </Button>
          <Button variant="outline" onClick={() => navigateTo('store')}>
            {t.navStore}
          </Button>
        </div>
      </section>

      {/* Interactive Triangle (Restored Importance) */}
      <section className="py-40 px-6 relative overflow-hidden bg-white/40 dark:bg-brand-deep/20 border-y border-slate-100 dark:border-white/5">
        <div className="container mx-auto relative z-10">
          <SectionHeading title={t.triangleTitle} subtitle={t.triangleSub} />
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-24 mt-20">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                <motion.path 
                  d="M200,50 L350,300 L50,300 Z" 
                  fill="none" stroke="currentColor" strokeWidth="3" 
                  className="text-brand-blue/30"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                />
                {TRIANGLE_POINTS(langCode).map((p, idx) => {
                  const pos = idx === 0 ? {x:200, y:50} : idx === 1 ? {x:350, y:300} : {x:50, y:300};
                  return (
                    <motion.g key={p.id} whileHover={{ scale: 1.2 }}>
                      <circle cx={pos.x} cy={pos.y} r="18" className="fill-brand-blue shadow-xl cursor-help" />
                      <circle cx={pos.x} cy={pos.y} r="30" className="fill-brand-blue/10 animate-ping" />
                    </motion.g>
                  );
                })}
                <circle cx="200" cy="200" r="22" className="fill-brand-deep dark:fill-white stroke-brand-blue stroke-[5px]" />
              </svg>
            </div>

            <div className="grid gap-10 w-full lg:w-1/2">
              {TRIANGLE_POINTS(langCode).map((p, i) => (
                <motion.div 
                  key={p.id} 
                  initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] glass dark:bg-white/5 bg-white shadow-2xl flex items-center gap-10 group hover:border-brand-blue border-2 border-transparent transition-all cursor-default"
                >
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:rotate-12">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black dark:text-white text-brand-deep mb-2">{p.title}</h3>
                    <div className="h-1 w-0 group-hover:w-full bg-brand-cyan transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovative: Live Synergy Architect (Replacement for Calculator) */}
      <section className="py-40 px-6 bg-brand-deep text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-brand-cyan/20 h-full"></div>)}
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex justify-center mb-10">
              <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center ring-4 ring-brand-cyan/10">
                <Share2 className="w-10 h-10 text-brand-cyan animate-pulse" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">{t.synergyTitle}</h2>
            <p className="text-slate-400 text-xl md:text-2xl font-light">{t.synergySub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              {scenarios.map((s) => (
                <button 
                  key={s.id}
                  onClick={() => setActiveScenario(s.id)}
                  className={`w-full p-8 rounded-[2rem] text-right border-2 transition-all flex items-center justify-between group ${activeScenario === s.id ? 'bg-brand-blue border-brand-cyan shadow-2xl' : 'bg-white/5 border-white/10 hover:border-brand-blue'}`}
                >
                  <div className="flex-grow">
                    <h4 className={`text-2xl font-bold mb-2 ${activeScenario === s.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{s.title}</h4>
                    <p className={`text-sm ${activeScenario === s.id ? 'text-white/70' : 'text-slate-500'}`}>{s.desc}</p>
                  </div>
                  <div className={`p-4 rounded-2xl transition-all ${activeScenario === s.id ? 'bg-white text-brand-blue' : 'bg-white/10 text-slate-400 group-hover:scale-110'}`}>
                    <Zap className="w-6 h-6" />
                  </div>
                </button>
              ))}
            </div>

            <div className="relative aspect-square glass rounded-[4rem] border border-white/10 flex items-center justify-center p-10 overflow-hidden">
               <div className="absolute inset-0 bg-brand-blue/5 animate-pulse"></div>
               
               <AnimatePresence mode="wait">
                  {activeScenario ? (
                    <motion.div 
                      key={activeScenario}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-12"
                    >
                      <div className="text-center">
                        <span className="text-xs uppercase tracking-[0.3em] text-brand-cyan font-bold mb-4 block">{t.solutionTitle}</span>
                        <div className="flex gap-4 justify-center">
                          {scenarios.find(s => s.id === activeScenario)?.tools.map((tool, i) => (
                            <motion.div 
                              key={tool}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 text-sm font-bold flex items-center gap-2"
                            >
                              <Sparkles className="w-3 h-3 text-brand-cyan" /> {tool}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="relative w-48 h-48 bg-brand-cyan rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.4)] animate-pulse">
                         <Cpu className="w-24 h-24 text-white" />
                         <motion.div 
                           animate={{ rotate: 360 }}
                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                           className="absolute -inset-4 border-4 border-brand-cyan/30 border-dashed rounded-full"
                         />
                      </div>

                      <div className="grid grid-cols-2 gap-4 w-full">
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                            <div className="text-xs text-slate-500 uppercase mb-1">Latency</div>
                            <div className="text-xl font-black text-brand-cyan">0.4ms</div>
                         </div>
                         <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                            <div className="text-xs text-slate-500 uppercase mb-1">Success Rate</div>
                            <div className="text-xl font-black text-brand-cyan">100%</div>
                         </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center text-slate-500 flex flex-col items-center gap-6">
                      <div className="w-24 h-24 border-4 border-dashed border-slate-700 rounded-full flex items-center justify-center animate-spin-slow">
                        <Network className="w-10 h-10" />
                      </div>
                      <p className="text-lg font-light tracking-widest uppercase">حدد مشكلة لتشغيل المحاكاة</p>
                    </div>
                  )}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {ROI_STATS.map((stat, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-12 card-premium rounded-[3rem] text-center border border-slate-100 dark:border-white/5 transition-all hover:border-brand-blue/50">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-8">
                  {stat.icon}
                </div>
                <div className="text-6xl font-black text-brand-blue mb-4 tracking-tighter">{stat.value}</div>
                <div className="text-slate-500 font-bold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const StorePage = () => (
    <div className="min-h-screen pt-40 pb-20 px-6 hero-mesh">
      <div className="container mx-auto">
        <motion.button 
          initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          className="mb-16 flex items-center gap-3 text-brand-blue font-bold group"
          onClick={() => navigateTo('home')}
        >
          <div className="p-2 rounded-full border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white transition-all">
            <ArrowLeft className="w-5 h-5 rtl-flip" />
          </div>
          {t.backToHome}
        </motion.button>

        <SectionHeading title={t.storeTitle} subtitle={t.storeSub} />
        
        <div className="grid md:grid-cols-3 gap-12 mt-24">
          {TEMPLATES.map((tmpl, i) => (
            <TiltCard key={tmpl.id}>
              <div className="p-12 rounded-[4.5rem] card-premium border border-slate-100 dark:border-white/5 shadow-2xl h-full flex flex-col group hover:border-brand-blue transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                
                <div className="w-24 h-24 bg-brand-blue/10 rounded-[2.5rem] flex items-center justify-center text-brand-blue mb-12 group-hover:bg-brand-blue group-hover:text-white transition-all transform group-hover:-rotate-6">
                  {tmpl.icon}
                </div>
                
                <h3 className="text-3xl font-black mb-6 dark:text-white text-brand-deep tracking-tight">{tmpl.title}</h3>
                
                <div className="mb-12 p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                  <span className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1 block">{t.priceFrom}</span>
                  <div className="text-5xl font-black text-brand-blue tracking-tighter">{tmpl.price}</div>
                </div>

                <ul className="space-y-6 mb-12 flex-grow">
                  {tmpl.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-5 text-slate-600 dark:text-slate-400 font-medium text-lg">
                      <div className="w-7 h-7 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button className="w-full !rounded-3xl !py-7 group-hover:scale-105 shadow-2xl">
                  <ShoppingCart className="w-5 h-5" /> {t.buyNow}
                </Button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="transition-colors duration-500 dark:bg-brand-deep">
      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all ${isScrolled ? 'glass py-4 shadow-2xl' : 'py-10'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center font-bold text-white shadow-xl shadow-brand-blue/30 group-hover:rotate-12 transition-transform">M</div>
            <span className="text-2xl font-black tracking-tighter dark:text-white text-brand-deep">{t.brand}</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-12 text-sm font-bold uppercase tracking-widest">
            <button onClick={() => navigateTo('home')} className={`hover:text-brand-blue transition-colors ${currentPage === 'home' ? 'text-brand-blue underline underline-offset-8' : ''}`}>{t.navHome}</button>
            <button onClick={() => navigateTo('store')} className={`hover:text-brand-blue transition-colors ${currentPage === 'store' ? 'text-brand-blue underline underline-offset-8' : ''}`}>{t.navStore}</button>
            <a href="#contact" className="hover:text-brand-blue transition-colors">{t.navContact}</a>
          </nav>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setLangCode(langCode === 'ar' ? 'en' : langCode === 'en' ? 'fr' : 'ar')} 
              className="px-5 py-2.5 glass rounded-xl text-xs font-black uppercase border border-brand-blue/20 flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all shadow-sm"
            >
              <Globe className="w-4 h-4" /> {langCode}
            </button>
            <Button variant="primary" className="!px-8 !py-3 !text-[11px] hidden md:flex shadow-none" onClick={() => window.scrollTo({ top: 10000, behavior: 'smooth' })}>
              {t.navContact}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MainHome /></motion.div> : <motion.div key="store" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><StorePage /></motion.div>}
      </AnimatePresence>

      {/* Final Lead Gen CTA */}
      <section id="contact" className="py-40 px-6">
        <div className="container mx-auto max-w-6xl card-premium dark:bg-brand-deep dark:border-white/10 border border-slate-100 p-16 md:p-32 rounded-[5rem] text-center relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[150px]"></div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[1.2] tracking-tighter">{t.contactTitle}</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-20 text-xl md:text-2xl font-light max-w-3xl mx-auto">{t.contactSub}</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <a href="https://t.me/manara_tech_bot" target="_blank" className="flex items-center justify-center gap-8 px-14 py-10 bg-brand-blue text-white rounded-[3rem] hover:scale-105 transition-all shadow-3xl shadow-brand-blue/40 group">
              <Send className="w-10 h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="text-right">
                <div className="text-xs opacity-70 uppercase tracking-[0.2em] mb-2 font-black">Fast Response</div>
                <div className="text-3xl font-black">{t.telegram}</div>
              </div>
            </a>
            
            <a href="mailto:contact@manaratech.com" className="flex items-center justify-center gap-8 px-14 py-10 glass dark:bg-white/5 bg-white border-2 border-brand-blue/10 rounded-[3rem] hover:bg-brand-blue hover:text-white transition-all group">
              <Mail className="w-10 h-10 text-brand-blue group-hover:text-white transition-colors" />
              <div className="text-right">
                <div className="text-xs opacity-70 uppercase tracking-[0.2em] mb-2 font-black">Official Mail</div>
                <div className="text-3xl font-black">{t.email}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-slate-100 dark:border-white/5 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-sm text-white font-black shadow-lg">M</div>
          <span className="text-2xl font-black tracking-tighter">{t.brand}</span>
        </div>
        <p className="text-slate-400 text-sm tracking-[0.5em] uppercase font-light">Engineering Autonomous Futures</p>
        <p className="text-slate-300 dark:text-slate-600 text-[10px] mt-6 tracking-widest uppercase">© 2025 Manara Tech | All Rights Reserved</p>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
