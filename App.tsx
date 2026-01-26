
import React, { useState, useEffect, useRef } from 'react';
// Fix: Import HTMLMotionProps to correctly type motion component props
import { motion, AnimatePresence, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight, 
  Play, 
  ArrowDown, 
  ChevronLeft 
} from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { TiltCard } from './components/TiltCard';
import { 
  NAV_ITEMS, 
  SERVICES 
} from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sphereScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.3]);
  const sphereOpacity = useTransform(scrollYProgress, [0, 0.3], [0.9, 0.1]);

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

  // Fix: Explicitly type sectionAnimation to avoid Framer Motion easing type errors
  const sectionAnimation: HTMLMotionProps<"section"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-orange-500/30 selection:text-white bg-[#050505]">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl' : 'bg-transparent py-10'}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-11 h-11 glass border-orange-500/40 rounded-2xl flex items-center justify-center font-bold text-2xl text-orange-500 shadow-xl shadow-orange-500/20">A</div>
            <span className="text-2xl font-bold tracking-tight text-white text-glow-white">أركان <span className="text-white/40 font-light">ديجيتال</span></span>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <motion.a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)}
                whileHover={{ color: '#f97316' }}
                className="text-white/80 hover:text-orange-500 transition-all font-medium text-sm tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:block !border-white/20 !text-white hover:!border-orange-500/50" onClick={(e: any) => scrollToSection(e, '#process')}>
              ابدأ الآن <ArrowRight className="inline-block mr-2 w-4 h-4 rotate-180" />
            </Button>
            <button className="lg:hidden text-white p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden glass border-t border-white/10 absolute w-full top-full left-0 overflow-hidden shadow-2xl bg-[#050505]/95 backdrop-blur-xl"
            >
              <div className="flex flex-col p-10 gap-8 text-center">
                {NAV_ITEMS.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href} 
                    className="text-2xl font-semibold text-white/90 hover:text-orange-500 transition-colors" 
                    onClick={(e) => scrollToSection(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="mt-4 !bg-orange-500 !text-white py-5" onClick={() => scrollToSection({ preventDefault: () => {} } as any, '#process')}>احجز استشارة مجانية</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden">
        <motion.div style={{ scale: sphereScale, opacity: sphereOpacity }} className="hero-sphere" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 flex flex-col items-center"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="relative glass p-5 rounded-[2rem] border-orange-500/40 shadow-2xl"
              >
                 <Sparkles className="w-8 h-8 text-orange-500" />
              </motion.div>
              <div className="absolute -top-3 -right-12 glass px-3 py-1 rounded-full text-[10px] font-black text-orange-500 border-orange-500/40 uppercase tracking-[0.2em]">
                BETA
              </div>
            </div>
            <div className="text-orange-500 font-bold text-sm tracking-[0.5em] uppercase text-glow-orange">Arkan Digital AI</div>
          </motion.div>

          {/* Fixed line-height and increased size for better presence */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black mb-16 tracking-tighter leading-[1.7] md:leading-[1.4] text-white max-w-[90%] mx-auto"
          >
            حلول <span className="text-orange-500 text-glow-orange">تتجاوز</span> <br className="hidden md:block" />
            <span className="text-glow-white">التوقعات</span>، بلمسة <span className="text-white/30 font-light">ذكية.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-14"
          >
            <button className="flex items-center gap-6 text-white hover:text-orange-500 transition-all text-sm font-bold uppercase tracking-widest group">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center border-orange-500/30 group-hover:border-orange-500/80 group-hover:bg-orange-500/5 transition-all shadow-xl shadow-orange-500/5">
                <Play className="w-5 h-5 fill-orange-500 text-orange-500 ml-1" />
              </div>
              كيف نغير ملامح مستقبلك الرقمي
            </button>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-orange-500/40"
            >
              <ArrowDown size={32} />
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
            title="نطاقات الإبداع" 
            subtitle="نحن لا نطور برمجيات فقط، بل نصمم أنظمة ذكية تندمج مع رؤيتك وتسرّع وتيرة نجاحك."
          />
          
          <div className="grid md:grid-cols-3 gap-12 mt-24">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <TiltCard className="h-full">
                  <div className="group h-full p-14 rounded-[3.5rem] glass border-white/10 hover:border-orange-500/40 transition-all duration-700 flex flex-col items-center text-center shadow-2xl">
                    <div className="w-24 h-24 glass rounded-[2.5rem] flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-700 border border-white/10 shadow-inner">
                      {/* Fix: Cast to React.ReactElement<any> to avoid className property errors during cloneElement */}
                      {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-10 h-10 text-orange-500' })}
                    </div>
                    <h3 className="text-3xl font-bold mb-8 text-white group-hover:text-orange-500 transition-colors tracking-tight">{service.title}</h3>
                    <p className="text-white/50 leading-loose mb-12 text-lg font-light">{service.description}</p>
                    <motion.button 
                      whileHover={{ x: -10 }}
                      className="text-xs font-black uppercase tracking-[0.3em] text-orange-500/80 hover:text-orange-500 transition-all flex items-center gap-3 border-b border-orange-500/20 pb-2"
                    >
                      اكتشف المزيد <ChevronLeft size={16} />
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
            className="relative p-24 md:p-40 rounded-[5rem] glass border-orange-500/20 text-center overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent"></div>
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[180px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-9xl font-black text-white mb-14 leading-[1.4] tracking-tight text-glow-white">
                لنحول الفكرة <br /> إلى <span className="text-orange-500 text-glow-orange">إمبراطورية</span>.
              </h2>
              <p className="text-white/60 text-2xl max-w-3xl mx-auto mb-20 font-light leading-relaxed">
                لا تدع أحلامك الرقمية تنتظر. فريق أركان ديجيتال جاهز لنقل أعمالك إلى المستوى التالي من الكفاءة.
              </p>
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                <Button variant="primary" className="!px-20 !py-7 text-xl !bg-orange-500 !text-white shadow-3xl shadow-orange-500/40 hover:!bg-orange-400">ابدأ الآن</Button>
                <Button variant="outline" className="!px-20 !py-7 text-xl !border-white/20 !text-white hover:!text-white hover:!border-orange-500/40">تواصل معنا</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/10 relative z-10 bg-[#050505]/80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-14 mb-20">
            <div className="flex items-center gap-5">
               <div className="w-12 h-12 glass border-orange-500/40 rounded-2xl flex items-center justify-center font-bold text-2xl text-orange-500 shadow-lg shadow-orange-500/10">A</div>
               <span className="text-3xl font-bold text-white tracking-tighter">أركان <span className="text-white/20 font-light">ديجيتال</span></span>
            </div>
            <div className="flex gap-14 flex-wrap justify-center">
              {NAV_ITEMS.map(item => (
                <a key={item.href} href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="text-white/40 hover:text-orange-500 transition-colors text-sm font-bold tracking-widest uppercase">{item.label}</a>
              ))}
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs tracking-widest uppercase">© ٢٠٢٥ أركان ديجيتال. صُمم لنخبة المهنيين.</p>
            <div className="flex gap-8">
               <span className="text-white/10 text-[10px] uppercase tracking-[0.3em]">Scalable Solutions</span>
               <span className="text-white/10 text-[10px] uppercase tracking-[0.3em]">AI Integration</span>
               <span className="text-white/10 text-[10px] uppercase tracking-[0.3em]">Digital Future</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
