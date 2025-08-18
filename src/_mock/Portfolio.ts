export interface ProjecDataType {
  id: number;
  title: string;
  description: string;
  link: string[];
  technologia: string[];
}

export const ProjecData: ProjecDataType[] = [
  {
    id: 1231,
    title: "Bouquet",
    description:
      "Bu, onlayn satış üçün nəzərdə tutulmuş veb səhifədir. Layihədə TypeScript, Framer Motion, komponent əsaslı arxitektura və digər müasir React texnologiyalarından istifadə olunmuşdur. Bouquet üçün admin panel sıfırdan hazırlayıram",
    link: ["https://bqt.studentall.az/"],
    technologia: [
      "TypeScript",
      "Material UI",
      "React-i18n",
      "Swiper",
      "Zustand",
      "Shadcn/ui",
      "Framer-motion",
      "Axios",
      "Number-flow",
      "TailwindCSS",
      "React-Router-Dom",
    ],
  },
  {
    id: 1231244,
    title: "Park Cinema",
    description:
      "Bu, ParkCinema layihəsi üçün hazırlanmış veb tətbiqidir. Mövcud kod bazası üzərində işlər aparıram, yeni funksionallıqlar əlavə edir və saytın davamlı dəstəyi üçün çalışıram.",
    link: ["https://new.parkcinema.az/az"],
    technologia: [
      "Next.js",
      "TypeScript",
      "Material UI",
      "Swiper",
      "Zustand",
      "Framer-motion",
      "Axios",
      "TailwindCSS",
      "React-Router-Dom",
      "React",
      "Ant design",
    ],
  },
  {
    id: 123123,
    title: "Ideal Kredit",
    description:
      "Bu, onlayn kredit xidmətləri üçün hazırlanmış veb səhifədir. Mövcud kod bazası üzərində əlavə funksionallıqlar yaratmışam və layihəni davamlı olaraq təkmilləşdirirəm. Və admin panel üzərin də işlər də davam edir",
    link: ["https://www.idealkredit.az/"],
    technologia: [
      "TypeScript",
      "Material UI",
      "Swiper",
      "Zustand",
      "Shadcn/ui",
      "Framer-motion",
      "Axios",
      "Number-flow",
      "TailwindCSS",
      "React-Router-Dom",
      "React",
      "Ant design",
    ],
  },
  {
    id: 123123123,
    title: "Next pick",
    description:
      "Elektronik əşyaların satışı ilə bağlı bir saytdır. Burada backend hissəsin özüm Express.js və MongoDB ilə hazırlamışam. Bu saytı öz üzərim də daha da inkişaf etmək üçün hazırlayıram və davam edir. Və hal hazırda üzərin də düzəlişlər edirəm.",
    link: [
      "https://next-pick-commerce.vercel.app/",
      "https://github.com/MhrrmliEltac/NEXT-PICK",
    ],
    technologia: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDb",
      "React-Router-Dom",
      "Material UI",
      "Zustand",
      "Axios",
      "TailwindCSS",
      "Framer-motion",
      "Shadcn/ui",
      "Swiper",
    ],
  },
  {
    id: 12313123,
    title: "Browser extensionn",
    description:
      "Burada həm backend, həm də Next.js biliklərimi artırmaq üçün sadə bir browser extension hazırladım. Layihə də backend hissəsin express.js, prisma istifadə etdim. Frontend hissə də isə Next.js ilə server tərəfdə api-a istək atmaq və client tərəfdə dataları göstərə bilmək. Və browser extension yaratmaq üçün form hazırladım. Loqoları buluda daşıdım və orada saxladım",
    technologia: [
      "Express",
      "Prisma",
      "Cloudinary",
      "Multer",
      "Next.js",
      "React.js",
      "React-dom",
      "Axios",
      "Zustand",
      "Shadcn",
      "TailwindCSS",
    ],
    link: [
      "https://github.com/MhrrmliEltac/browser-extension-backend.git",
      "https://github.com/MhrrmliEltac/browser-extension.git",
    ],
  },
  {
    id: 2,
    title: "Furniture Website",
    description:
      "Bu, müxtəlif mebel məhsullarının onlayn satışını təmin edən veb səhifədir. Saytın frontend hissəsi React, TypeScript, Framer Motion və Redux kimi texnologiyalarla qurulmuşdur. Backend isə Express.js və MongoDB istifadə edilərək hazırlanmışdır. Saytda məhsul filtrasiyası, kateqoriya əsaslı axtarış, istifadəçi hesabları, səbət funksionallığı və dinamik animasiyalar mövcuddur.",
    link: [
      "https://furnite-ui.vercel.app/",
      "https://github.com/MhrrmliEltac/FurniteUI",
    ],
    technologia: [
      "TypeScript",
      "Material UI",
      "Redux-Toolkit",
      "Framer-motion",
      "React-Phone-Number",
      "Swiper",
      "TailwindCSS",
      "Axios",
      "React-Router-Dom",
      "Number-flow",
    ],
  },
  {
    id: 1,
    title: "BookSto",
    technologia: [
      "TypeScript",
      "Material UI",
      "Redux-Toolkit",
      "Supabse",
      "Firebase",
      "Axios",
      "Swiper",
      "Formik",
      "TailwindCSS",
    ],
    description:
      "Bu sayt kitabların satışı üçün nəzərdə tutulmuşdur. Saytın frontend hissəsi React, TypeScript, Framer Motion və Redux kimi texnologiyalarla qurulmuşdur. Backend isə firebase authentication üçün və supabase isə storage üçün istifadə etmişəm.",
    link: [
      "https://book-sto.vercel.app/",
      "https://github.com/MhrrmliEltac/BookSto",
    ],
  },
  {
    id: 5,
    title: "Coza Store",
    description:
      "'Coza Store' adlanan bu E-Commerce veb səhifəsini Fake Store API-dan istifadə edərək hazırlamışam. Layihəni React ilə həyata keçirmişəm. Autentifikasiya və autorizasiya əməliyyatlarını Node JS ilə icra etmişəm. Github-dan endirərək serveri başladıb baxa bilərsiz",
    link: [
      "https://e-commerce-website-fake.vercel.app/",
      "https://github.com/MhrrmliEltac/E-commerce-Website",
    ],
    technologia: ["React", "Material UI", "React-Router-Dom", "Redux-Toolkit"],
  },
  {
    id: 6,
    title: "Weather",
    description: "Burada şəhərlər üzrə axtarış edərək hava şəraitini göstərir.",
    link: [
      "https://weatherprogram.netlify.app/",
      "https://github.com/MhrrmliEltac/WeatherReact",
    ],
    technologia: ["React", "Material UI", "Reat-Router-Dom", "Axios"],
  },
  {
    id: 7,
    title: "Show Movie",
    description:
      "Burada istədiyiniz kinoları axtarış edə bilərsiz. Kinonu listə əlavə edə bilərsiz. Listin adını qoya bilərsiz. Kinonun omdbAPİ-a gedib o kinonu göstərir.",
    link: ["https://showmoviereact.netlify.app/"],
    technologia: ["React", "Redux-Toolkit"],
  },
  {
    id: 8,
    title: "Quiz App",
    description:
      "Proqramlaşdırmaya yeni başladığım dövrdə HTML, CSS və JavaScript istifadə edərək API sorğuları vasitəsilə sualları çəkən və istifadəçinin cavablarını yoxlayan interaktiv bir Quiz tətbiqi hazırlamışam.",
    link: [
      "https://mhrrmlieltac.github.io/QuizApp.github.io/",
      "https://github.com/MhrrmliEltac/QuizApp.github.io",
    ],
    technologia: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8654,
    title: "Todo List",
    description:
      "HTML, CSS və JavaScript istifadə edərək drag-and-drop funksionallığına malik bir ToDo tətbiqi hazırlamışam. Bu, proqramlaşdırmaya yeni başladığım dövrdə hazırladığım layihələrdən biridir",
    link: [
      "https://mhrrmlieltac.github.io/To-do-List/",
      "https://github.com/MhrrmliEltac/To-do-List",
    ],
    technologia: ["HTML", "CSS", "JavaScript"],
  },
];
