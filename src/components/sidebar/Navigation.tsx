import {
  BookOpen,
  BriefcaseBusiness,
  Code,
  House,
  PaintBucket,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [active, setActive] = useState<string>("hero");

  const handleClick = (name: string) => {
    setActive(name);
  };

  return (
    <aside className="inset-y-[2rem] inset-x-[90%] xl:flex hidden flex-col bg-white rounded-xl fixed w-20 h-[700px]">
      <div className="flex justify-center w-full pt-8">
        <PaintBucket color="#F78F42" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 h-full">
        <motion.a
          href="#hero"
          whileTap={{ scale: 1.3 }}
          whileHover={{
            scale: 1.1,
          }}
          className={`rounded-[8px] ${
            active === "hero" && "bg-[#F78F42]"
          } px-3 py-3 cursor-pointer`}
          onClick={() => handleClick("hero")}
        >
          <House color="#131313" className="cursor-pointer" />
        </motion.a>
        <motion.a
          href="#education"
          whileTap={{ scale: 1.3 }}
          whileHover={{
            scale: 1.1,
          }}
          className={`rounded-[8px] ${
            active === "education" && "bg-[#F78F42]"
          } px-3 py-3 cursor-pointer`}
          onClick={() => handleClick("education")}
        >
          <BookOpen color="#131313" className="cursor-pointer" />
        </motion.a>
        <motion.a
          href="#portfolio"
          whileTap={{ scale: 1.3 }}
          whileHover={{
            scale: 1.1,
          }}
          className={`rounded-[8px] ${
            active === "portfolio" && "bg-[#F78F42]"
          } px-3 py-3 cursor-pointer`}
          onClick={() => handleClick("portfolio")}
        >
          <Code color="#131313" className="cursor-pointer" />{" "}
        </motion.a>
        <motion.a
          href="#experience"
          whileTap={{ scale: 1.3 }}
          whileHover={{
            scale: 1.1,
          }}
          className={`rounded-[8px] ${
            active === "experience" && "bg-[#F78F42]"
          } px-3 py-3 cursor-pointer`}
          onClick={() => handleClick("experience")}
        >
          <BriefcaseBusiness color="#131313" className="cursor-pointer" />{" "}
        </motion.a>
        <motion.a
          href="#contact"
          whileTap={{ scale: 1.3 }}
          whileHover={{
            scale: 1.1,
          }}
          className={`rounded-[8px] ${
            active === "contact" && "bg-[#F78F42]"
          } px-3 py-3 cursor-pointer`}
          onClick={() => handleClick("contact")}
        >
          <Phone color="#131313" className="cursor-pointer" />{" "}
        </motion.a>
      </div>
    </aside>
  );
};

export default Navigation;
