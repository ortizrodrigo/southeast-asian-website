import { Link } from "../../components";

export interface MenuEntryProps {
  name: string;
  label: string;
  description: string;
  href?: string;
}

function MenuEntry({ name, label, description, href }: MenuEntryProps) {
  return (
    <div>
      <p>
        {href ? (
          <Link href={href} underline bold>
            {name}
          </Link>
        ) : (
          <strong>{name}</strong>
        )}
        , <em>{label}</em>
      </p>
      <p>{description}</p>
    </div>
  );
}

export default MenuEntry;
