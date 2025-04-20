import React from "react";
import Heading from "../general/Heading";
import { ExperienceData, JobDataType } from "../../_mock/Experience";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";
import { useTranslation } from "react-i18next";

const Expreience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      className="xl:w-[65%] w-[80%] mx-auto py-10 flex-col"
      id="experience"
    >
      <Heading text="Təcrübə" />
      <div className="mt-0 px-[40px] py-[40px] bg-white rounded-xl flex flex-wrap gap-5 hover:shadow-md duration-300">
        {ExperienceData &&
          ExperienceData.length > 0 &&
          ExperienceData.map((experience: JobDataType) => (
            <div
              key={experience.id}
              className="flex justify-between items-center p-3 border-b flex-wrap"
            >
              <div className="xl:w-1/2 w-full flex flex-col gap-2">
                <span className="text-[#131313] text-lg font-semibold">
                  {experience.company}
                </span>
                <span className="bg-[#F78F421A] text-[#F78F42] font-[500] text-[12px] block w-fit rounded-lg px-2 py-1">
                  {experience.date}
                </span>
              </div>
              <div className="xl:w-1/2 w-full flex flex-col">
                <span className="text-[18px] font-medium text-[#131313] text-start">
                  {experience.jobTitle}
                </span>
                <p className="text-[#888888]">{t(experience.description)}</p>
              </div>
            </div>
          ))}
      </div>
    </motion.section>
  );
};

export default Expreience;
