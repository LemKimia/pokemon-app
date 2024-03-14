import { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className="flex justify-center bg-slate-900">
      <div className="layout-container min-w-full max-w-full bg-gray-400 md:min-w-[480px] md:max-w-[480px]">
        <Navbar />
        <div className="h-auto w-full overflow-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
