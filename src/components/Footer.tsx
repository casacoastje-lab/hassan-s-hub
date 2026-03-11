import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-8 border-t border-primary/[0.12] text-center">
      <div className="container-tight">
        <p className="text-[0.7rem] text-muted-foreground tracking-[0.1em]">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
