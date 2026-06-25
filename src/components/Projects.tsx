import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const Projects = () => {
  const { t } = useI18n();

  return (
    <section id="projects" className="section-padding">
      <div className="container-tight">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-4">
          <span className="text-primary text-[0.7rem] tracking-[0.25em] uppercase">03 — {t('nav.projects')}</span>
          <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
        </motion.div>
        <motion.h2 {...fadeIn} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-12">
          {t('projects.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              {...fadeIn}
              transition={{ delay: 0.08 * i }}
              className="group bg-card border border-primary/[0.12] rounded-xl p-8 flex flex-col transition-all hover:border-primary hover:-translate-y-1 hover:glow-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[0.65rem] text-muted-foreground tracking-[0.15em] uppercase">
                  {p.year} · {p.role}
                </span>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {p.title}
              </h3>
              <p className="text-primary text-[0.78rem] mb-3">{p.tagline}</p>
              <p className="text-muted-foreground text-[0.82rem] leading-relaxed mb-6 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="bg-primary/[0.07] border border-primary/[0.15] text-primary text-[0.65rem] px-2 py-0.5 rounded-sm tracking-[0.06em]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Link
                to={`/projects/${p.slug}`}
                className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.1em] uppercase text-foreground group-hover:text-primary transition-colors"
              >
                {t('projects.view')}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;