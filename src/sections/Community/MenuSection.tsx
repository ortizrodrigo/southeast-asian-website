import MenuEntry from "./MenuEntry";
import type { MenuEntryProps } from "./MenuEntry";
import "./CommunitySection.css";
import { List } from "../../components";

interface MenuSectionProps {
  title: string;
  entries: MenuEntryProps[];
}

function MenuSection({ title, entries }: MenuSectionProps) {
  return (
    <div>
      <h3 className="community-section-menu-header">{title}</h3>
      <List spacing="8px">
        {entries.map((entry, index) => (
          <MenuEntry key={index} {...entry} />
        ))}
      </List>
    </div>
  );
}

export default MenuSection;
