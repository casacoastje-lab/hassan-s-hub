import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.leadership': 'Leadership',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.headline': 'Building Real-World Digital Solutions with Code',
    'hero.intro': 'Software Engineering student with hands-on experience in full-stack development, freelance projects, and technical leadership. Passionate about building impactful applications and mentoring the next generation of developers.',
    'hero.cta.contact': 'Contact Me',
    'hero.cta.resume': 'Download Resume',
    'hero.newsletter.title': 'Join My Developer Journey',
    'hero.newsletter.placeholder': 'Enter your email',
    'hero.newsletter.button': 'Subscribe',
    'hero.newsletter.disclaimer': 'No spam. Unsubscribe anytime.',
    'hero.newsletter.success': 'Thanks for subscribing!',
    'hero.newsletter.error': 'Please enter a valid email.',
    'contact.name.placeholder': 'Full name',
    'contact.phone.placeholder': 'Phone number (optional)',
    'contact.success': 'Thank you! Your info has been submitted.',
    'contact.error.name': 'Please enter your full name.',
    'contact.error.general': 'Something went wrong. Please try again.',

    // About
    'about.title': 'About Me',
    'about.text': 'I\'m Hassan Oubihi, a third-year Software Engineering student at China West Normal University. With a strong foundation in full-stack web development and a passion for clean, scalable code, I\'ve been building real-world solutions since 2021. As the founder of my university\'s Software Engineering Club, I combine technical expertise with leadership to drive innovation and collaboration. I\'m actively seeking internship opportunities in China or France where I can contribute to meaningful projects and grow as an engineer.',

    // Experience
    'experience.title': 'Experience',
    'experience.freelance.title': 'Freelance Software Developer',
    'experience.freelance.location': 'Remote',
    'experience.freelance.date': 'Jan 2021 – Present',
    'experience.freelance.1': 'Built websites and web applications for clients using HTML, CSS, JavaScript, and WordPress.',
    'experience.freelance.2': 'Helped clients transform ideas into functional, user-friendly digital solutions.',
    'experience.freelance.3': 'Improved website performance, responsiveness, and basic SEO.',
    'experience.freelance.4': 'Managed requirements, implementation, and delivery independently.',
    'experience.club.title': 'Founder & President – Software Engineering Club',
    'experience.club.location': 'China West Normal University',
    'experience.club.date': 'May 2023 – Jan 2025',
    'experience.club.1': 'Founded and led the university\'s first Software Engineering Club.',
    'experience.club.2': 'Organized coding workshops, technical events, and collaborative projects.',
    'experience.club.3': 'Mentored students in programming fundamentals and project development.',
    'experience.club.4': 'Developed leadership, communication, and team coordination skills.',

    // Education
    'education.title': 'Education',
    'education.cwnu.degree': 'Bachelor of Engineering – Computer Software Engineering',
    'education.cwnu.school': 'China West Normal University',
    'education.cwnu.date': 'Sep 2023 – Jul 2027',
    'education.cwnu.detail': 'Current: 3rd Year Student',
    'education.cjlu.degree': 'Bachelor\'s Degree – Computer Science (Transferred)',
    'education.cjlu.school': 'China Jiliang University',
    'education.cjlu.detail': 'Completed first academic year. Built a strong foundation in computer science fundamentals.',

    // Skills
    'skills.title': 'Skills',
    'skills.languages': 'Programming Languages',
    'skills.web': 'Web Technologies',
    'skills.tools': 'Tools & Platforms',
    'skills.core': 'Core Concepts',

    // Leadership
    'leadership.title': 'Leadership & Vision',
    'leadership.text': 'I believe in building scalable systems that solve real problems. As a leader, I\'m committed to continuous improvement—both in my technical skills and in empowering others. Through mentoring, organizing technical communities, and pushing boundaries in every project, I aim to create lasting impact. I\'m currently seeking internship opportunities where I can bring my energy, technical foundation, and collaborative mindset to a forward-thinking team.',

    // Newsletter
    'newsletter.title': 'Stay Connected',
    'newsletter.text': 'Subscribe to my newsletter for insights on software engineering, development tips, and my journey as a developer.',
    'newsletter.placeholder': 'Your email address',
    'newsletter.button': 'Subscribe',
    'newsletter.disclaimer': 'No spam. Unsubscribe anytime.',
    'newsletter.success': 'Thanks for subscribing!',
    'newsletter.error': 'Please enter a valid email.',

    // Footer
    'footer.rights': '© 2026 Hassan Oubihi. All rights reserved.',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.leadership': 'Leadership',
    'nav.contact': 'Contact',

    'hero.headline': 'Construire des Solutions Numériques Concrètes avec du Code',
    'hero.intro': 'Étudiant en génie logiciel avec une expérience pratique en développement full-stack, projets freelance et leadership technique. Passionné par la création d\'applications à impact et le mentorat de la prochaine génération de développeurs.',
    'hero.cta.contact': 'Me Contacter',
    'hero.cta.resume': 'Télécharger CV',
    'hero.newsletter.title': 'Rejoignez Mon Parcours Développeur',
    'hero.newsletter.placeholder': 'Votre email',
    'hero.newsletter.button': 'S\'abonner',
    'hero.newsletter.disclaimer': 'Pas de spam. Désabonnement à tout moment.',
    'hero.newsletter.success': 'Merci pour votre abonnement !',
    'hero.newsletter.error': 'Veuillez entrer un email valide.',
    'contact.name.placeholder': 'Nom complet',
    'contact.phone.placeholder': 'Numéro de téléphone (optionnel)',
    'contact.success': 'Merci ! Vos informations ont été envoyées.',
    'contact.error.name': 'Veuillez entrer votre nom complet.',
    'contact.error.general': 'Une erreur est survenue. Veuillez réessayer.',

    'about.title': 'À Propos',
    'about.text': 'Je suis Hassan Oubihi, étudiant en troisième année de génie logiciel à l\'Université China West Normal. Avec une solide base en développement web full-stack et une passion pour le code propre et évolutif, je construis des solutions concrètes depuis 2021. En tant que fondateur du club de génie logiciel de mon université, j\'allie expertise technique et leadership pour stimuler l\'innovation et la collaboration. Je recherche activement des opportunités de stage en Chine ou en France.',

    'experience.title': 'Expérience',
    'experience.freelance.title': 'Développeur Logiciel Freelance',
    'experience.freelance.location': 'À distance',
    'experience.freelance.date': 'Jan 2021 – Présent',
    'experience.freelance.1': 'Création de sites web et applications pour des clients avec HTML, CSS, JavaScript et WordPress.',
    'experience.freelance.2': 'Transformation d\'idées en solutions numériques fonctionnelles.',
    'experience.freelance.3': 'Amélioration des performances, de la réactivité et du SEO.',
    'experience.freelance.4': 'Gestion autonome des exigences, de l\'implémentation et de la livraison.',
    'experience.club.title': 'Fondateur & Président – Club de Génie Logiciel',
    'experience.club.location': 'China West Normal University',
    'experience.club.date': 'Mai 2023 – Jan 2025',
    'experience.club.1': 'Fondation et direction du premier club de génie logiciel de l\'université.',
    'experience.club.2': 'Organisation d\'ateliers de codage, d\'événements techniques et de projets collaboratifs.',
    'experience.club.3': 'Mentorat d\'étudiants en fondamentaux de programmation.',
    'experience.club.4': 'Développement de compétences en leadership et coordination d\'équipe.',

    'education.title': 'Formation',
    'education.cwnu.degree': 'Licence en Ingénierie – Génie Logiciel',
    'education.cwnu.school': 'China West Normal University',
    'education.cwnu.date': 'Sep 2023 – Jul 2027',
    'education.cwnu.detail': 'Actuellement en 3ème année',
    'education.cjlu.degree': 'Licence – Informatique (Transféré)',
    'education.cjlu.school': 'China Jiliang University',
    'education.cjlu.detail': 'Première année complétée. Solide base en fondamentaux informatiques.',

    'skills.title': 'Compétences',
    'skills.languages': 'Langages de Programmation',
    'skills.web': 'Technologies Web',
    'skills.tools': 'Outils & Plateformes',
    'skills.core': 'Concepts Fondamentaux',

    'leadership.title': 'Leadership & Vision',
    'leadership.text': 'Je crois en la construction de systèmes évolutifs qui résolvent de vrais problèmes. En tant que leader, je m\'engage dans l\'amélioration continue — tant dans mes compétences techniques que dans l\'accompagnement des autres. À travers le mentorat, l\'organisation de communautés techniques et l\'ambition dans chaque projet, je vise à créer un impact durable. Je recherche actuellement des stages où je peux apporter mon énergie et mon esprit collaboratif.',

    'newsletter.title': 'Restons Connectés',
    'newsletter.text': 'Abonnez-vous à ma newsletter pour des insights sur le génie logiciel, des conseils de développement et mon parcours en tant que développeur.',
    'newsletter.placeholder': 'Votre adresse email',
    'newsletter.button': 'S\'abonner',
    'newsletter.disclaimer': 'Pas de spam. Désabonnement à tout moment.',
    'newsletter.success': 'Merci pour votre abonnement !',
    'newsletter.error': 'Veuillez entrer un email valide.',

    'footer.rights': '© 2026 Hassan Oubihi. Tous droits réservés.',
  },
  ar: {
    'nav.about': 'عني',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.skills': 'المهارات',
    'nav.leadership': 'القيادة',
    'nav.contact': 'اتصل بي',

    'hero.headline': 'بناء حلول رقمية حقيقية بالبرمجة',
    'hero.intro': 'طالب هندسة برمجيات مع خبرة عملية في تطوير الويب الكامل، المشاريع المستقلة، والقيادة التقنية. شغوف ببناء تطبيقات مؤثرة وتوجيه الجيل القادم من المطورين.',
    'hero.cta.contact': 'تواصل معي',
    'hero.cta.resume': 'تحميل السيرة الذاتية',
    'hero.newsletter.title': 'انضم إلى رحلتي كمطور',
    'hero.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'hero.newsletter.button': 'اشترك',
    'hero.newsletter.disclaimer': 'بدون رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.',
    'hero.newsletter.success': 'شكراً لاشتراكك!',
    'hero.newsletter.error': 'يرجى إدخال بريد إلكتروني صالح.',
    'contact.name.placeholder': 'الاسم الكامل',
    'contact.phone.placeholder': 'رقم الهاتف (اختياري)',
    'contact.success': 'شكراً! تم إرسال معلوماتك.',
    'contact.error.name': 'يرجى إدخال اسمك الكامل.',
    'contact.error.general': 'حدث خطأ. يرجى المحاولة مرة أخرى.',

    'about.title': 'عني',
    'about.text': 'أنا حسن أوبيحي، طالب في السنة الثالثة في هندسة البرمجيات بجامعة غرب الصين. مع أساس قوي في تطوير الويب الكامل وشغف بالكود النظيف والقابل للتطوير، أبني حلولاً حقيقية منذ 2021. كمؤسس لنادي هندسة البرمجيات في جامعتي، أجمع بين الخبرة التقنية والقيادة لدفع الابتكار والتعاون. أبحث حالياً عن فرص تدريب في الصين أو فرنسا.',

    'experience.title': 'الخبرة المهنية',
    'experience.freelance.title': 'مطور برمجيات مستقل',
    'experience.freelance.location': 'عن بُعد',
    'experience.freelance.date': 'يناير 2021 – الحاضر',
    'experience.freelance.1': 'بناء مواقع وتطبيقات ويب للعملاء باستخدام HTML وCSS وJavaScript وWordPress.',
    'experience.freelance.2': 'مساعدة العملاء في تحويل الأفكار إلى حلول رقمية عملية.',
    'experience.freelance.3': 'تحسين أداء المواقع والاستجابة وتحسين محركات البحث.',
    'experience.freelance.4': 'إدارة المتطلبات والتنفيذ والتسليم بشكل مستقل.',
    'experience.club.title': 'مؤسس ورئيس – نادي هندسة البرمجيات',
    'experience.club.location': 'جامعة غرب الصين العادية',
    'experience.club.date': 'مايو 2023 – يناير 2025',
    'experience.club.1': 'تأسيس وقيادة أول نادي لهندسة البرمجيات في الجامعة.',
    'experience.club.2': 'تنظيم ورش عمل برمجية وفعاليات تقنية ومشاريع تعاونية.',
    'experience.club.3': 'توجيه الطلاب في أساسيات البرمجة وتطوير المشاريع.',
    'experience.club.4': 'تطوير مهارات القيادة والتواصل وتنسيق الفريق.',

    'education.title': 'التعليم',
    'education.cwnu.degree': 'بكالوريوس هندسة – هندسة البرمجيات',
    'education.cwnu.school': 'جامعة غرب الصين العادية',
    'education.cwnu.date': 'سبتمبر 2023 – يوليو 2027',
    'education.cwnu.detail': 'حالياً: طالب في السنة الثالثة',
    'education.cjlu.degree': 'بكالوريوس – علوم الحاسوب (محول)',
    'education.cjlu.school': 'جامعة الصين جيليانغ',
    'education.cjlu.detail': 'أكملت السنة الأولى. بناء أساس قوي في أساسيات علوم الحاسوب.',

    'skills.title': 'المهارات',
    'skills.languages': 'لغات البرمجة',
    'skills.web': 'تقنيات الويب',
    'skills.tools': 'الأدوات والمنصات',
    'skills.core': 'المفاهيم الأساسية',

    'leadership.title': 'القيادة والرؤية',
    'leadership.text': 'أؤمن ببناء أنظمة قابلة للتطوير تحل مشاكل حقيقية. كقائد، ألتزم بالتحسين المستمر — في مهاراتي التقنية وفي تمكين الآخرين. من خلال التوجيه وتنظيم المجتمعات التقنية والطموح في كل مشروع، أسعى لخلق تأثير دائم. أبحث حالياً عن فرص تدريب حيث يمكنني تقديم طاقتي وعقليتي التعاونية.',

    'newsletter.title': 'ابقَ على تواصل',
    'newsletter.text': 'اشترك في نشرتي الإخبارية للحصول على رؤى حول هندسة البرمجيات ونصائح التطوير ورحلتي كمطور.',
    'newsletter.placeholder': 'عنوان بريدك الإلكتروني',
    'newsletter.button': 'اشترك',
    'newsletter.disclaimer': 'بدون رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.',
    'newsletter.success': 'شكراً لاشتراكك!',
    'newsletter.error': 'يرجى إدخال بريد إلكتروني صالح.',

    'footer.rights': '© 2026 حسن أوبيحي. جميع الحقوق محفوظة.',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved as Language) || 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, dir]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
