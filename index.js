import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from '@/Header';
import Slider from '@/Slider';
import Footer from '@/Footer';
import './app';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li><Link to="/">app</Link></li>
            <li><Link to="/header">header</Link></li>
            <li><Link to="/slider">slider</Link></li>
            <li><Link to="/footer">footer</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/header" component={Header} />
          <Route path="/slider" component={Slider} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </div>
    )
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    )
  }
}

render((
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
), document.querySelector('#app'));