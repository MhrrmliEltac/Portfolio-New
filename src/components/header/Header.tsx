import { Menu, PaintBucket } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";

const Header: React.FC = () => {
  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.5 }}
      className="xl:w-[65%] w-[80%] mx-auto py-10 max-lg:flex hidden justify-between gap-[24px] flex-col duration-300 transition-all"
    >
      <div className="rounded-[80px] bg-white py-3 flex justify-between items-center">
        <Avatar className="ml-3">
          <AvatarImage src="/image.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="pr-6 flex gap-5">
          <PaintBucket color="#F78F42" />
          <Menu color="#888888" />
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
