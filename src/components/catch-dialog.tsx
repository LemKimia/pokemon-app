import * as React from "react";

type CatchDialogProps = {
  children: React.ReactNode;
  show: boolean;
};

const CatchDialog = ({ children, show }: CatchDialogProps) => {
  if (show) {
    return (
      <div className="fixed inset-y-0 z-50 flex h-full min-w-full max-w-full items-center justify-center bg-black/50 md:min-w-[480px] md:max-w-[480px]">
        <div className="w-1/2 rounded-xl border-2 border-black bg-white p-5 ">
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CatchDialog;
