import type { ReactNode, CSSProperties } from "react";

interface ListProps {
  entries?: string[];
  children?: ReactNode;
  gap?: string | number;
  bullets?: boolean;
  center?: boolean;
}

export default function List({
  entries,
  children,
  gap = 0,
  bullets = false,
  center = false,
}: ListProps) {
  const listStyle: CSSProperties = {
    listStyleType: bullets ? "disc" : "none",
    paddingLeft: bullets ? undefined : 0,
    textAlign: center ? "center" : "left",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap,
  };

  const containerStyle: CSSProperties = {
    textAlign: center ? "center" : "left",
    display: "flex",
    flexDirection: "column",
    gap,
  };

  return (
    <div className="list">
      {entries && (
        <ul style={listStyle}>
          {entries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}

      {children && <div style={containerStyle}>{children}</div>}
    </div>
  );
}
