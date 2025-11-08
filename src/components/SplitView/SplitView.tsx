import "./SplitView.css";
import { Children } from "react";
import type { ReactNode, CSSProperties } from "react";

interface SplitViewProps {
  children: ReactNode;
  spaceAround?: string | number;
  direction?: "row" | "column";
}

function SplitView({ children, spaceAround = "16px", direction = "row" }: SplitViewProps) {
  const childArray = Children.toArray(children);

  if (childArray.length === 0) return null;

  const style: CSSProperties =
    direction === "row"
      ? {
          gridTemplateColumns: `repeat(${childArray.length}, 1fr)`,
          columnGap: spaceAround,
          padding: spaceAround,
        }
      : {
          gridTemplateRows: `repeat(${childArray.length}, 1fr)`,
          rowGap: spaceAround,
          padding: spaceAround,
        };

  return (
    <div className={`split-view split-${direction}`} style={style}>
      {childArray.map((child, index) => (
        <div className="split-child" key={`child-${index}`}>
          {child}
        </div>
      ))}
    </div>
  );
}

export default SplitView;
