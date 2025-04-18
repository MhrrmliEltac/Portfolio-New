import React, { useEffect, useState } from "react";
import Heading from "../general/Heading";
import { ProjecData, ProjecDataType } from "../../_mock/Portfolio";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Pagination } from "antd";
import { motion } from "framer-motion";
import { sectionVariant } from "../../utils/Animation";

const Portfolio: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjecDataType[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projectData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setProjectData(ProjecData);
  }, []);

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      className="xl:w-[65%] w-[80%] mx-auto py-10 flex justify-between gap-[24px] flex-col duration-300"
      id="portfolio"
    >
      <Heading text="Portfolio" />
      <div className="duration-300 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {currentProjects &&
          currentProjects.length > 0 &&
          currentProjects?.map((project: ProjecDataType) => (
            <Card key={project.id} className="hover:shadow-md duration-300">
              <CardHeader className="font-bold text-lg">
                {project.title}
              </CardHeader>
              <CardContent className="flex flex-col justify-between gap-10 items-end">
                <p className="lg:text-sm text-[12px] max-sm:text-[10px] h-[150px] text-[#888888]">
                  {project.description}
                </p>
                <div className="flex flex-1 justify-end mt-auto">
                  <a href={`${project.link[0]}`} target="_blank">
                    <Button className="text-[#F78F42] bg-[#F78F421A] hover:bg-[#F78F42] hover:text-white outline-none">
                      Keçid et
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={projectData.length}
        onChange={(page) => setCurrentPage(page)}
        className="mx-auto custom-pagination"
      />
    </motion.section>
  );
};

export default Portfolio;
