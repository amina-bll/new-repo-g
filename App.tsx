
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  AlertCircle,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  Play,
  ArrowDown
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { TiltCard } from './components/TiltCard';
import { 
  NAV_ITEMS, 
  SERVICES, 
  PROCESS_STEPS, 
  AUDIENCES, 
  BENEFITS, 
  PAIN_POINTS 
} from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sphereScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.4]);
  const sphereOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | { preventDefault: () => void }, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-orange-500/30 selection:text-white">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-10'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 glass border-orange-500/30 rounded-xl flex items-center justify-center font-bold text-xl text-orange-500">A</div>
            <span className="text-xl font-bold tracking-tight">أركان <span className="opacity-40 font-light text-white">ديجيتال</span></span>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <motion.a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)}
                whileHover={{ y: -2, color: '#f97316' }}
                className="text-white/60 hover:text-orange-500 transition-all font-medium text-xs tracking-widest uppercase"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:block !border-orange-500/20 !bg-orange-500/5 hover:!bg-orange-500/10 !px-6 !py-2 !text-xs tracking-wider" onClick={(e: any) => scrollToSection(e, '#process')}>
              ابدأ الآن <ArrowRight className="inline-block mr-2 w-3 h-3 rotate-180 text-orange-500" />
            </Button>
            <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6 text-center">
                {NAV_ITEMS.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href} 
                    className="text-xl font-medium tracking-wide text-white hover:text-orange-500 transition-colors" 
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 !bg-orange-500 !text-white" onClick={() => scrollToSection({ preventDefault: () => {} } as any, '#process')}>احجز استشارة مجانية</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ scale: sphereScale, opacity: sphereOpacity }} className="hero-sphere" />
        <motion.div className="hero-arc" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-14"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 animate-pulse"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="relative glass p-5 rounded-3xl border-orange-500/30"
              >
                 <Sparkles className="w-8 h-8 text-orange-500" />
              </motion.div>
              <div className="absolute -top-3 -right-12 glass px-3 py-1 rounded-full text-[9px] font-black text-orange-500 border-orange-500/30 uppercase tracking-[0.2em]">
                BETA
              </div>
            </div>
            <div className="mt-8 text-orange-500/80 font-medium text-sm tracking-[0.3em] uppercase">Arkan AI Engine</div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 tracking-tight leading-[1.3] text-white max-w-5xl mx-auto"
          >
            حلول <span className="text-gradient">تتجاوز التوقعات</span>، <br />
            بلمسة <span className="text-orange-500">رقمية ذكية.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-10"
          >
            <button className="flex items-center gap-4 text-white/60 hover:text-white transition-all text-xs font-bold tracking-widest uppercase group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-orange-500/20 group-hover:border-orange-500/60 transition-all">
                <Play className="w-4 h-4 fill-orange-500 text-orange-500 ml-1" />
              </div>
              شاهد كيف نغير قواعد اللعبة
            </button>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-orange-500/40"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        {...sectionAnimation}
        className="py-40 relative"
      >
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="آفاق خدماتنا" 
            subtitle="نحن نمزج الذكاء الاصطناعي مع أحدث تقنيات التطوير لبناء أنظمة تتنفس الابتكار وتدفع بالنمو."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <TiltCard className="h-full">
                  <div className="group h-full p-12 rounded-[3rem] glass border-white/5 hover:border-orange-500/30 transition-all duration-700 flex flex-col items-center text-center">
                    <div className="w-24 h-24 glass rounded-[2.5rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-700 shadow-inner border border-white/5">
                      {React.cloneElement(service.icon as React.ReactElement, { className: 'w-8 h-8 text-orange-500' })}
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-white tracking-tight group-hover:text-orange-500 transition-colors">{service.title}</h3>
                    <p className="text-white/40 leading-relaxed mb-12 text-base font-light">{service.description}</p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-orange-500 transition-all border-b border-transparent hover:border-orange-500/30 pb-1"
                    >
                      تعرف على الحل
                    </motion.button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        {...sectionAnimation}
        className="py-40"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="relative p-20 md:p-32 rounded-[5rem] glass border-orange-500/20 text-center overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent"></div>
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-8xl font-bold text-white mb-12 leading-[1.3] tracking-tight">
                ابدأ رحلة <span className="text-orange-500">التحول</span>.
              </h2>
              <p className="text-white/50 text-xl max-w-2xl mx-auto mb-20 font-light leading-relaxed">
                دعنا نبني مستقبلك الرقمي اليوم. استشارتك الأولى هي الخطوة التي ستغير كل شيء.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button variant="primary" className="!px-16 !py-6 text-lg !bg-orange-500 !text-white hover:!bg-orange-400 transition-all shadow-[0_25px_80px_-15px_rgba(249,115,22,0.4)]">ابدأ الآن</Button>
                <Button variant="outline" className="!px-16 !py-6 text-lg !border-white/10 !text-white/60 hover:!text-white hover:!border-white/30">تواصل معنا</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-24 border-t border-orange-500/10 relative z-10 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 glass border-orange-500/30 rounded-2xl flex items-center justify-center font-bold text-2xl text-orange-500">A</div>
               <span className="text-2xl font-bold text-white">أركان <span className="opacity-20 font-light">ديجيتال</span></span>
            </div>
            <div className="flex gap-16 flex-wrap justify-center">
              {NAV_ITEMS.map(item => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-white/40 hover:text-orange-500 transition-colors text-xs font-bold tracking-widest uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">Designed for the orange era of excellence.</p>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© ٢٠٢٥ أركان ديجيتال. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
