import { useRouter } from "next/router";

const CarouselCard = (item, index) => {
  const router = useRouter();

  const handleClick = () => {
    if (item.link) {
      router.push(item.link);
    }
  };

  return (
    <div
      key={index}
      className="carousel-card"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <div className="carousel-card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="carousel-overlay">
          <h3>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
