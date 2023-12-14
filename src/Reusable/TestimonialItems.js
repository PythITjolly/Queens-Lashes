import React from "react";



function TestimonialItems({ src, text, label}) {
 

  return (
    <li className="testimonial__item">
      <div className="testimonial__item__link">
        <figure className="testimonial__item__pic-wrap" data-category={label}>
          <img src={src} alt="Customers" className="testimonial__item__img" />
        </figure>
        <div className="testimonial__item__info">
          <h5 className="testimonial__item__text">{text}</h5>
        </div>
      </div>
    </li>
  );
}

export default TestimonialItems;
