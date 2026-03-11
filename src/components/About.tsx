import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const stats = [
  { num: '4+', labelKey: 'about.stat.years' },
  { num: '50+', labelKey: 'about.stat.members' },
  { num: '3rd', labelKey: 'about.stat.year' },
  { num: '10+', labelKey: 'about.stat.projects' },
];

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-tight">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-4">
          <span className="text-primary text-[0.7rem] tracking-[0.25em] uppercase">01 — {t('nav.about')}</span>
          <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
        </motion.div>
        <motion.h2 {...fadeIn} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-12">
          {t('about.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="space-y-5">
            <p className="text-muted-foreground leading-[1.9] text-[0.88rem]">{t('about.text1')}</p>
            <p className="text-muted-foreground leading-[1.9] text-[0.88rem]">{t('about.text2')}</p>
            <p className="text-muted-foreground leading-[1.9] text-[0.88rem]">{t('about.text3')}</p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-secondary border border-primary/[0.12] rounded-lg p-6 transition-all hover:border-primary hover:-translate-y-1"
              >
                <div className="text-primary text-[2.4rem] font-extrabold leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  {s.num}
                </div>
                <div className="text-muted-foreground text-[0.72rem] mt-1.5 leading-snug tracking-[0.05em]">
                  {t(s.labelKey)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
