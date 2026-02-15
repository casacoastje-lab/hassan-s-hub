import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
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
      detailKey: 'education.cjlu.detail',
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-tight">
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
          {t('education.title')}
        </motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="h-1 w-12 bg-foreground rounded mb-10" />

        <div className="space-y-8">
          {schools.map((s, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: 0.1 * (i + 1) }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{t(s.degreeKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(s.schoolKey)}</p>
                {s.dateKey && <p className="text-xs text-muted-foreground mt-0.5">{t(s.dateKey)}</p>}
                <p className="text-sm text-muted-foreground mt-1">{t(s.detailKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
