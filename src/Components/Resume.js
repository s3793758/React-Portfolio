import React from 'react';

const Resume = (props) => {
  const { education, work, skills } = props.data || {};
  if (!props.data) {
    return null;
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education.map(function (education, index) {
                return (
                  <div key={index}>
                    <h3>{education.school}</h3>
                    <p className="info">
                      {education.degree} <span>&bull;</span>
                      <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {work.map(function (work, index) {
            return (
              <div key={index}>
                <h3>{work.company}</h3>
                <p className="info">
                  {work.title}
                  <span>&bull;</span> <em className="date">{work.years}</em>
                </p>
                <p className="newline">{work.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row skill">
        <h1>
          <span>Favorite Tech</span>
        </h1>

        <div className="skills">
          {skills.map(function (skills, index) {
            var projectImage = 'images/tech/' + skills.image;
            return (
              <div key={index} className=" feature-item">
                <img className="skill" alt={skills.name} src={projectImage} />
                <h5>{skills.name}</h5>
                <p>{skills.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
