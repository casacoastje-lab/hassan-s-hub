import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import NewsletterForm from './NewsletterForm';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5 },
};

const NewsletterSection = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-tight text-center">
        <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-4">
          {t('newsletter.title')}
        </motion.h2>
        <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="text-muted-foreground mb-8 max-w-lg mx-auto">
          {t('newsletter.text')}
        </motion.p>
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <NewsletterForm />
        </motion.div>

        {/* Contact info */}
        <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="mailto:hassanoubihi04@gmail.com" className="hover:text-foreground transition-colors">
            hassanoubihi04@gmail.com
          </a>
          <a href="tel:+8617390216248" className="hover:text-foreground transition-colors">
            +86 173 9021 6248
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-oubihi-878604248"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
