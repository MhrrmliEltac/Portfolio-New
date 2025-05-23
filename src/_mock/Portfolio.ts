export interface ProjecDataType {
  id: number;
  title: string;
  description: string;
  link: string[];
}

export const ProjecData: ProjecDataType[] = [
  {
    id: 99,
    title: "Rick and Morty | Flutter & Dart",
    description:
      "Bu mobil applikasiyada Rick and Morty seriyasının personajlarını göstərmişəm. Burada dio paketindən istifadə edərək, məlumatları gətirmişəm. Rick and Morty API-dan istifadə etmişəm. Personajların şəkillərini, adlarını, statusunu, növünü göstərmişəm. Həmçinin personajın üzərinə kliklədikdə onun haqqında ətraflı məlumatları göstərir.",
    link: ["https://github.com/MhrrmliEltac/Weather_App.git"],
  },
  {
    id: 113,
    title: "TigHubad | Flutter & Dart",
    description:
      "TigHubad applikasiyasın da söz bazanızı artırmaq üçün lüğət proqramıdı. Burada test işliyərək sözün mənasını tapmaq, sözün deyilişinə qulaq asmaq və lüğətdən söz axtarmaq bu kimi funksionallıqlar düşünürəm. Hələki dizayn hazırlanır",
    link: ["https://github.com/MhrrmliEltac/TigHubad.git"],
  },
  {
    id: 11,
    title: "Pagination | Flutter & Dart",
    description:
      "Burada istifadəçi səhifə də aşağı doğru hərəkət elətdirdikcə api-dan məlumatlar gəlir. State management olaraq Provider istifadə etmişəm.",
    link: ["https://github.com/MhrrmliEltac/Pagination_Flutter.git"],
  },
  {
    id: 12,
    title: "Weather App | Flutter & Dart",
    description:
      "Bu mobil applikasiya da api-dan gələn hava məlumatını ekranda göstərmişəm. Burada dio paketindən istifadə edərək, məlumatları gətirmişəm. Geolocator və geocoding vasitəsilə istifadəçinin məkanını alıb istək atmışam",
    link: ["https://github.com/MhrrmliEltac/Weather_App.git"],
  },
  {
    id: 1,
    title: "BookSto | TypeScript",
    description:
      "Bu sayt kitabların satışı üçün nəzərdə tutulmuşdur. Saytın frontend hissəsi React, TypeScript, Framer Motion və Redux kimi texnologiyalarla qurulmuşdur. Backend isə firebase authentication üçün və supabase isə storage üçün istifadə etmişəm.",
    link: ["https://book-sto.vercel.app/"],
  },
  {
    id: 1231,
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
