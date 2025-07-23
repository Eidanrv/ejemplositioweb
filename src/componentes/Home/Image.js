export default function Image({ src, alt = "SoftTech" }) {
  return <img src={src} alt={alt} className="carousel-img" />;
}
