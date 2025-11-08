import React from "react";
import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  underline?: boolean;
  bold?: boolean;
}

function Link({ href, children, underline = false, bold = false }: LinkProps) {
  const style: React.CSSProperties = {
    textDecoration: underline ? "underline" : "none",
    fontWeight: bold ? "bold" : "normal",
  };

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}

export default Link;
