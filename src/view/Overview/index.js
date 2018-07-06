import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import actions from '../../store/actions';
import reducers from '../../store/reducers';
import request from '../utils/request';
import './index.less';

const store = createStore(reducers);

class Temp extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="overview">
        预览
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.overview });

const mapDispatchToProps = (dispatch) => {
  return {
    setLoading(loading) { 
      dispatch(actions.overview.setLoading({ loading }));
    }
  };
};

const ConnectedRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(Temp);

export default class Overview extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRoot />
      </Provider>
    );
  }
}