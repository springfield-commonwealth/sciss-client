const GalleryCard = (item, index) => {
  const handleClick = () => {
    if (item.link) {
      const target = document.querySelector(item.link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      key={index}
      className="card-base"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <div className="card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="gallery-overlay">
          <h3>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
