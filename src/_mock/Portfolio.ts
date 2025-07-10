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
      "Sonner",
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
      "Sonner",
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
    id: 2,
    title: "Furniture Website",
    description:
      "Bu, müxtəlif mebel məhsullarının onlayn satışını təmin edən veb səhifədir. Saytın frontend hissəsi React, TypeScript, Framer Motion və Redux kimi texnologiyalarla qurulmuşdur. Backend isə Express.js və MongoDB istifadə edilərək hazırlanmışdır. Saytda məhsul filtrasiyası, kateqoriya əsaslı axtarış, istifadəçi hesabları, səbət funksionallığı və dinamik animasiyalar mövcuddur.",
    link: ["https://furnite-ui.vercel.app/"],
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
    link: ["https://book-sto.vercel.app/"],
  },
  {
    id: 5,
    title: "Coza Store",
    description:
      "'Coza Store' adlanan bu E-Commerce veb səhifəsini Fake Store API-dan istifadə edərək hazırlamışam. Layihəni React ilə həyata keçirmişəm. Autentifikasiya və autorizasiya əməliyyatlarını Node JS ilə icra etmişəm. Github-dan endirərək serveri başladıb baxa bilərsiz",
    link: [
      "https://e-commerce-website-fake.vercel.app/",
      "https://github.com/MhrrmliEltac/ServerNodeJS.git",
    ],
    technologia: ["React", "Material UI", "React-Router-Dom", "Redux-Toolkit"],
  },
  {
    id: 6,
    title: "Weather",
    description: "Burada şəhərlər üzrə axtarış edərək hava şəraitini göstərir.",
    link: ["https://weatherprogram.netlify.app/"],
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
    title: "ToDo List",
    description:
      "TypeScript-də yeni başladığım üçün sadə dizayn bir todo list app düzəltməyi fikirləşdim. Sadə olmasa da düzəltməyi bacardıq. Redux-toolkit istifadə edərək ərsəyə gətirdim",
    link: ["https://todo-listapp-typescript.vercel.app/"],
    technologia: ["TypeScript", "Material UI"],
  },
];
