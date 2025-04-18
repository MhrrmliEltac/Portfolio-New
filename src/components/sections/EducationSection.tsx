import React from "react";
import Heading from "../general/Heading";
import { EducationData, EducationDataType } from "../../_mock/Education";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";

const EducationSection: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      className="xl:w-[65%] w-[80%] mx-auto py-10 flex justify-between gap-[24px] flex-col duration-300"
      id="education"
    >
      <Heading text="Təhsil" />
      <div className="mt-0 px-[40px] py-[40px] bg-white rounded-xl flex flex-wrap gap-5 duration-300 hover:shadow-md">
        {EducationData &&
          EducationData.length > 0 &&
          EducationData.map((education: EducationDataType) => (
            <div
              key={education.id}
              className="flex justify-between items-center p-3 border-b flex-wrap duration-300"
            >
              <div className="xl:w-1/2 w-full flex flex-col gap-2">
                <span className="text-[#131313] text-lg font-semibold">
                  {education.university}
                </span>
                <span className="bg-[#F78F421A] text-[#F78F42] font-[500] text-[12px] block w-fit rounded-lg px-2 py-1">
                  {education.date}
                </span>
              </div>
              <div className="xl:w-1/2 w-full">
                <span className="text-[18px] font-medium text-[#131313]">
                  {education.ixtisas}
                </span>
                <p className="text-[#888888]">{education.description}</p>
              </div>
            </div>
          ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;
