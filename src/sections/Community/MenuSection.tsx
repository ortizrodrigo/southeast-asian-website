import MenuEntry from "./MenuEntry";
import type { MenuEntryProps } from "./MenuEntry";
import "./CommunitySection.css";

interface MenuSectionProps {
  title: string;
  entries: MenuEntryProps[];
}

function MenuSection({ title, entries }: MenuSectionProps) {
  return (
    <div>
      <h3 className="community-section-menu-header">{title}</h3>
      {entries.map((entry, index) => (
        <MenuEntry key={index} {...entry} />
      ))}
    </div>
  );
}

export default MenuSection;
