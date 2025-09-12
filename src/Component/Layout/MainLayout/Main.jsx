import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/SharedPages/Navbar/Navbar";
import BreadcrumbHeader from "../../BreadcrumbHeader/BreadcrumbHeader";
import FooterSwitcher from "../../Pages/SharedPages/Footer/FooterSwitcher/FooterSwitcher";

const Main = () => {
  return (
    <div>
      <Navbar />
      <BreadcrumbHeader /> {/* Shown only on non-home pages */}
      <Outlet />
      <FooterSwitcher />
    </div>
  );
};

export default Main;
