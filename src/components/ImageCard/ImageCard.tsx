import "./ImageCard.css";

interface ImageCardProps {
  image: string;
  description?: string;
  preserveAspectRatio?: boolean;
}

function ImageCard({ image, description, preserveAspectRatio = false }: ImageCardProps) {
  return (
    <div className="image-card" style={{ aspectRatio: preserveAspectRatio ? "auto" : "1 / 1" }}>
      <img src={image} alt={description} className="image-card-img" />
      <div className="image-card-overlay">
        <p className="image-card-text">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
