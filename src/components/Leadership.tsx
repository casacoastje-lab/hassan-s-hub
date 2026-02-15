import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const Leadership = () => {
  const { t } = useI18n();

  return (
    <section id="leadership" className="section-padding">
      <div className="container-tight">
        <motion.div {...fadeIn} className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-foreground" />
          <h2 className="text-2xl md:text-3xl font-bold">{t('leadership.title')}</h2>
        </motion.div>
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="h-1 w-12 bg-foreground rounded mb-8" />
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg"
        >
          {t('leadership.text')}
        </motion.p>
      </div>
    </section>
  );
};

export default Leadership;
