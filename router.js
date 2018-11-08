/**
 * 路由配置
 */
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './src/components/App';
import NotFound from './src/components/NotFound';
import Dashboard from './src/pages/Dashboard';

export default render((
  <Router>
    <div>
      <Route path='/' component={App} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/NotFound' component={NotFound} />
    </div>
  </Router>
), document.getElementById('app'));
