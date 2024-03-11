import { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  const location = useLocation();

  const isBattlePage = location.pathname === "/pokemon-catch";

  return (
    <div className="flex justify-center bg-slate-900">
      <div
        className={`layout-container min-w-full max-w-full  md:min-w-[480px] md:max-w-[480px] ${
          isBattlePage ? "bg-battle-image" : "bg-gray-400 bg-cover"
        }`}
      >
        <Navbar />
        <div className="w-full h-screen overflow-auto  py-4 px-8 flex flex-col">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
