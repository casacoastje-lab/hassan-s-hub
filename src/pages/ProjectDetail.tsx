import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Check } from 'lucide-react';
import { useEffect } from 'react';
import { getProject } from '@/data/projects';
import { useI18n } from '@/lib/i18n';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} — Hassan Oubihi`;
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-extrabold">Project not found</h1>
        <Link to="/" className="text-primary hover:underline">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,hsl(187_100%_50%/0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative container-tight py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[0.78rem] text-muted-foreground hover:text-primary transition-colors tracking-[0.1em] uppercase mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('projects.back')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-[0.7rem] tracking-[0.2em] uppercase">
            {project.year} · {project.role}
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.05] mt-3 mb-4">
            {project.title}
          </h1>
          <p className="text-primary text-base md:text-lg mb-8">{project.tagline}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-foreground shadow-[inset_0_0_0_1.5px_hsl(0_0%_100%/0.15)] rounded font-medium text-[0.75rem] tracking-[0.1em] uppercase hover:shadow-[inset_0_0_0_1.5px_hsl(187_100%_50%)] hover:text-primary transition-all"
            >
              <Github className="w-4 h-4" />
              {t('projects.code')}
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-bold text-[0.75rem] tracking-[0.1em] uppercase hover:bg-transparent hover:text-primary hover:shadow-[inset_0_0_0_1.5px_hsl(187_100%_50%)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                {t('projects.live')}
              </a>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-primary mb-4">
                {t('projects.overview')}
              </h2>
              <div className="space-y-4">
                {project.longDescription.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-[1.9] text-[0.9rem]">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-primary mb-4">
                {t('projects.features')}
              </h2>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-[0.9rem] leading-relaxed">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="bg-card border border-primary/[0.12] rounded-xl p-7 sticky top-24">
              <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-primary mb-5">
                {t('projects.stack')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="bg-primary/[0.07] border border-primary/[0.15] text-primary text-[0.7rem] px-2.5 py-1 rounded-sm tracking-[0.06em]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;