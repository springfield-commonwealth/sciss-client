import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageSlider = ({ images }) => {
  return (
    <div className="image-slider">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 1500 }}
        className="image-slider__swiper"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <picture>
              {img.sources &&
                img.sources.map((source, sidx) => (
                  <source
                    key={sidx}
                    srcSet={source.srcSet}
                    media={source.media}
                  />
                ))}
              <img
                src={img.src}
                alt={img.alt || "Slide image"}
                className="image-slider__img"
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          srcSet: PropTypes.string.isRequired,
          media: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default ImageSlider;
