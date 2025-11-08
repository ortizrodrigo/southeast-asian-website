import { List } from "../../components";

interface SimpleMenuSectionProps {
  title: string;
  entries: string[];
}

function SimpleMenuSection({ title, entries }: SimpleMenuSectionProps) {
  return (
    <div>
      <h3 className="community-section-menu-header">{title}</h3>
      <List entries={entries} />
    </div>
  );
}

export default SimpleMenuSection;
