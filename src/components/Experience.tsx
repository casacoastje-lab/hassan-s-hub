import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const Experience = () => {
  const { t } = useI18n();

  const jobs = [
    {
      titleKey: 'experience.freelance.title',
      locationKey: 'experience.freelance.location',
      dateKey: 'experience.freelance.date',
      points: ['experience.freelance.1', 'experience.freelance.2', 'experience.freelance.3', 'experience.freelance.4'],
    },
    {
      titleKey: 'experience.club.title',
      locationKey: 'experience.club.location',
      dateKey: 'experience.club.date',
      points: ['experience.club.1', 'experience.club.2', 'experience.club.3', 'experience.club.4'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="container-tight">
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
          {t('experience.title')}
        </motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="h-1 w-12 bg-foreground rounded mb-10" />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: 0.1 * (i + 1) }}
              className="relative ps-8 border-s-2 border-border"
            >
              <div className="absolute start-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{t(job.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">
                  {t(job.locationKey)} · {t(job.dateKey)}
                </p>
              </div>
              <ul className="space-y-1.5">
                {job.points.map((p, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                    {t(p)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
