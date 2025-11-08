interface MenuEntryProps {
  name: string;
  label: string;
  description: string;
}

function MenuEntry({ name, label, description }: MenuEntryProps) {
  return (
    <div>
      <p>
        <strong>{name}</strong>, <em>{label}</em>
      </p>
      <p>{description}</p>
    </div>
  );
}

export default MenuEntry;
