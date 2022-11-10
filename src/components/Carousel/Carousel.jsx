import "./Carousel.css";
import "swiper/swiper-bundle.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import Project from "../Projects/Project";
import { projects } from "../../utils/data/projects";
import { useRef } from "react";

function Carousel() {
  const ref = useRef(null);

  return (
    <>
      <section data-aos="zoom-in-up">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          speed={500}
          style={{ height: "100%", zIndex: 0 }}
          ref={ref}
          loop={window.innerWidth > 768 ? true : false}
          centeredSlides={true}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title} className="d-flex justify-content-center">
              <Project {...p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="d-flex justify-content-center gap-5 my-3" data-aos="zoom-in-up">
        <BsChevronLeft
          size={25}
          className="icon__chevron"
          onClick={() => ref.current.swiper?.slidePrev()}
        />
        <BsChevronRight
          size={25}
          className="icon__chevron "
          onClick={() => ref.current.swiper?.slideNext()}
        />
      </div>
    </>
  );
}

export default Carousel;
