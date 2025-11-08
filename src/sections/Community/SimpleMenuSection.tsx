interface SimpleMenuSectionProps {
  title: string;
  entries: string[];
}

function SimpleMenuSection({ title, entries }: SimpleMenuSectionProps) {
  return (
    <div>
      <h3 className="community-section-menu-header">{title}</h3>
      {entries.map((entry, index) => (
        <p key={index} style={{ marginBottom: "8px" }}>
          {entry}
        </p>
      ))}
    </div>
  );
}

export default SimpleMenuSection;
