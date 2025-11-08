import React from "react";
import "./List.css";
import type { ReactNode } from "react";

interface ListProps {
  entries?: string[];
  children?: ReactNode;
  spacing?: string;
}

function List({ entries, children, spacing = "0" }: ListProps) {
  return (
    <div className="list">
      {entries && (
        <ul>
          {entries.map((entry, index) => (
            <li
              key={index}
              style={{
                marginBottom: spacing,
              }}
            >
              {entry}
            </li>
          ))}
        </ul>
      )}

      {children && (
        <div>
          {React.Children.map(children, (child) => (
            <div
              style={{
                marginBottom: spacing,
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
