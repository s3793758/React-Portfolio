import React from 'react';
const Testimonials = (props) => {
  if (!props.data) {
    return null;
  }
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              {props.data.testimonials.map(function (testimonials, index) {
                return (
                  <li key={index}>
                    <blockquote>
                      <p>{testimonials.text}</p>
                      <cite>{testimonials.user}</cite>
                    </blockquote>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
