import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Reservation } from './components/Reservation';

import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/" >
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
