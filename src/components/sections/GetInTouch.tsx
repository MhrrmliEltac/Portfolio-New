import React, { FormEvent } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";
import CartTouch from "../general/Card";
import Heading from "../general/Heading";

const GetInTouch: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      className="xl:w-[65%] w-[80%] mx-auto py-10 flex justify-between gap-[24px] flex-col"
      id="contact"
    >
      <Heading text="Əlaqə Saxla" />
      <div className="flex gap-[24px] max-md:flex-wrap">
        <form className="flex gap-10 flex-col xl:w-3/4 md:w-1/2 bg-white rounded-xl p-5 transition-all duration-300 hover:shadow-md">
          <div className="flex gap-10 max-md:flex-wrap">
            <div className="flex flex-col w-full">
              <label
                htmlFor="name"
                className="font-[400] text-[14px] text-[#131313] mb-2"
              >
                Ad
              </label>
              <Input
                type="text"
                name="name"
                id="name"
                className="bg-[#F6F6F6]"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="font-[400] text-[14px] text-[#131313] mb-2"
              >
                Email
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                className="bg-[#F6F6F6]"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="subject"
              className="font-[400] text-[14px] text-[#131313] mb-2"
            >
              Mövzu
            </label>
            <Input
              type="text"
              name="subject"
              id="subject"
              className="bg-[#F6F6F6]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="font-[400] text-[14px] text-[#131313] mb-2"
            >
              Mesaj
            </label>
            <Textarea className="bg-[#F6F6F6]" name="message" id="message" />
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-fit bg-[#F78F42] text-[#131313] hover:bg-[#F78F42] hover:shadow-md duration-300 transition-all"
          >
            Mesaj göndər
          </Button>
        </form>
        <div className="xl:w-1/4 md::w-1/2 w-full flex flex-col transition-all duration-300">
          <CartTouch />
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
