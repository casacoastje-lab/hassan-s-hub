import { useState } from 'react';
import { useI18n, Language } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'ar', flag: '🇲🇦', label: 'العربية' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
];

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-2xl border-b border-primary/[0.12]">
      <div className="max-w-[1100px] mx-auto px-[5vw] h-16 flex items-center justify-between">
        <a href="#" className="text-primary font-extrabold text-[1.1rem] tracking-[0.05em]" style={{ fontFamily: 'var(--font-heading)' }}>
          H.OUBIHI
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[0.78rem] text-muted-foreground tracking-[0.12em] uppercase hover:text-primary transition-colors"
            >
              {t(`nav.${link}`)}
            </a>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm border border-primary/[0.12] rounded-full px-3 py-1.5 hover:border-primary/30 transition-colors text-muted-foreground"
            >
              {languages.find((l) => l.code === lang)?.flag}
              <span className="text-xs">{languages.find((l) => l.code === lang)?.label}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full mt-2 end-0 bg-card border border-primary/[0.12] rounded-lg shadow-lg overflow-hidden min-w-[140px]"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${lang === l.code ? 'bg-secondary font-medium text-primary' : 'text-muted-foreground'}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-sm border border-primary/[0.12] rounded-full px-2.5 py-1 hover:border-primary/30 transition-colors"
            >
              {languages.find((l) => l.code === lang)?.flag}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full mt-2 end-0 bg-card border border-primary/[0.12] rounded-lg shadow-lg overflow-hidden min-w-[140px]"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${lang === l.code ? 'bg-secondary font-medium text-primary' : 'text-muted-foreground'}`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-primary transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-primary/[0.12] overflow-hidden bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-[0.12em] uppercase"
                >
                  {t(`nav.${link}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
