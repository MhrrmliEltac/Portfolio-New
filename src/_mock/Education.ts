export interface EducationDataType {
  id: number;
  university: string;
  ixtisas: string;
  date: string;
  description: string;
}

export const EducationData: EducationDataType[] = [
  {
    id: 0,
    university: "Azerbaijan Dövlət Neft və Sənaye Universiteti",
    ixtisas: "Kompyuter mühəndisliyi",
    date: "15.08.2021 - 31.05.2025",
    description:
      "ASOİU-da təhsil aldığım müddətdə alqoritmlər, verilənlər strukturu, proqram mühəndisliyi və web development sahələrində biliklər əldə etmişəm. Layihələrim vasitəsilə praktiki bacarıqlarımı artırmışam və müxtəlif texnologiyalarla işləmə təcrübəsi qazanmışam.",
  },
  {
    id: 1,
    university: "CodeForFuture",
    ixtisas: "Front End Developer",
    date: "15.02.2024 - 15.06.2024",
    description:
      "Azərbaycan Dövlət Təhsil və Elm nazirliyi tərəfindən təşkil edilmiş 'CodeForFuture' layihəsin də Front end developer təlimini bitirmişəm. Honour sertifikatı ilə təltif olunmuşam.",
  },
];
