import "./Center.css";
import type { ReactNode, CSSProperties } from "react";

interface CenterProps {
  children: ReactNode;
  width?: string | number;
}

export default function Center({ children, width }: CenterProps) {
  const style: CSSProperties = {
    width,
  };

  return (
    <div className="center" style={style}>
      {children}
    </div>
  );
}
