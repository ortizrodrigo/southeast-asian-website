import "./SenateSection.css";
import { Link, Center } from "../../components";
import { senateLinks } from "./data";

function SenateLinks() {
  return (
    <Center gap={16} padding={16}>
      {senateLinks.map((link) => (
        <div className="senate-link">
          <Link href={link.href} bold>
            {link.label}
          </Link>
        </div>
      ))}
    </Center>
  );
}

export default SenateLinks;
