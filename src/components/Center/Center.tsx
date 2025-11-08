import type { ReactNode } from "react";

interface CenterProps {
  children: ReactNode;
}

export default function Center({ children }: CenterProps) {
  return <div className="center">{children}</div>;
}
