import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { Mail, User, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const NewsletterForm = ({ variant = 'default' }: { variant?: 'default' | 'hero' }) => {
  const { t } = useI18n();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim()) {
      setStatus('error');
      setErrorMsg(t('contact.error.name'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg(t('hero.newsletter.error'));
      return;
    }

    setStatus('loading');

    const { error } = await supabase
      .from('contact_submissions')
      .insert({ full_name: fullName.trim(), email: email.trim(), phone: phone.trim() || null });

    if (error) {
      setStatus('error');
      setErrorMsg(t('contact.error.general'));
      return;
    }

    setStatus('success');
    setFullName('');
    setEmail('');
    setPhone('');
    setTimeout(() => setStatus('idle'), 4000);
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
          ✓ {t('contact.success')}
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <User className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => { setFullName(e.target.value); setStatus('idle'); }}
              placeholder={t('contact.name.placeholder')}
              className="w-full ps-9 pe-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              maxLength={100}
            />
          </div>
          <div className="relative">
            <Mail className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              placeholder={t(isHero ? 'hero.newsletter.placeholder' : 'newsletter.placeholder')}
              className="w-full ps-9 pe-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              maxLength={255}
            />
          </div>
          <div className="relative">
            <Phone className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setStatus('idle'); }}
              placeholder={t('contact.phone.placeholder')}
              className="w-full ps-9 pe-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              maxLength={20}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50"
          >
            {status === 'loading' ? '...' : t(isHero ? 'hero.newsletter.button' : 'newsletter.button')}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-xs text-destructive mt-1.5">{errorMsg}</p>
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
