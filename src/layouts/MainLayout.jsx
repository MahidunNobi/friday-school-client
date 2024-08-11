import { Outlet } from "react-router-dom";
import Footer from "../componants/Footer/Footer";
import Navbar from "../componants/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between text-gray-800 bg-gray-100 dark:text-white dark:bg-base-300">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
