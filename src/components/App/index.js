import React from 'react';
import Header from './Layout/Header';
import Slider from './Layout/Slider';
import './index.less';

const App = (props) => {
  return (
    <div className="pugde-wrapper">
      <Slider />
      <div className="pugde-wrapper-content">
        <Header />
        <div className="content-wreapper">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default App;