import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const Education = () => {
  const { t } = useI18n();

  const schools = [
    {
      degreeKey: 'education.cwnu.degree',
      schoolKey: 'education.cwnu.school',
      dateKey: 'education.cwnu.date',
      detailKey: 'education.cwnu.detail',
    },
    {
      degreeKey: 'education.cjlu.degree',
      schoolKey: 'education.cjlu.school',
      dateKey: '',
      detailKey: 'education.cjlu.detail',
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-tight">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-4">
          <span className="text-primary text-[0.7rem] tracking-[0.25em] uppercase">04 — {t('nav.education')}</span>
          <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
        </motion.div>
        <motion.h2 {...fadeIn} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-12">
          {t('education.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schools.map((s, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: 0.1 * (i + 1) }}
              className="bg-card border border-primary/[0.12] rounded-lg p-8 transition-all hover:border-primary hover:-translate-y-1"
            >
              <h3 className="font-bold text-base mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>
                {t(s.degreeKey)}
              </h3>
              <p className="text-primary text-[0.78rem] mb-1">{t(s.schoolKey)}</p>
              {s.dateKey && <p className="text-muted-foreground text-[0.72rem] mb-4">{t(s.dateKey)}</p>}
              <p className="text-muted-foreground text-[0.8rem] leading-relaxed">{t(s.detailKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
