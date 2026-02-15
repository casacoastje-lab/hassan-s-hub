import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import hassanPhoto from '@/assets/hassan-photo.jpeg';

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container-tight w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-border shadow-lg">
              <img
                src={hassanPhoto}
                alt="Hassan Oubihi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="flex-1 text-center md:text-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3"
            >
              Hassan Oubihi
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              {t('hero.intro')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-10"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t('hero.cta.contact')}
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-accent transition-colors inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('hero.cta.resume')}
              </a>
            </motion.div>

            {/* Newsletter in hero */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-md mx-auto md:mx-0"
            >
              <p className="text-sm font-medium mb-3">{t('hero.newsletter.title')}</p>
              <NewsletterForm variant="hero" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
