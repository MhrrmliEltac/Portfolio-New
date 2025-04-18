export interface ProjecDataType {
  id: number;
  title: string;
  description: string;
  link: string[];
}

export const ProjecData: ProjecDataType[] = [
  {
    id: 1,
    title: "Bouquet | TypeScript",
    description:
      "Bu, onlayn satış üçün nəzərdə tutulmuş veb səhifədir. Layihədə TypeScript, Framer Motion, komponent əsaslı arxitektura və digər müasir React texnologiyalarından istifadə olunmuşdur.",
    link: ["https://bqt.studentall.az/"],
  },
  {
    id: 2,
    title: "Furniture Website | TypeScript",
    description:
      "Bu, müxtəlif mebel məhsullarının onlayn satışını təmin edən veb səhifədir. Saytın frontend hissəsi React, TypeScript, Framer Motion və Redux kimi texnologiyalarla qurulmuşdur. Backend isə Express.js və MongoDB istifadə edilərək hazırlanmışdır. Saytda məhsul filtrasiyası, kateqoriya əsaslı axtarış, istifadəçi hesabları, səbət funksionallığı və dinamik animasiyalar mövcuddur.",
    link: ["https://furnite-ui.vercel.app/"],
  },
  {
    id: 3,
    title: "PopcornoPolis | React",
    description:
      "React-da yaratdğım bu saytda json obyekt üzərin də işləyərək məlumatları gətirib səhifə də göstərmişəm. Json obyekt içərisin də axtarış etmək, səbətə məhsul əlavə etmək, silmək, sayını artırıb-azaltmaq, ümumi qiyməti görmək üçün bu funksiyaları etmişəm.",
    link: ["https://popcornopolis.vercel.app/"],
  },
  {
    id: 4,
    title: "AMO Corporate Group",
    description:
      "AMO Corporate Group üçün hazırladığım veb sayt React və TypeScript ilə yazılmışdır. Hal-hazırda deploy olunmayıb. Gözlənilir.",
    link: ["https://amo-group-gamma.vercel.app/index.html"],
  },
  {
    id: 5,
    title: "Coza Store | React",
    description:
      "'Coza Store' adlanan bu E-Commerce veb səhifəsini Fake Store API-dan istifadə edərək hazırlamışam. Layihəni React ilə həyata keçirmişəm. Autentifikasiya və autorizasiya əməliyyatlarını Node JS ilə icra etmişəm. Github-dan endirərək serveri başladıb baxa bilərsiz",
    link: [
      "https://e-commerce-website-fake.vercel.app/",
      "https://github.com/MhrrmliEltac/ServerNodeJS.git",
    ],
  },
  {
    id: 6,
    title: "Weather | React",
    description: "Burada şəhərlər üzrə axtarış edərək hava şəraitini göstərir.",
    link: ["https://weatherprogram.netlify.app/"],
  },
  {
    id: 7,
    title: "Show Movie | React",
    description:
      "Burada istədiyiniz kinoları axtarış edə bilərsiz. Kinonu listə əlavə edə bilərsiz. Listin adını qoya bilərsiz. Kinonun omdbAPİ-a gedib o kinonu göstərir.",
    link: ["https://showmoviereact.netlify.app/"],
  },
  {
    id: 8,
    title: "ToDo List | TypeScript",
    description:
      "TypeScript-də yeni başladığım üçün sadə dizayn bir todo list app düzəltməyi fikirləşdim. Sadə olmasa da düzəltməyi bacardıq. Redux-toolkit istifadə edərək ərsəyə gətirdim",
    link: ["https://todo-listapp-typescript.vercel.app/"],
  },
];
