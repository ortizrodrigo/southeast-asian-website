import "./Center.css";
import type { ReactNode, CSSProperties } from "react";

interface CenterProps {
  children: ReactNode;
  width?: string | number;
  column?: boolean;
  gap?: string | number;
  padding?: string | number;
}

function Center({ children, width, column = false, gap = 0, padding = 0 }: CenterProps) {
  const style: CSSProperties = {
    width,
    flexDirection: column ? "column" : "row",
    gap,
    padding,
  };

  return (
    <div className="center" style={style}>
      {children}
    </div>
  );
}

export default Center;
