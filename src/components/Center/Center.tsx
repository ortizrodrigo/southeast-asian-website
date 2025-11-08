import "./Center.css";
import type { ReactNode, CSSProperties } from "react";

interface CenterProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
}

export default function Center({ children, width, height }: CenterProps) {
  const style: CSSProperties = {
    width,
    height,
  };

  return (
    <div className="center" style={style}>
      {children}
    </div>
  );
}
