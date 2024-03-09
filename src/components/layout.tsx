import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  centerX: boolean;
  centerY: boolean;
}

const Layout = (props: Props) => {
  const { children, centerX, centerY } = props;

  return (
    <div className="w-full h-dvh bg-white overflow-auto flex flex-col">
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
  );
};

export default Layout;
