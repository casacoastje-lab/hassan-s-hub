import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const skillCategories = [
  { key: 'skills.languages', icon: '⌨️', items: ['JavaScript', 'Python', 'Java', 'C'] },
  { key: 'skills.frontend', icon: '🌐', items: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX'] },
  { key: 'skills.backend', icon: '🛠️', items: ['Java EE', 'REST APIs', 'Server-side Logic'] },
  { key: 'skills.database', icon: '🗄️', items: ['SQL', 'DB System Principles', 'Data Modelling'] },
  { key: 'skills.theory', icon: '🧠', items: ['Algorithms', 'Data Structures', 'Discrete Math', 'OS'] },
  { key: 'skills.ai', icon: '🤖', items: ['Machine Learning', 'Big Data', 'Probability & Stats'] },
  { key: 'skills.tools', icon: '⚙️', items: ['Git', 'GitHub', 'WordPress', 'Vercel', 'Linux'] },
  { key: 'skills.mobile', icon: '📱', items: ['Android', 'Mobile App Dev'] },
];

const Skills = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-padding">
      <div className="container-tight">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-4">
          <span className="text-primary text-[0.7rem] tracking-[0.25em] uppercase">02 — {t('nav.skills')}</span>
          <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
        </motion.div>
        <motion.h2 {...fadeIn} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-12">
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              {...fadeIn}
              transition={{ delay: 0.05 * i }}
              className="bg-card border border-primary/[0.12] rounded-lg p-7 transition-all hover:border-primary hover:-translate-y-1 hover:glow-shadow"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="text-[0.9rem] font-bold tracking-[0.05em] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                {t(cat.key)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="bg-primary/[0.07] border border-primary/[0.15] text-primary text-[0.68rem] px-2.5 py-1 rounded-sm tracking-[0.08em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
