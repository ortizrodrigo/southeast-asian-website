import React from "react";
import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  underline?: boolean;
  bold?: boolean;
}

function ExternalLink({ href, children, underline = false, bold = false }: ExternalLinkProps) {
  const style: React.CSSProperties = {
    textDecoration: underline ? "underline" : "none",
    fontWeight: bold ? "bold" : "normal",
  };

  return (
    <a href={href} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ExternalLink;
