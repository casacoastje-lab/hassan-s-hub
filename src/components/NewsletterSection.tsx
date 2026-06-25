import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const fadeIn = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7 },
};

const NewsletterSection = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-tight text-center">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-4 justify-center">
          <span className="text-primary text-[0.7rem] tracking-[0.25em] uppercase">06 — {t('nav.contact')}</span>
          <span className="flex-1 max-w-[80px] h-px bg-primary/40" />
        </motion.div>
        <motion.h2 {...fadeIn} className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight mb-4">
          {t('newsletter.title')}
        </motion.h2>
        <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-muted-foreground text-[0.88rem] leading-[1.9] mb-10 max-w-[640px] mx-auto">
          {t('newsletter.text')}
        </motion.p>

        {/* Contact links */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:hassanoubihi04@gmail.com"
            className="flex items-center gap-2.5 bg-secondary border border-primary/[0.12] text-foreground px-5 py-3 rounded-md text-[0.78rem] tracking-[0.05em] hover:border-primary hover:text-primary hover:glow-shadow transition-all"
          >
            <Mail className="w-4 h-4 opacity-70" />
            hassanoubihi04@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-oubihi-878604248"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-secondary border border-primary/[0.12] text-foreground px-5 py-3 rounded-md text-[0.78rem] tracking-[0.05em] hover:border-primary hover:text-primary hover:glow-shadow transition-all"
          >
            <Linkedin className="w-4 h-4 opacity-70" />
            LinkedIn
          </a>
          <a
            href="tel:+8617390216248"
            className="flex items-center gap-2.5 bg-secondary border border-primary/[0.12] text-foreground px-5 py-3 rounded-md text-[0.78rem] tracking-[0.05em] hover:border-primary hover:text-primary hover:glow-shadow transition-all"
          >
            <Phone className="w-4 h-4 opacity-70" />
            +86 173 9021 6248
          </a>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="max-w-md mx-auto">
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
