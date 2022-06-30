import React, { Component, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';

const initialValues = {
  contactName: '',
  contactEmail: '',
  contactSubject: '',
  contactMessage: '',
};

const Contact = (props) => {
  const [state, setState] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!props.data) {
    return null;
  }

  const { name, address, phone, email, contactmessage } = props.data || {};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({ state });
    const allFieldsEntered = Object.keys(state).every(
      (field) => state[field].trim() !== ''
    );
    if (allFieldsEntered) {
      setErrorMessage('');
      setSuccessMessage('');
      axios
        .post(`${BASE_API_URL}/sendEmail`, { ...state })
        .then((res) => {
          console.log(res.data);
          setSuccessMessage('Email sent successfully.');
          setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
          setState(initialValues);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage('Error whilesending email. Please try again later.');
        });
    } else {
      setErrorMessage('Please enter all the field values.');
      setSuccessMessage('');
    }
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactmessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              {errorMessage && <p className="error-msg">{errorMessage}</p>}
              {successMessage && (
                <p className="success-msg">{successMessage}</p>
              )}
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  value={state.contactName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  value={state.contactEmail}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  value={state.contactSubject}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  value={state.contactMessage}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div>
                <button className="submit" type="submit">
                  Submit
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address</h4>
            <p className="address">
              {name}
              <br />
              {address.city} <br />
              {address.state}, {address.zip}
              <br />
              <span>
                <a href="mailto:mas152q@gmail.com">{email}</a>
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
