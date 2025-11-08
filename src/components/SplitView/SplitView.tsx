import "./SplitView.css";
import { Children } from "react";
import type { ReactNode, CSSProperties } from "react";

interface SplitViewProps {
  children: ReactNode;
  spaceAround?: string | number;
  direction?: "row" | "column";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  width?: string | number;
}

function SplitView({
  children,
  spaceAround = "16px",
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  width = "100%",
}: SplitViewProps) {
  const childArray = Children.toArray(children);

  if (childArray.length === 0) return null;

  const style: CSSProperties = {
    display: "grid",
    width,
    gridTemplateColumns: direction === "row" ? `repeat(${childArray.length}, 1fr)` : undefined,
    gridTemplateRows: direction === "column" ? `repeat(${childArray.length}, 1fr)` : undefined,
    gap: spaceAround,
    padding: spaceAround,
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
