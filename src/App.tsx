import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MainLayout from "./components/layout/MainLayout";
import EducationSection from "./components/sections/EducationSection";
import Expreience from "./components/sections/Expreience";
import GetInTouch from "./components/sections/GetInTouch";
import HeroSection from "./components/sections/HeroSection";
import Portfolio from "./components/sections/Portfolio";
import Navigation from "./components/sidebar/Navigation";
import "./App.css";
import InfoSidebar from "./components/sidebar/InfoSidebar";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-[#F6F6F6] h-full font-inter pb-5">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Header />
                <InfoSidebar />
                <Navigation />
                <HeroSection />
                <EducationSection />
                <Portfolio />
                <Expreience />
                <GetInTouch />
                <Footer />
              </MainLayout>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
