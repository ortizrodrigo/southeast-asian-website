import "./Gallery.css";
import { ImageCard } from "../../components";

interface GalleryItem {
  image: string;
  description: string;
}

interface GalleryProps {
  items: GalleryItem[];
  columns?: number;
  gap?: number;
  padding?: number;
}

function Gallery({ items, columns = 3, gap = 16, padding = 16 }: GalleryProps) {
  return (
    <div
      className="gallery"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
        padding: `${padding}px`,
      }}
    >
      {items.map((item, index) => (
        <ImageCard key={index} image={item.image} description={item.description} />
      ))}
    </div>
  );
}

export default Gallery;
