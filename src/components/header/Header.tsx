import { Menu, PaintBucket } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";
import { useEffect, useState } from "react";
import { Dropdown, MenuProps, Space } from "antd";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "My Profile",
    icon: <FaUser color="#888888" size={13} />,
    onClick: () => {
      const el = document.getElementById("hero");
      el?.scrollIntoView({ behavior: "instant" });
    },
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Education",
    icon: <FaBook color="#888888" size={13} />,
    onClick: () => {
      const el = document.getElementById("education");
      el?.scrollIntoView({ behavior: "instant" });
    },
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: "Portfolio",
    icon: <AiOutlineProject color="#888888" className="-rotate-90" size={13} />,
    onClick: () => {
      const el = document.getElementById("portfolio");
      el?.scrollIntoView({ behavior: "instant" });
    },
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: "Experience",
    icon: <MdOutlineWork color="#888888" size={13} />,
    onClick: () => {
      const el = document.getElementById("experience");
      el?.scrollIntoView({ behavior: "instant" });
    },
  },
  {
    type: "divider",
  },
  {
    key: "5",
    label: "Contact",
    icon: <BsFillTelephoneFill color="#888888" size={13} />,
    onClick: () => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "instant" });
    },
  },
  {
    type: "divider",
  },
];

const Header: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [scrollPos]);

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5 }}
      className={`${
        scrollPos > 0 &&
        "fixed transition duration-300 top-0 -translate-y-[10%] left-[10%] z-10"
      } xl:w-[65%] w-[80%] mx-auto py-10 max-lg:flex hidden justify-between gap-[24px] flex-col duration-300 transition-all`}
    >
      <div
        className={`rounded-[80px] bg-white py-3 flex justify-between items-center shadow-md`}
      >
        <Avatar className="ml-3">
          <AvatarImage src="/image.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="pr-6 flex gap-5">
          <PaintBucket color="#F78F42" />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Menu color="#888888" className="cursor-pointer" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
