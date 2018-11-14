import React, { Component } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import 'normalize.css';
import Header from '../Layout/Header';
import './index.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav: [{
        id: '1',
        title: '概况',
        href: '/dashboard',
        active: true
      }, {
        id: '2',
        title: '预览',
        href: '/overview'
      }]
    };
  }
  componentDidMount() {
    const { location } = this.props;
    const { nav } = this.state;
    this.setState({ nav: nav.map(item => ({ ...item, active: item.href.indexOf(location.pathname) !== -1 ? true : false})) });
  }
  toggle(item) {
    const { href, id } = item;
    const { nav } = this.state;
    if (this.props.location.pathname.indexOf(href) === -1) {
      this.setState({ nav: nav.map(item => ({ ...item, active: item.id.indexOf(id) !== -1 ? true : false})) });
      this.props.history.push(href);
    }
  }
  render() {
    const { nav } = this.state;
    const { children, location } = this.props;
    console.log(location);
    return (
      <div className="prayer-wrapper">
        <div className="slider prayer-layout-sider prayer-pro-components-sider">
          <ul className="prayer-slider-ul-menu">
            {
              nav.map(item => {
                return (
                  <li
                    key={item.id}
                    className={classNames('prayer-menu-item', item.active ? 'active' : '')}
                  >
                    <a onClick={() => this.toggle(item)}>{item.title}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="prayer-wrapper-content">
          <Header />
          <div style={{ margin: '24px 24px 0px', paddingTop: 0 }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);