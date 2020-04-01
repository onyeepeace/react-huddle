import React from 'react';

import Content from './components/Content';
import Footer from './components/Footer';

import logo from './assets/images/logo.svg';

function App() {
  return (
    <div className="App content">
      
      <header className="head">
        <img src={logo} alt="logo" />
      </header>

      <Content />
      <Footer />
    </div>
  );
}

export default App;
