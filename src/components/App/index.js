import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles['nav-link']}>
        <ul>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;