import React from 'react';
import { render } from 'react-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './style.css';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
