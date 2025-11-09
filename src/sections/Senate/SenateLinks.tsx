import { Center } from "../../components";
import Button from "../../components/Button/Button";
import { senateLinks } from "./data";

function SenateLinks() {
  return (
    <Center gap={16} padding={16}>
      {senateLinks.map((link) => (
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
