import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar' | 'zh';

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
    'nav.contact': 'Contact',
    'nav.projects': 'Projects',

    // Hero
    'hero.tag': 'Available for internship · China & France',
    'hero.intro': 'Full-stack developer & software engineering student building real-world applications. Founder of a university tech club. Based in Nanchong, China.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.resume': 'Download CV',
    'hero.newsletter.title': 'Stay Updated',
    'hero.newsletter.placeholder': 'Enter your email',
    'hero.newsletter.button': 'Submit',
    'hero.newsletter.disclaimer': 'No spam. Your info is safe.',
    'hero.newsletter.success': 'Thanks for reaching out!',
    'hero.newsletter.error': 'Please enter a valid email.',
    'contact.name.placeholder': 'Full name',
    'contact.phone.placeholder': 'Phone number (optional)',
    'contact.success': 'Thank you! Your info has been submitted.',
    'contact.error.name': 'Please enter your full name.',
    'contact.error.general': 'Something went wrong. Please try again.',

    // About
    'about.title': 'Building things\nthat matter.',
    'about.text1': 'I\'m a 3rd-year Software Engineering student at China West Normal University with 4+ years of hands-on experience as a freelance full-stack developer. I turn ideas into clean, functional digital products.',
    'about.text2': 'Beyond coding, I founded my university\'s first Software Engineering Club — organizing workshops, mentoring students, and fostering a culture of technical collaboration.',
    'about.text3': 'I\'m actively seeking software engineering internships in China or France where I can contribute, grow, and build meaningful software.',
    'about.stat.years': 'Years freelance development',
    'about.stat.members': 'Club members mentored',
    'about.stat.year': 'Year B.Eng Student',
    'about.stat.projects': 'Production websites delivered',

    // Experience
    'experience.title': 'Where I\'ve contributed.',
    'experience.freelance.title': 'Freelance Full-Stack Developer',
    'experience.freelance.location': 'Remote · Self-Employed',
    'experience.freelance.date': 'Jan 2021 — Present',
    'experience.freelance.1': 'Designed and delivered 10+ production websites and web apps using HTML5, CSS3, JavaScript, and WordPress',
    'experience.freelance.2': 'Managed full project lifecycle independently: requirements, architecture, coding, testing, deployment',
    'experience.freelance.3': 'Applied SEO best practices and performance optimization — improved load times and search rankings for clients',
    'experience.freelance.4': 'Integrated APIs, CMS platforms, and e-commerce features into client projects',
    'experience.freelance.5': 'Maintained long-term client relationships with iterative delivery and clear communication',
    'experience.club.title': 'Founder & President — Software Engineering Club',
    'experience.club.location': 'China West Normal University',
    'experience.club.date': 'May 2023 — Jan 2025',
    'experience.club.1': 'Founded the university\'s first SE Club from scratch — grew to 50+ active members within first year',
    'experience.club.2': 'Designed and delivered workshops on web development, algorithms, and software engineering principles',
    'experience.club.3': 'Led agile-style student project teams with sprint planning, code reviews, and retrospectives',
    'experience.club.4': 'Mentored junior students in programming, debugging, and real-world project development',
    'experience.club.5': 'Organized hackathons and tech events that established a lasting tech culture on campus',

    // Education
    'education.title': 'Academic background.',
    'education.cwnu.degree': 'B.Eng — Computer Software Engineering',
    'education.cwnu.school': 'China West Normal University',
    'education.cwnu.date': 'Sep 2023 — Jul 2027',
    'education.cwnu.detail': 'Currently a 3rd-year student. Deep focus on software engineering principles, system design, and full-stack application development.',
    'education.cjlu.degree': 'B.Sc — Computer Science (Transferred)',
    'education.cjlu.school': 'China Jiliang University',
    'education.cjlu.detail': 'Built a strong foundation in computer science fundamentals before transferring to pursue software engineering.',

    // Skills
    'skills.title': 'What I work with.',
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.theory': 'CS Theory',
    'skills.ai': 'AI / Data',
    'skills.tools': 'DevOps & Tools',
    'skills.mobile': 'Mobile',

    // Projects
    'projects.title': 'Selected work.',
    'projects.view': 'View details',
    'projects.back': 'Back to projects',
    'projects.code': 'View code',
    'projects.live': 'Live demo',
    'projects.overview': 'Overview',
    'projects.features': 'Key Features',
    'projects.stack': 'Tech Stack',

    // Newsletter / Contact
    'newsletter.title': 'Let\'s build\nsomething.',
    'newsletter.text': 'I\'m looking for software engineering or web development internship opportunities in China or France. If you\'re hiring or want to collaborate, I\'d love to hear from you.',
    'newsletter.placeholder': 'Your email address',
    'newsletter.button': 'Submit',
    'newsletter.disclaimer': 'No spam. Your info is safe.',

    // Footer
    'footer.rights': '© 2025 Hassan Oubihi — Designed & Built by Hassan',
  },
  fr: {
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'nav.projects': 'Projets',

    'hero.tag': 'Disponible pour stage · Chine & France',
    'hero.intro': 'Développeur full-stack & étudiant en génie logiciel construisant des applications réelles. Fondateur d\'un club tech universitaire. Basé à Nanchong, Chine.',
    'hero.cta.contact': 'Me contacter',
    'hero.cta.resume': 'Télécharger CV',
    'hero.newsletter.title': 'Restez informé',
    'hero.newsletter.placeholder': 'Votre email',
    'hero.newsletter.button': 'Envoyer',
    'hero.newsletter.disclaimer': 'Pas de spam. Vos infos sont en sécurité.',
    'hero.newsletter.success': 'Merci de nous avoir contacté !',
    'hero.newsletter.error': 'Veuillez entrer un email valide.',
    'contact.name.placeholder': 'Nom complet',
    'contact.phone.placeholder': 'Numéro de téléphone (optionnel)',
    'contact.success': 'Merci ! Vos informations ont été envoyées.',
    'contact.error.name': 'Veuillez entrer votre nom complet.',
    'contact.error.general': 'Une erreur est survenue. Veuillez réessayer.',

    'about.title': 'Construire des choses\nqui comptent.',
    'about.text1': 'Je suis étudiant en 3ème année de génie logiciel à China West Normal University avec plus de 4 ans d\'expérience en tant que développeur full-stack freelance. Je transforme les idées en produits numériques fonctionnels.',
    'about.text2': 'Au-delà du code, j\'ai fondé le premier club de génie logiciel de mon université — organisant des ateliers, mentorant des étudiants et cultivant une culture de collaboration technique.',
    'about.text3': 'Je recherche activement des stages en ingénierie logicielle en Chine ou en France où je peux contribuer, grandir et construire des logiciels significatifs.',
    'about.stat.years': 'Années de développement freelance',
    'about.stat.members': 'Membres du club mentorés',
    'about.stat.year': 'Année étudiant B.Eng',
    'about.stat.projects': 'Sites web livrés en production',

    'experience.title': 'Où j\'ai contribué.',
    'experience.freelance.title': 'Développeur Full-Stack Freelance',
    'experience.freelance.location': 'À distance · Indépendant',
    'experience.freelance.date': 'Jan 2021 — Présent',
    'experience.freelance.1': 'Conception et livraison de 10+ sites web et applications en production avec HTML5, CSS3, JavaScript et WordPress',
    'experience.freelance.2': 'Gestion complète du cycle de vie des projets : exigences, architecture, codage, tests, déploiement',
    'experience.freelance.3': 'Application des meilleures pratiques SEO et optimisation des performances',
    'experience.freelance.4': 'Intégration d\'APIs, plateformes CMS et fonctionnalités e-commerce',
    'experience.freelance.5': 'Maintien de relations clients à long terme avec livraison itérative',
    'experience.club.title': 'Fondateur & Président — Club de Génie Logiciel',
    'experience.club.location': 'China West Normal University',
    'experience.club.date': 'Mai 2023 — Jan 2025',
    'experience.club.1': 'Fondation du premier club SE de l\'université — 50+ membres actifs en moins d\'un an',
    'experience.club.2': 'Conception et animation d\'ateliers sur le développement web, les algorithmes et le génie logiciel',
    'experience.club.3': 'Direction d\'équipes de projets étudiants avec sprints, revues de code et rétrospectives',
    'experience.club.4': 'Mentorat d\'étudiants juniors en programmation, débogage et développement de projets',
    'experience.club.5': 'Organisation de hackathons et événements tech établissant une culture tech sur le campus',

    'education.title': 'Parcours académique.',
    'education.cwnu.degree': 'B.Eng — Génie Logiciel',
    'education.cwnu.school': 'China West Normal University',
    'education.cwnu.date': 'Sep 2023 — Jul 2027',
    'education.cwnu.detail': 'Actuellement en 3ème année. Focus sur les principes du génie logiciel, la conception de systèmes et le développement full-stack.',
    'education.cjlu.degree': 'B.Sc — Informatique (Transféré)',
    'education.cjlu.school': 'China Jiliang University',
    'education.cjlu.detail': 'Solide base en fondamentaux informatiques avant le transfert vers le génie logiciel.',

    'skills.title': 'Ce avec quoi je travaille.',
    'skills.languages': 'Langages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Base de données',
    'skills.theory': 'Théorie CS',
    'skills.ai': 'IA / Data',
    'skills.tools': 'DevOps & Outils',
    'skills.mobile': 'Mobile',

    'projects.title': 'Travaux sélectionnés.',
    'projects.view': 'Voir les détails',
    'projects.back': 'Retour aux projets',
    'projects.code': 'Voir le code',
    'projects.live': 'Démo en ligne',
    'projects.overview': 'Aperçu',
    'projects.features': 'Fonctionnalités clés',
    'projects.stack': 'Technologies',

    'newsletter.title': 'Construisons\nquelque chose.',
    'newsletter.text': 'Je recherche des stages en ingénierie logicielle ou développement web en Chine ou en France. Si vous recrutez ou souhaitez collaborer, contactez-moi.',
    'newsletter.placeholder': 'Votre adresse email',
    'newsletter.button': 'Envoyer',
    'newsletter.disclaimer': 'Pas de spam. Vos infos sont en sécurité.',

    'footer.rights': '© 2025 Hassan Oubihi — Conçu & Développé par Hassan',
  },
  ar: {
    'nav.about': 'عني',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.skills': 'المهارات',
    'nav.contact': 'اتصل بي',
    'nav.projects': 'المشاريع',

    'hero.tag': 'متاح للتدريب · الصين وفرنسا',
    'hero.intro': 'مطور ويب شامل وطالب هندسة برمجيات أبني تطبيقات حقيقية. مؤسس نادي تقني جامعي. مقيم في نانتشونغ، الصين.',
    'hero.cta.contact': 'تواصل معي',
    'hero.cta.resume': 'تحميل السيرة الذاتية',
    'hero.newsletter.title': 'ابقَ على اطلاع',
    'hero.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'hero.newsletter.button': 'إرسال',
    'hero.newsletter.disclaimer': 'بدون رسائل مزعجة. معلوماتك آمنة.',
    'hero.newsletter.success': 'شكراً للتواصل!',
    'hero.newsletter.error': 'يرجى إدخال بريد إلكتروني صالح.',
    'contact.name.placeholder': 'الاسم الكامل',
    'contact.phone.placeholder': 'رقم الهاتف (اختياري)',
    'contact.success': 'شكراً! تم إرسال معلوماتك.',
    'contact.error.name': 'يرجى إدخال اسمك الكامل.',
    'contact.error.general': 'حدث خطأ. يرجى المحاولة مرة أخرى.',

    'about.title': 'بناء أشياء\nمهمة.',
    'about.text1': 'أنا طالب في السنة الثالثة في هندسة البرمجيات بجامعة غرب الصين مع أكثر من 4 سنوات خبرة كمطور ويب شامل مستقل. أحول الأفكار إلى منتجات رقمية نظيفة وعملية.',
    'about.text2': 'بالإضافة إلى البرمجة، أسست أول نادي لهندسة البرمجيات في جامعتي — تنظيم ورش عمل، توجيه الطلاب، وتعزيز ثقافة التعاون التقني.',
    'about.text3': 'أبحث بنشاط عن فرص تدريب في هندسة البرمجيات في الصين أو فرنسا حيث يمكنني المساهمة والنمو وبناء برمجيات ذات معنى.',
    'about.stat.years': 'سنوات تطوير مستقل',
    'about.stat.members': 'عضو نادي تم توجيههم',
    'about.stat.year': 'سنة طالب بكالوريوس',
    'about.stat.projects': 'مواقع إنتاج تم تسليمها',

    'experience.title': 'أين ساهمت.',
    'experience.freelance.title': 'مطور ويب شامل مستقل',
    'experience.freelance.location': 'عن بُعد · عمل حر',
    'experience.freelance.date': 'يناير 2021 — الحاضر',
    'experience.freelance.1': 'تصميم وتسليم أكثر من 10 مواقع وتطبيقات ويب إنتاجية باستخدام HTML5 وCSS3 وJavaScript وWordPress',
    'experience.freelance.2': 'إدارة دورة حياة المشروع بالكامل بشكل مستقل: المتطلبات، الهندسة، البرمجة، الاختبار، النشر',
    'experience.freelance.3': 'تطبيق أفضل ممارسات تحسين محركات البحث وتحسين الأداء',
    'experience.freelance.4': 'دمج واجهات برمجة التطبيقات ومنصات إدارة المحتوى وميزات التجارة الإلكترونية',
    'experience.freelance.5': 'الحفاظ على علاقات طويلة الأمد مع العملاء مع التسليم التكراري',
    'experience.club.title': 'مؤسس ورئيس — نادي هندسة البرمجيات',
    'experience.club.location': 'جامعة غرب الصين العادية',
    'experience.club.date': 'مايو 2023 — يناير 2025',
    'experience.club.1': 'تأسيس أول نادي هندسة برمجيات في الجامعة — نمو إلى 50+ عضو نشط في أقل من عام',
    'experience.club.2': 'تصميم وتقديم ورش عمل حول تطوير الويب والخوارزميات ومبادئ هندسة البرمجيات',
    'experience.club.3': 'قيادة فرق مشاريع طلابية بأسلوب أجايل مع تخطيط السبرنت ومراجعات الكود',
    'experience.club.4': 'توجيه الطلاب المبتدئين في البرمجة وتصحيح الأخطاء وتطوير المشاريع',
    'experience.club.5': 'تنظيم هاكاثونات وفعاليات تقنية أسست ثقافة تقنية دائمة في الحرم الجامعي',

    'education.title': 'الخلفية الأكاديمية.',
    'education.cwnu.degree': 'بكالوريوس هندسة — هندسة البرمجيات',
    'education.cwnu.school': 'جامعة غرب الصين العادية',
    'education.cwnu.date': 'سبتمبر 2023 — يوليو 2027',
    'education.cwnu.detail': 'حالياً طالب في السنة الثالثة. تركيز عميق على مبادئ هندسة البرمجيات وتصميم الأنظمة وتطوير التطبيقات.',
    'education.cjlu.degree': 'بكالوريوس — علوم الحاسوب (محول)',
    'education.cjlu.school': 'جامعة الصين جيليانغ',
    'education.cjlu.detail': 'بناء أساس قوي في أساسيات علوم الحاسوب قبل التحويل لمتابعة هندسة البرمجيات.',

    'skills.title': 'ما أعمل به.',
    'skills.languages': 'اللغات',
    'skills.frontend': 'الواجهة الأمامية',
    'skills.backend': 'الواجهة الخلفية',
    'skills.database': 'قواعد البيانات',
    'skills.theory': 'نظرية الحاسوب',
    'skills.ai': 'الذكاء الاصطناعي / البيانات',
    'skills.tools': 'أدوات التطوير',
    'skills.mobile': 'تطوير الموبايل',

    'projects.title': 'أعمال مختارة.',
    'projects.view': 'عرض التفاصيل',
    'projects.back': 'العودة إلى المشاريع',
    'projects.code': 'عرض الكود',
    'projects.live': 'عرض مباشر',
    'projects.overview': 'نظرة عامة',
    'projects.features': 'الميزات الرئيسية',
    'projects.stack': 'التقنيات المستخدمة',

    'newsletter.title': 'لنبني\nشيئاً معاً.',
    'newsletter.text': 'أبحث عن فرص تدريب في هندسة البرمجيات أو تطوير الويب في الصين أو فرنسا. إذا كنت توظف أو تريد التعاون، يسعدني سماعك.',
    'newsletter.placeholder': 'عنوان بريدك الإلكتروني',
    'newsletter.button': 'إرسال',
    'newsletter.disclaimer': 'بدون رسائل مزعجة. معلوماتك آمنة.',

    'footer.rights': '© 2025 حسن أوبيحي — صُمم وبُني بواسطة حسن',
  },
  zh: {
    'nav.about': '关于',
    'nav.experience': '经验',
    'nav.education': '教育',
    'nav.skills': '技能',
    'nav.contact': '联系',
    'nav.projects': '项目',

    'hero.tag': '可接受实习 · 中国 & 远程',
    'hero.intro': '全栈开发者与软件工程学生，构建可扩展的 Web 应用和 AI 自动化系统。大学科技社团创始人。常驻中国南充。',
    'hero.cta.contact': '联系我',
    'hero.cta.resume': '下载简历',
    'hero.newsletter.title': '保持联系',
    'hero.newsletter.placeholder': '输入您的邮箱',
    'hero.newsletter.button': '提交',
    'hero.newsletter.disclaimer': '无垃圾邮件。您的信息安全。',
    'hero.newsletter.success': '感谢您的联系！',
    'hero.newsletter.error': '请输入有效的邮箱。',
    'contact.name.placeholder': '全名',
    'contact.phone.placeholder': '电话号码（可选）',
    'contact.success': '谢谢！您的信息已提交。',
    'contact.error.name': '请输入您的全名。',
    'contact.error.general': '出错了，请重试。',

    'about.title': '构建\n有意义的产品。',
    'about.text1': '我是西华师范大学软件工程专业的学生，也是一名全栈开发者，拥有构建可扩展 Web 应用、AI 驱动自动化系统和 SaaS 产品的实战经验。',
    'about.text2': '除了编程，我创办了大学的首个科技社团 — 组织研讨会、指导学生，并培养技术协作的文化。',
    'about.text3': '我热衷于用代码解决真实世界的问题，目前正积极寻找软件工程或 AI 产品开发方向的实习机会。',
    'about.stat.years': '年自由全栈开发',
    'about.stat.members': '指导的社团成员',
    'about.stat.year': '软件工程本科在读',
    'about.stat.projects': '交付的生产项目',

    'experience.title': '我的贡献。',
    'experience.freelance.title': '自由全栈开发者',
    'experience.freelance.location': '远程 · 自雇',
    'experience.freelance.date': '2021年1月 — 至今',
    'experience.freelance.1': '使用 React.js、Node.js、Supabase 和 Tailwind CSS 设计并交付了 10+ 个生产级网站和 Web 应用',
    'experience.freelance.2': '独立管理完整的项目生命周期：需求、架构、编码、测试、部署',
    'experience.freelance.3': '使用 n8n 设计并部署 AI 工作流自动化，集成多个 AI API 以提升运营效率',
    'experience.freelance.4': '将 API、CMS 平台和电商功能集成到客户项目中',
    'experience.freelance.5': '通过迭代交付和清晰沟通维护长期客户关系',
    'experience.club.title': '创始人兼主席 — 软件工程社团',
    'experience.club.location': '西华师范大学',
    'experience.club.date': '2023年5月 — 2025年1月',
    'experience.club.1': '从零创办大学首个软件工程社团 — 第一年内发展至 50+ 名活跃成员',
    'experience.club.2': '设计并开展关于 Web 开发、AI 工具和软件工程原理的研讨会',
    'experience.club.3': '以敏捷方式带领学生项目团队，进行冲刺规划和代码评审',
    'experience.club.4': '指导初级学生进行编程、调试和实际项目开发',
    'experience.club.5': '组织黑客马拉松和技术活动，在校园建立了持久的技术文化',

    'education.title': '教育背景。',
    'education.cwnu.degree': '工学学士 — 软件工程',
    'education.cwnu.school': '西华师范大学',
    'education.cwnu.date': '2023年9月 — 2027年7月',
    'education.cwnu.detail': '目前为三年级学生。深入学习软件工程原理、系统设计和全栈应用开发。',
    'education.cjlu.degree': '理学学士 — 计算机科学（已转专业）',
    'education.cjlu.school': '中国计量大学',
    'education.cjlu.detail': '在转向软件工程之前，打下了扎实的计算机科学基础。',

    'skills.title': '我的技术栈。',
    'skills.languages': '编程语言',
    'skills.frontend': '前端',
    'skills.backend': '后端',
    'skills.database': '数据库',
    'skills.theory': '计算机理论',
    'skills.ai': 'AI / 自动化',
    'skills.tools': '开发运维与工具',
    'skills.mobile': '移动端',

    'projects.title': '精选作品。',
    'projects.view': '查看详情',
    'projects.back': '返回项目',
    'projects.code': '查看代码',
    'projects.live': '在线演示',
    'projects.overview': '概述',
    'projects.features': '主要功能',
    'projects.stack': '技术栈',

    'newsletter.title': '一起\n创造吧。',
    'newsletter.text': '我正在寻找软件工程、全栈开发或 AI/自动化方向的实习机会。如果您在招聘或希望合作，欢迎联系我。',
    'newsletter.placeholder': '您的邮箱地址',
    'newsletter.button': '提交',
    'newsletter.disclaimer': '无垃圾邮件。您的信息安全。',

    'footer.rights': '© 2025 Hassan Oubihi — 由 Hassan 设计与开发',
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
