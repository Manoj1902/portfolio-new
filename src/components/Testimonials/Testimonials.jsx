import React from "react";
import styles from "./Testimonials.module.css";
import Slider from "react-slick";
import testimonials from "../../data/testimonials.json";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className={styles.container} id="testimonials">
      <h2 className={styles.title}>Testimonials</h2>
      <div>
        <div className={styles.testimonials}>
          <Slider {...settings}>
            {testimonials.map((testimonial, id) => {
              return (
                <div key={id} className={styles.testimonialContainer}>
                  <div className={styles.testimonialContent}>
                    <p>{testimonial.comment}</p>
                    <div className={styles.testimonialInfo}>
                      <h4>{testimonial.name}</h4>
                      <h5>{testimonial.city}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
