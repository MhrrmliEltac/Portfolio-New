import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";
import AvatarImg from "../../assets/WhatsApp Image 2025-04-17 at 23.32.39.jpeg";
import UiVerseButton from "../general/UiVerseButton";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      className="xl:w-[65%] w-[90%] mx-auto py-6 lg:py-10 flex justify-between gap-[24px] flex-col"
      id="hero"
    >
      <div className="flex justify-between items-center flex-wrap gap-6 lg:gap-10 bg-white rounded-xl p-6 lg:p-16 transition-all duration-300 hover:shadow-md">
        <div className="flex flex-col gap-4 lg:gap-5 2xl:w-2/5 w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#131313] leading-tight">
            Frontend Developer
          </h3>
          <p className="text-sm sm:text-base lg:text-[18px] text-[#888888] font-[400] leading-relaxed">
            {t(
              "Mən, React, TypeScript və müasir CSS framework-lərindən istifadə edərək ideyaları interaktiv veb təcrübələrə çevirən praktiki təcrübəyə malik bir Frontend Developeram. Piksel dəqiqliyində dizayna, performansa və təmiz koda xüsusi önəm verirəm. Flutter sahəsin də təcrübə qazanmağa və real layihələr də iştirak etməyə həvəsliyəm. Front end developer təcrübəsinə sahib bir developerəm"
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <a
              href="#contact"
              className="bg-[#F78F42] hover:scale-110 duration-500 transition-all rounded-[56px] max-w-[182px] w-full max-h-full h-12 lg:h-14 flex justify-center items-center gap-2"
            >
              <span className="text-[#131313] text-sm sm:text-base lg:text-[18px] font-medium">
                {t("Əlaqə saxla")}
              </span>
              <div className="rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center text-white">
                <ArrowRight
                  color="#131313"
                  size={20}
                  className="lg:w-6 lg:h-6"
                />
              </div>
            </a>
            <UiVerseButton />
          </div>
        </div>
        <div className="bg-transparent w-full sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-lg flex items-center justify-center lg:items-end lg:justify-end">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={AvatarImg}
            alt="avatar-img"
            className="w-full h-full rounded-2xl lg:rounded-3xl cursor-pointer object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
