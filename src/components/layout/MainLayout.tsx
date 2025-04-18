import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <section className="max-w-[1920px] mx-auto">{children} </section>;
};

export default MainLayout;
