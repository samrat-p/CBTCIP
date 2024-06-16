import { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_70%_30%,#000_35%,#63e_100%)]">
      {children}
    </div>
  );
};

export default Background;
