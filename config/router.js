/**
 * 路由配置
 */
import React from 'react';
import Bundle from './bundle.js';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';
import App from '../src/components/App';
import MovieList from  'bundle-loader?lazy&name=lazy-[name]!../src/view/MovieList'
import Overview from  'bundle-loader?lazy&name=lazy-[name]!../src/view/Overview'
import NotFound from  'bundle-loader?lazy&name=lazy-[name]!../src/components/NotFound'

export default ReactDOM.render((
  <HashRouter>
    <App>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Redirect from="/" to="/movielist" />
          )}
        />
        <Route path='/movielist' component={() => (
          <Bundle load={MovieList}>
            {(MovieList) => <MovieList />}
          </Bundle>
        )} />
        <Route path='/overview' component={() => (
          <Bundle load={Overview}>
            {(Overview) => <Overview />}
          </Bundle>
        )} />
        <Route component={() => (
          <Bundle load={NotFound}>
            {(NotFound) => <NotFound />}
          </Bundle>
        )} />
      </Switch>
    </App>
  </HashRouter>
),document.getElementById('app'));

