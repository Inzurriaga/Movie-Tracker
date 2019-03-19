import React, { Component } from 'react';
import MainPage from '../MainPage/MainPage.js'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default App;
