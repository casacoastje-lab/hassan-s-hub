import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[600px] bg-[radial-gradient(circle,hsl(187_100%_50%/0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative text-center max-w-[860px] px-6">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/[0.07] border border-primary/[0.12] text-primary text-[0.72rem] tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          {t('hero.tag')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-[clamp(3.2rem,9vw,7rem)] font-extrabold leading-[0.95] tracking-tight mb-6"
        >
          Hassan<br /><span className="text-primary">Oubihi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[clamp(0.85rem,2vw,1rem)] text-muted-foreground leading-relaxed max-w-[560px] mx-auto mb-8"
        >
          {t('hero.intro')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex gap-4 justify-center flex-wrap mb-10"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-bold text-[0.78rem] tracking-[0.1em] uppercase rounded hover:bg-transparent hover:text-primary hover:shadow-[inset_0_0_0_1.5px_hsl(187_100%_50%)] hover:shadow-primary/30 transition-all"
          >
            {t('hero.cta.contact')}
          </a>
          <a
            href="/hassan_oubihi_cv.pdf"
            download="Hassan_Oubihi_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent text-foreground shadow-[inset_0_0_0_1.5px_hsl(0_0%_100%/0.15)] rounded font-medium text-[0.78rem] tracking-[0.1em] uppercase hover:shadow-[inset_0_0_0_1.5px_hsl(187_100%_50%)] hover:text-primary transition-all inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {t('hero.cta.resume')}
          </a>
        </motion.div>

        {/* Newsletter in hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="max-w-md mx-auto"
        >
          <p className="text-sm font-medium mb-3 text-foreground">{t('hero.newsletter.title')}</p>
          <NewsletterForm variant="hero" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" style={{ animation: 'scrollLine 2s ease infinite' }} />
      </motion.div>
    </section>
  );
};

export default Hero;
