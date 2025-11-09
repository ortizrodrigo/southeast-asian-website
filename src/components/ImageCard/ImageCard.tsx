import "./ImageCard.css";

interface ImageCardProps {
  image: string;
  description?: string;
  preserveAspectRatio?: boolean;
  maxWidth?: string | number;
  minWidth?: string | number;
}

function ImageCard({
  image,
  description,
  preserveAspectRatio = false,
  maxWidth,
  minWidth, // 👈 destructure
}: ImageCardProps) {
  const style: React.CSSProperties = {
    aspectRatio: preserveAspectRatio ? "auto" : "1 / 1",
    maxWidth,
    minWidth,
  };

  return (
    <div className="image-card" style={style}>
      <img src={image} alt={description} className="image-card-img" />
      <div className="image-card-overlay">
        <p className="image-card-text">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
