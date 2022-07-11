import React from 'react';

const About = (props) => {
  const { name, city, image, bio, address, phone, email, resumedownload } =
    props.data || {};

  console.log({ dt: props.data });

  if (!props.data) {
    return null;
  }
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={'images/' + image}
            alt="Muhamad Sahid Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {address.city}
                  <br />
                  {address.state}, {address.zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a href="mailto:mas152q@gmail.com">{email}</a>
                </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumedownload} className="button" target="_blank">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
