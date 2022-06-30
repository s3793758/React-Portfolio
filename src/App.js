// default npm packages
import React, { useEffect, useState } from 'react';
// import extermnal file second
import axios from 'axios';
//  import internal files
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
// import of css is last
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    getResumeData();
  }, []);

  function getResumeData() {
    axios
      .get('/resumeData.json')
      .then((response) => {
        console.log('data', response.data);
        setResumeData(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Testimonials data={resumeData.testimonials} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
