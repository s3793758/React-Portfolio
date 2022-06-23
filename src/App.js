import React, { Component, useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import axios from 'axios';

import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = () => {
    axios
      .get('/resumeData.json')
      .then((response) => {
        console.log('data', response.data);
        this.setState({ resumeData: response.data });
      })
      .catch((err) => console.log(err));
    /*   $.ajax({
      url: '/resumeData.json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
        setTimeout(() => {
          load.outerHTML = '';
        }, 500);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
    */
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
