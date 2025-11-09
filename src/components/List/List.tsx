import React from "react";
import type { ReactNode } from "react";

interface ListProps {
  entries?: string[];
  children?: ReactNode;
  gap?: string;
  bullets?: boolean;
  center?: boolean;
}

function List({ entries, children, gap = "0", bullets = false, center = false }: ListProps) {
  return (
    <div className="list">
      {entries && (
        <ul
          style={{
            listStyleType: bullets ? "disc" : "none",
            paddingLeft: bullets ? undefined : 0,
            textAlign: center ? "center" : "left",
          }}
        >
          {entries.map((entry, index) => (
            <li
              key={index}
              style={{
                marginBottom: gap,
              }}
            >
              {entry}
            </li>
          ))}
        </ul>
      )}

      {children && (
        <div
          style={{
            textAlign: center ? "center" : "left",
          }}
        >
          {React.Children.map(children, (child) => (
            <div
              style={{
                marginBottom: gap,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
