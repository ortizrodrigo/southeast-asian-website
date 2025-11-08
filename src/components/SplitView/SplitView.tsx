import "./SplitView.css";
import { Children } from "react";
import type { ReactNode, CSSProperties } from "react";

interface SplitViewProps {
  children: ReactNode;
  gap?: string | number;
  padding?: string | number;
  column?: boolean;
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: string | number;
}

function SplitView({
  children,
  gap = "0",
  padding = "0",
  column = false,
  justifyContent = "center",
  alignItems = "center",
  width = "100%",
}: SplitViewProps) {
  const childArray = Children.toArray(children);

  if (childArray.length === 0) return null;

  const style: CSSProperties = {
    display: "grid",
    width,
    gridTemplateColumns: column ? undefined : `repeat(${childArray.length}, 1fr)`,
    gridTemplateRows: column ? `repeat(${childArray.length}, 1fr)` : undefined,
    gap,
    padding,
  };

  return (
    <div className="split-view" style={style}>
      {childArray.map((child, index) => (
        <div className="split-child" key={`child-${index}`} style={{ justifyContent, alignItems }}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default SplitView;
