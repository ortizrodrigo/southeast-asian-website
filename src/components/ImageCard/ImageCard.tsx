import "./ImageCard.css";

interface ImageCardProps {
  image: string;
  description?: string;
}

function ImageCard({ image, description }: ImageCardProps) {
  return (
    <div className="image-card">
      <img src={image} alt={description} className="image-card-img" />
      <div className="image-card-overlay">
        <p className="image-card-text">{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
