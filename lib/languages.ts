export type LanguageLevel = "beginner" | "intermediate" | "advanced";

export type Language = {
  id: string;
  name: string;
  nativeName: string;
  family: string;
  continent: string;
  speakers: string;
  difficulty: LanguageLevel;
  highlight: string;
  learningHook: string;
  culturalTidbit: string;
  emoji: string;
};

export const languages: Language[] = [
  {
    id: "arabic",
    name: "Arabic",
    nativeName: "اللغة العربية",
    family: "Afro-Asiatic",
    continent: "Asia & Africa",
    speakers: "422M",
    difficulty: "intermediate",
    highlight: "مفتاح لفهم التراث العربي والإسلامي",
    learningHook: "اكتشف الخط العربي وتعلم محادثات السوق التقليدي",
    culturalTidbit: "العربية لغة الشعر والمعلقات وقصص ألف ليلة وليلة",
    emoji: "🕌"
  },
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    family: "Indo-European",
    continent: "Europe & Americas",
    speakers: "548M",
    difficulty: "beginner",
    highlight: "لغة الموسيقى اللاتينية والسفر في 21 دولة",
    learningHook: "ابدأ بمحادثات الطهي والرحلات إلى برشلونة وكولومبيا",
    culturalTidbit: "تعلم رقصة الفلامنكو وأطباق التاباس",
    emoji: "💃"
  },
  {
    id: "mandarin",
    name: "Mandarin Chinese",
    nativeName: "普通话",
    family: "Sino-Tibetan",
    continent: "Asia",
    speakers: "1.1B",
    difficulty: "advanced",
    highlight: "لغة أكبر قوة اقتصادية نامية في العالم",
    learningHook: "تعلم أحرف الهانزي من خلال ألعاب الذاكرة",
    culturalTidbit: "احتفل بمهرجان الربيع وتذوق الزلابية الصينية",
    emoji: "🐉"
  },
  {
    id: "swahili",
    name: "Swahili",
    nativeName: "Kiswahili",
    family: "Niger-Congo",
    continent: "Africa",
    speakers: "200M",
    difficulty: "beginner",
    highlight: "لغة التجارة والسياحة في شرق إفريقيا",
    learningHook: "شارك في مغامرات سفاري تفاعلية",
    culturalTidbit: "تعرف على أمثال الحكماء في زنجبار",
    emoji: "🌅"
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    family: "Japonic",
    continent: "Asia",
    speakers: "128M",
    difficulty: "advanced",
    highlight: "لغة التكنولوجيا والثقافة الشعبية اليابانية",
    learningHook: "كوِّن حوارات أنمي وتعلم مراسم الشاي",
    culturalTidbit: "رحلة إلى كيوتو الافتراضية مع دليل متكامل",
    emoji: "🎎"
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    family: "Indo-European",
    continent: "Europe & Africa",
    speakers: "321M",
    difficulty: "intermediate",
    highlight: "لغة الدبلوماسية والفنون العالمية",
    learningHook: "استكشف مقاهي باريس عبر محادثات واقعية",
    culturalTidbit: "احجز رحلة طهي افتراضية مع روّاد المطابخ الفرنسية",
    emoji: "🥐"
  }
];

export const difficultyLabels: Record<LanguageLevel, string> = {
  beginner: "ممتع وسهل",
  intermediate: "متوازن",
  advanced: "تحدٍ رائع"
};
