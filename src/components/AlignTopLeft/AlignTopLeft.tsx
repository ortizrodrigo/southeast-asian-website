import "./AlignTopLeft.css";
import type { ReactNode, CSSProperties } from "react";

interface AlignTopLeftProps {
  children: ReactNode;
  width?: string | number;
  gap?: string | number;
  padding?: string | number;
}

function AlignTopLeft({ children, width, gap = 0, padding = 0 }: AlignTopLeftProps) {
  const style: CSSProperties = {
    width,
    gap,
    padding,
  };

  return (
    <div className="align-top-left" style={style}>
      {children}
    </div>
  );
}

export default AlignTopLeft;
