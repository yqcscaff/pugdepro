import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Slider from './components/Slider';

const Content = () => {
  return (
    <div>
      Content
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Slider />
      <div className="content-wrapper">{{Content}}</div>
    </div>
  );
};

render((
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
), document.querySelector('#app'));