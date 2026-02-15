import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding">
      <div className="container-tight">
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
          {t('about.title')}
        </motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="h-1 w-12 bg-foreground rounded mb-8" />
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg"
        >
          {t('about.text')}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
