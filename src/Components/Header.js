import React from 'react';

const Header = (props) => {
  console.log('header');
  const {
    name,
    occupation,
    description,
    jobDescription,
    employer,
    city,
    social,
  } = props.data || {};

  if (!props.data) {
    return null;
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a <span>{city}</span> based <span>{occupation}</span>,
            {description}
            <span>{employer}</span> where I<span> {jobDescription}</span>.
          </h3>
          <hr />
          <ul className="social">
            {social.map(function (network, index) {
              return (
                <li key={index}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
