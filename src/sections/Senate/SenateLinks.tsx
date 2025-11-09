import "./SenateSection.css";
import { ExternalLink, Center } from "../../components";
import { senateLinks } from "./data";

function SenateLinks() {
  return (
    <Center gap={16} padding={16}>
      {senateLinks.map((link) => (
        <div className="senate-link" key={link.label}>
          <ExternalLink href={link.href} bold>
            {link.label}
          </ExternalLink>
        </div>
      ))}
    </Center>
  );
}

export default SenateLinks;
