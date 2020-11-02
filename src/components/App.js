import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Footer from './Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import News from '../pages/News';
import Cartoons from '../pages/Cartoons';
import Entertainment from '../pages/Entertainment';
import Movies from '../pages/Movies';
import Series from '../pages/Series';
import About from '../pages/About';
import Music from '../pages/Music';
import Religious from '../pages/Religious';
import PlayerPage from '../pages/PlayerPage';
import NoMatch from '../pages/NoMatch';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/news" component={News} />
          <Route path="/cartoons" component={Cartoons} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/music" component={Music} />
          <Route path="/religious" component={Religious} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/about" component={About} />
          <Route path="/play" component={PlayerPage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
