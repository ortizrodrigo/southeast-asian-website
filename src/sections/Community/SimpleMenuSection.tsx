import { ExternalLink, List } from "../../components";
import type { StudentOrganization } from "./data/student-organizations";

interface SimpleMenuSectionProps {
  title: string;
  entries: StudentOrganization[];
}

function SimpleMenuSection({ title, entries }: SimpleMenuSectionProps) {
  return (
    <div>
      <h3 className="community-section-menu-header">{title}</h3>
      <List>
        {[...entries].sort((a, b) => a.name.localeCompare(b.name)).map((entry) => (
          <div key={entry.name}>
            {entry.name}{" "}
            <ExternalLink href={entry.instagramUrl} underline>
              {entry.instagramHandle}
            </ExternalLink>
          </div>
        ))}
      </List>
    </div>
  );
}

export default SimpleMenuSection;
