import React, { Component } from 'react';
import classNames from 'classnames';
import 'normalize.css';
import './index.less';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { children, location } = this.props;
    console.log(location);
    return (
      <div className="prayer-wrapper">
        <div className={classNames('slider', 'prayer-layout-sider', 'prayer-pro-components-sider')}>
          <ul className="prayer-slider-ul-menu">
            <li className="prayer-menu-item"><a href='/dashboard'>Dashboard</a></li>
            <li className="prayer-menu-item"><a href='/overview'>overview</a></li>
          </ul>
        </div>
        <div className="prayer-wrapper-content">
          {children}
        </div>
      </div>
    );
  }
}

export default App;