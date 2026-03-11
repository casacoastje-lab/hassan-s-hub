import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const Experience = () => {
  const { t } = useI18n();

  const jobs = [
    {
      titleKey: 'experience.freelance.title',
      locationKey: 'experience.freelance.location',
      dateKey: 'experience.freelance.date',
      points: ['experience.freelance.1', 'experience.freelance.2', 'experience.freelance.3', 'experience.freelance.4', 'experience.freelance.5'],
    },
    {
      titleKey: 'experience.club.title',
      locationKey: 'experience.club.location',
      dateKey: 'experience.club.date',
      points: ['experience.club.1', 'experience.club.2', 'experience.club.3', 'experience.club.4', 'experience.club.5'],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-tight">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-4">
          <span className="text-primary text-[0.7rem] tracking-[0.25em] uppercase">03 — {t('nav.experience')}</span>
          <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
        </motion.div>
        <motion.h2 {...fadeIn} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-12">
          {t('experience.title')}
        </motion.h2>

        <div className="relative ps-0">
          {/* Timeline line */}
          <div className="absolute start-0 top-0 bottom-0 w-px bg-primary/[0.12]" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: 0.1 * (i + 1) }}
                className="relative ps-10"
              >
                {/* Timeline dot */}
                <div className="absolute start-[-5px] top-1 w-[11px] h-[11px] bg-primary rounded-full shadow-[0_0_12px_hsl(187_100%_50%)]" />

                <div className="text-[0.68rem] text-primary tracking-[0.15em] uppercase mb-2">
                  {t(job.dateKey)}
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t(job.titleKey)}
                </h3>
                <p className="text-[0.78rem] text-muted-foreground mb-4">
                  {t(job.locationKey)}
                </p>
                <ul className="space-y-1">
                  {job.points.map((p, j) => (
                    <li key={j} className="text-[0.82rem] text-muted-foreground leading-relaxed ps-5 relative">
                      <span className="absolute start-0 text-primary text-[0.7rem]">▸</span>
                      {t(p)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
