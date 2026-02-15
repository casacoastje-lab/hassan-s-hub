import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const skillCategories = [
  {
    key: 'skills.languages',
    items: ['JavaScript', 'Python', 'C', 'Java'],
  },
  {
    key: 'skills.web',
    items: ['HTML', 'CSS', 'Responsive Design', 'UI/UX Basics'],
  },
  {
    key: 'skills.tools',
    items: ['Git', 'GitHub', 'WordPress'],
  },
  {
    key: 'skills.core',
    items: ['Data Structures & Algorithms', 'Software Engineering Principles', 'Database Fundamentals', 'Debugging & Problem Solving'],
  },
];

const Skills = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container-tight">
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
          {t('skills.title')}
        </motion.h2>
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="h-1 w-12 bg-foreground rounded mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              {...fadeIn}
              transition={{ delay: 0.1 * (i + 1) }}
              className="p-6 rounded-xl border border-border bg-background"
            >
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                {t(cat.key)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full border border-border bg-secondary text-secondary-foreground"
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
