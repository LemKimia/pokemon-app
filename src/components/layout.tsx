import { ReactNode } from "react";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";
interface Props {
  children: ReactNode;
  centerX: boolean;
  centerY: boolean;
}

const Layout = (props: Props) => {
  const { children, centerX, centerY } = props;

  return (
    <div className="flex justify-center bg-slate-900">
      <div className="layout-container min-w-full max-w-full bg-gray-400 md:min-w-[480px] md:max-w-[480px]">
        <Navbar />
        <div
          className={cn(
            "w-full h-screen container grow py-4 px-8 flex flex-col",
            centerX && "items-center",
            centerY && "justify-center"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
