import type { CSSProperties } from "react";
import { ImageCard } from "../../components";

interface GalleryItem {
  image: string;
  description: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: number;
  gap?: number | string;
  padding?: number | string;
}

function Gallery({ items, columns = 3, gap = 16, padding = 16 }: GalleryProps) {
  const style: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    padding,
  };

  return (
    <div className="gallery" style={style}>
      {items.map((item, index) => (
        <ImageCard key={index} image={item.image} description={item.description} />
      ))}
    </div>
  );
}

export default Gallery;
