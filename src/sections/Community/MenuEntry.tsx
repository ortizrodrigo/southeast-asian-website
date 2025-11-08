export interface MenuEntryProps {
  name: string;
  label: string;
  description: string;
  href?: string;
}

function MenuEntry({ name, label, description, href }: MenuEntryProps) {
  return (
    <div className="community-section-menu-entry">
      <p>
        {href ? (
          <a href={href} style={{ textDecoration: "underline", fontWeight: "bold" }}>
            {name}
          </a>
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
