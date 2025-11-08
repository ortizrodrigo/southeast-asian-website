import "./AlignTopLeft.css";
import type { ReactNode, CSSProperties } from "react";

interface AlignTopLeftProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
}

export default function AlignTopLeft({ children, width, height }: AlignTopLeftProps) {
  const style: CSSProperties = {
    width,
    height,
  };

  return (
    <div className="align-top-left" style={style}>
      {children}
    </div>
  );
}
