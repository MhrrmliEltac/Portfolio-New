import {
  ArrowDown,
  BookOpen,
  BriefcaseBusiness,
  Code,
  House,
  PaintBucket,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { changeLang } from "../redux/slice/langSlice";
import i18n from "../../lib/i18n/config";

const Navigation: React.FC = () => {
  const [active, setActive] = useState<string>("hero");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const changeLangStorage = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = (e.target as HTMLLIElement).innerText;
    dispatch(changeLang(value.toLowerCase()));
  };

  const handleClick = (name: string) => {
    setActive(name);
  };

  const showLang = () => {
    setShowMenu(!showMenu);
  };

  return (
    <aside className="inset-y-[2rem] inset-x-[90%] xl:flex hidden flex-col bg-white rounded-xl fixed w-20 h-[700px]">
      <div className="flex flex-col items-center gap-2 justify-center w-full pt-8 relative">
        <PaintBucket color="#F78F42" />
        <div
          className="flex items-center gap-2 cursor-pointer uppercase"
          onClick={showLang}
        >
          <span className="uppercase flex gap-1 items-center cursor-pointer">
            {i18n.language} <ArrowDown size={16} />
          </span>
        </div>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`absolute top-[100%] shadow-md w-24 h-24 flex items-center justify-center bg-white rounded-xl mt-3 duration-300 transition-all`}
          >
            <ul className="w-fit" onClick={showLang}>
              <li
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  changeLangStorage(e)
                }
                className="cursor-pointer border-b pt-1 hover:bg-[#8888888] w-full flex justify-center items-center"
              >
                <span>AZ</span>
              </li>
              <li
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  changeLangStorage(e)
                }
                className="cursor-pointer border-b pt-1 hover:bg-[#8888888] w-full flex justify-center items-center"
              >
                <span>EN</span>
              </li>
              <li
                onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                  changeLangStorage(e)
                }
                className="cursor-pointer border-b pt-1 hover:bg-[#8888888] w-full flex justify-center items-center"
              >
                <span>RU</span>
              </li>
            </ul>
          </motion.div>
        )}
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
