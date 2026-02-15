import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const NewsletterForm = ({ variant = 'default' }: { variant?: 'default' | 'hero' }) => {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }
    // Store locally for now — can connect to backend later
    const existing = JSON.parse(localStorage.getItem('newsletter-emails') || '[]');
    existing.push({ email, date: new Date().toISOString() });
    localStorage.setItem('newsletter-emails', JSON.stringify(existing));
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const isHero = variant === 'hero';

  return (
    <div className={isHero ? '' : 'w-full max-w-md mx-auto'}>
      {status === 'success' ? (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-foreground font-medium text-center"
        >
          ✓ {t('hero.newsletter.success')}
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              placeholder={t(isHero ? 'hero.newsletter.placeholder' : 'newsletter.placeholder')}
              className="w-full ps-9 pe-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t(isHero ? 'hero.newsletter.button' : 'newsletter.button')}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-xs text-destructive mt-1.5">{t('hero.newsletter.error')}</p>
      )}
      {status !== 'success' && (
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {t(isHero ? 'hero.newsletter.disclaimer' : 'newsletter.disclaimer')}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
