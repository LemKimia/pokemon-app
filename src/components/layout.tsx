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

  const isBattlePage = location.pathname.startsWith("/pokemon-catch");

  return (
    <div className="flex justify-center bg-slate-900">
      <div
        className={`layout-container min-w-full max-w-full md:min-w-[480px] md:max-w-[480px] ${
          isBattlePage ? "bg-battle-image" : "bg-neutral-800 bg-cover"
        }`}
      >
        <Navbar />
        <div className="h-full w-full overflow-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
