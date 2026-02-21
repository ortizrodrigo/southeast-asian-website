import { Center } from "../../components";
import Button from "../../components/Button/Button";

export interface SenateLink {
  label: string;
  href: string;
}

interface SenateLinksProps {
  links: SenateLink[];
}

function SenateLinks({ links }: SenateLinksProps) {
  return (
    <Center gap={16} padding={16}>
      {links.map((link) => (
        <Button
          key={link.label}
          onClick={() => window.open(link.href, "_blank", "noopener,noreferrer")}
        >
          {link.label}
        </Button>
      ))}
    </Center>
  );
}

export default SenateLinks;
