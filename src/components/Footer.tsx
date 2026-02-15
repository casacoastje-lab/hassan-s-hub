import { useI18n } from '@/lib/i18n';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-tight text-center">
        <p className="text-sm text-muted-foreground">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
