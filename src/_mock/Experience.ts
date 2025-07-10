export interface JobDataType {
  id: number;
  company: string;
  jobTitle: string;
  date: string;
  description: string;
}

export const ExperienceData: JobDataType[] = [
  {
    id: 0,
    company: "E.S.A.M Innovations",
    jobTitle: "Junior Front End Developer",
    date: "19.02.2025 - present",
    description:
      "ParkCinema layihəsində veb sayt və admin panel üzərində dəyişikliklər və optimizasiyalar etdim.\n Ideal Kredit platformasında funksional təkmilləşdirmələr həyata keçirdim.\n BQT admin panelində CRUD əməliyyatlarını və istifadəçi/rol idarəetməsi kimi funksionallıqları üzərin də işləyirəm.\n Layihələrdə Zustand ilə state management istifadə edərək mövcud kodların strukturlaşdırılmasını və performansını yaxşılaşdırdım.\n Backend developer ilə sıx əməkdaşlıq edərək inteqrasiya olunmuş API-lərlə məlumat axınını uğurla idarə etdim.",
  },
  {
    id: 1,
    company: "Buta Group Azerbaijan",
    jobTitle: "Front End Developer Intern",
    date: "23.10.2024 - 16.02.2025",
    description:
      "React.js, TypeScript, Material UI, Tailwind CSS istifadə edərək API-larla işləyən modern veb sayt hazırladım.\n Web API-lərlə inteqrasiya olunmuş real layihələr üzərində işlədim.\n Bitrix24-ün Web API-ları ilə işlədim. \n ERP və CRM sistemləri ilə tanış oldum.\n Bitrix24 və Odoo platformaları ilə işlədim.",
  },
  {
    id: 2,
    company: "CodSoft",
    jobTitle: "Web Developer",
    date: "16.06.2024 - 16.07.2024",
    description:
      "HTML, CSS və JavaScript istifadə edərək müxtəlif səhifələr və komponentlər hazırladım.\n Verilən tapşırıqları vaxtı vaxtında yerinə yetirdim",
  },
];
