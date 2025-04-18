import React from "react";
import AvatarImg from "../../assets/WhatsApp Image 2025-04-17 at 23.32.39.jpeg";
import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { SkillData, SkillType } from "../../_mock/Skills";

const InfoSidebar: React.FC = () => {
  return (
    <aside className="inset-y-[2rem] inset-x-[1%] 2xl:flex hidden flex-col bg-white rounded-xl fixed w-[250px]">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="mt-10 flex flex-col items-center gap-5">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img
                className="rounded-full w-[100px] h-[100px] border-2 border-[#131313]"
                src={AvatarImg}
                alt="avatar-img"
              />
              <h4 className="text-[#131313] font-semibold text-[18px]">
                Eltac Məhərrəmli
              </h4>
              <span className="rounded-[50px] bg-[#F78F421A] text-[#F78F42] font-medium text-[12px] px-[12px] py-[4px]">
                Frontend Developer
              </span>
            </div>
            <div className="flex items-center justify-center gap-5">
              <motion.a
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/eltac2000"
                target="_blank"
              >
                <Facebook color="#131313" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                href="https://github.com/MhrrmliEltac"
                target="_blank"
              >
                <Github color="#131313" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/eltac-meherremli/"
                target="_blank"
              >
                <Linkedin color="#131313" />
              </motion.a>
              <motion.a
                whileTap={{ scale: 1.3 }}
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/eltac.mhrrmli1/"
                target="_blank"
              >
                <Instagram color="#131313" />
              </motion.a>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-2 border-b pb-5 w-[90%]">
            <ul className="flex flex-col gap-2">
              <li className="text-[12px] flex gap-5">
                <span className="text-[#131313] font-[400]">Email:</span>
                <span className="text-[#888888] font-[400]">
                  meherremlieltac14@gmail.com
                </span>
              </li>
              <li className="text-[14px] flex gap-5 justify-between">
                <span className="text-[#131313] font-[400]">Tel:</span>
                <span className="text-[#888888] font-[400]">
                  +994 51 767 37 68
                </span>
              </li>
              <li className="text-[14px] flex gap-5 justify-between">
                <span className="text-[#131313] font-[400]">Şəhər:</span>
                <span className="text-[#888888] font-[400]">Azerbaijan</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 border-b pb-5 w-[90%]">
            <span className="flex w-full items-start justify-start text-[#131313] font-semibold text-[16px]">
              Əsas bacarıqlar
            </span>
            <div className="flex flex-wrap gap-2 text-[#888888] w-[70%]">
              {SkillData &&
                SkillData.length > 0 &&
                SkillData.map((skill: SkillType) => (
                  <span key={skill.id} className="text-[12px]">
                    {skill.skill}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default InfoSidebar;
